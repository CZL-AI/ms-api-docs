# 获取识别结果说明文档
---
开发者需要按照如下步骤完成：
耳道检测API前，都需要先获取session_id。

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/aipic/summary?token=[ACCESS_TOKEN]&is_sse=true&is_simple=true`

> ⚠️ 注意：当 `is_sse=true` 时，接口使用标准的SSE事件类型返回；否则使用传统的 `$` 结尾格式返回。

## 请求参数：
```json
{
    "img_url":"https://angular00001.oss-cn-beijing.aliyuncs.com/applet.png",
    "sub_module_type":7,
    "pet_profile_id":0,
    "session_id":"689ddf5e-ebce-4504-92eb-b2885c9d138b"
}
```

## 参数列表：
### Query 参数
| 名称            | 类型    | 必填 | 说明                                    |
| --------------- | ------- | ---- | --------------------------------------- |
| token           | string  | 是   | 登录凭证，用于身份验证                  |
| is_sse          | boolean | 否   | 是否使用SSE格式返回，默认false          |
| is_simple          | boolean | 否   | 是否是精简模式，默认false          |

### Body 参数（`application/json`）
| 名称            | 类型   | 必填 | 说明                                               |
| --------------- | ------ | ---- | -------------------------------------------------- |
| img_url         | string | 是   | 识别宠物图片地址（需提供一张能正常访问的图片地址） |
| sub_module_type | number | 是   | 子模块类型，固定为7                                |
| pet_profile_id  | number | 是   | 宠物档案ID                                         |
| session_id      | string | 是   | 会话ID                                             |

## 返回结果

### SSE格式返回（当 is_sse=true 时）

#### SSE事件类型说明：

```
event: start_stream
data: {"type":"content","data": None}

event: stream
data: {"type":"content","data": "经过分析，发现宠物耳道存在轻微红肿和少量褐色分泌物，疑似轻度耳螨感染。建议定期清洁耳道，并咨询兽医确认治疗方案。"}

event: end_stream
data: {"type":"content","data": None}

event: error
data: {"type":"content","data": None}

event: signal_stop
data: {"type":"content","data": "图片不符合规范, 请重新上传"}
```

| 事件类型     | 说明           | 数据格式 |
|--------------|----------------|----------|
| start_stream | 流开始事件     | `{"type":"content","data": None}` |
| metadata     | 元数据事件     | `{"type":"reference","data": "引用内容"}` 或 `{"type":"thinking","data": "思考内容"}` |
| stream       | 数据流事件     | `{"type":"content","data": "实际内容"}` |
| end_stream   | 流结束事件     | `{"type":"content","data": None}` |
| error        | 错误事件       | `{"type":"content","data": 错误信息}` |
| signal_stop   | 流程终止事件【图片不符合规范错误，会中断流程】     | `{"type":"content","data": "图片不符合规范, 请重新上传"}` |

#### 图片无法分析的SSE返回示例：
```
event: start_stream
data: {"type":"content","data": None}

event: signal_stop
data: {"type":"content","data": "图片"}

event: signal_stop
data: {"type":"content","data": "里面"}

event: signal_stop
data: {"type":"content","data": "没有猫狗"}

event: end_stream
data: {"type":"content","data": None}
```

### 传统格式返回（当 is_sse=false 或不传时）
正常情况下，接口会返回以流式文本形式返回给到开发者：
```
Content-Type: text/event-stream
AI生成的图片分析结果片段1

AI生成的图片分析结果片段2

AI生成的图片分析结果片段3

...

AI生成的最后一个图片分析结果片段$
```

## 返回参数说明：
- 响应是以流式文本形式返回的，客户端需要能够处理流式数据。

- 流式传输的内容会分多次发送。

- 最后一个数据块以$符号结尾，表示流式传输结束。

- 客户端应该持续读取数据流，直到接收到以$结尾的数据块。

## 注意事项：
1. **连接管理**：客户端应正确处理连接建立、数据接收和连接关闭流程
2. **错误处理**：需要监听error事件并适当处理错误情况
3. **字符编码**：确保正确处理UTF-8编码的中文内容
4. **超时设置**：设置合理的超时时间，避免长时间等待无响应
5. **重试机制**：网络中断时应实现自动重连机制

## 接口调试：
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    tag="aipic"
    type="post"
    path="/aipic/summary" 
  />
</ClientOnly>