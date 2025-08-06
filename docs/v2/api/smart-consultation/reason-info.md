# 3、推理文案【流式】 - 智能问诊模块

## 接口描述
---
该接口用于获取智能问诊系统在当前会话中生成的推理文案内容。推理文案通常基于用户历史回答，用于解释系统下一步提问的逻辑依据。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/aidoc/reason-info?token=[ACCESS_TOKEN][&is_sse=true]`

> ⚠️ 注意：当 `is_sse=true` 时，接口使用标准的SSE事件类型返回；否则使用传统的 `$` 结尾格式返回。

## 请求参数
```json
{
    "pet_profile_id": 3147,
    "session_id": "26494514-5f81-468f-94c7-539706282337"
}
```

## 参数列表
### Query 参数
| 名称            | 类型    | 必填 | 说明                                    |
| --------------- | ------- | ---- | --------------------------------------- |
| token           | string  | 是   | 登录凭证，用于身份验证                  |
| is_sse          | boolean | 否   | 是否使用SSE格式返回，默认false          |

### Body 参数（`application/json`）
| 名称             | 类型   | 必填 | 说明                             |
|------------------|--------|------|----------------------------------|
| pet_profile_id   | number | 是   | 宠物档案 ID，用于绑定宠物信息     |
| session_id       | string | 是   | 会话唯一标识，用于维持上下文状态 |

## 返回结果

### SSE格式返回（当 is_sse=true 时）

SSE事件类型说明：

```
event: start_stream
data: {"type":"content","data": None}

event: metadata
data: {"type":"reference","data": "引用了13篇医疗报告"}

event: metadata
data: {"type":"thinking","data": "思考内容"}

event: stream
data: {"type":"content","data": "猫咪肚子痛的原因有很多，例如**饮食不当、寄生虫感染、肠胃炎**等都可能引起。我会尽力帮助您找出原因。"}

event: end_stream
data: {"type":"content","data": None}
```

| 事件类型     | 说明           | 数据格式 |
|--------------|----------------|----------|
| start_stream | 流开始事件     | `{"type":"content","data": None}` |
| metadata     | 元数据事件     | `{"type":"reference","data": "引用内容"}` 或 `{"type":"thinking","data": "思考内容"}` |
| stream       | 数据流事件     | `{"type":"content","data": "实际内容"}` |
| end_stream   | 流结束事件     | `{"type":"content","data": None}` |
| error        | 错误事件       | `{"type":"content","data": 错误信息}` |

### 传统格式返回（当 is_sse=false 或不传时）
```plaintext
猫咪肚子痛的原因有很多，例如**饮食不当、寄生虫感染、肠胃炎**等都可能引起。我会尽力帮助您找出原因。

为了更准确判断病因,我需要了解更多细节:
$
```

#### 返回数据说明

| 特征           | 说明                                                                 |
|----------------|----------------------------------------------------------------------|
| 流式输出       | 响应内容分批次发送，客户端需持续读取数据流                           |
| 内容组成       | 包含自然语言描述、强调标记（如加粗）以及引导性语句                   |
| 结束标识符     | 最后一个数据块以 `$` 符号结尾，表示本次数据流传输已完成              |
| 使用场景       | 通常用于辅助用户理解系统下一步提问的逻辑依据                         |

## 使用场景说明

该接口通常在以下环节中调用：

- 用户完成上一轮问答后；
- 系统准备提出下一个问题时；
- 需要向用户解释为何提出某些特定问题时，提升交互透明度和信任感。

## 注意事项

1. **连接管理**：客户端应正确处理连接建立、数据接收和连接关闭流程
2. **错误处理**：需要监听error事件并适当处理错误情况
3. **字符编码**：确保正确处理UTF-8编码的中文内容
4. **超时设置**：设置合理的超时时间，避免长时间等待无响应
5. **重试机制**：网络中断时应实现自动重连机制

## 接口调试
---
<script setup>  
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'  
</script>  

<ClientOnly>  
  <SwaggerUI   
    tag="question"   
    type="post"   
    path="/aidoc/reason-info" 
    version="v2"  
  />  
</ClientOnly>