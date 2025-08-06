# 11、获取问诊总结【流式】 - 智能问诊模块

## 接口描述
---

该接口用于获取一次完整智能问诊流程结束后的总结信息。系统将根据用户的问答记录、上传图片的分析结果以及推理逻辑，生成一份结构化的问诊总结，供用户查看或后续报告生成使用。

> ⚠️ 注意：本接口以**流式文本**形式返回内容，适合逐步展示给用户阅读；同时需携带有效 `token` 进行身份认证。当 `is_sse=true` 时，接口使用标准的SSE事件类型返回；否则使用传统的 `$` 结尾格式返回。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/aidoc/summary?token=[ACCESS_TOKEN][&is_sse=true]`

## 请求参数
```json
{
    "pet_profile_id": 3147,
    "session_id": "c139a49a-ca34-472d-9749-6cd976cbb937"
}
```

## 参数列表
### Query 参数
| 名称            | 类型    | 必填 | 说明                                    |
| --------------- | ------- | ---- | --------------------------------------- |
| token           | string  | 是   | 登录凭证，用于身份验证                  |
| is_sse          | boolean | 否   | 是否使用SSE格式返回，默认false          |

### Body 参数（`application/json`）
| 名称            | 类型   | 必填 | 说明                  |
| --------------- | ------ | ---- | --------------------- |
| pet_profile_id  | number | 是   | 宠物档案 ID，用于绑定宠物信息            |
| session_id      | string | 是   | 会话唯一标识，用于维持上下文状态 |

## 返回结果

### SSE格式返回（当 is_sse=true 时）

SSE事件类型说明：

```
event: start_stream
data: {"type":"content","data": None}

event: metadata
data: {"type":"reference","data": "引用了25篇医疗报告"}

event: metadata
data: {"type":"thinking","data": "综合分析用户提供的症状信息"}

event: stream
data: {"type":"content","data": "【病情小结】"}

event: stream
data: {"type":"content","data": ""}

event: stream
data: {"type":"content","data": "**基本信息:**"}

event: stream
data: {"type":"content","data": "- 宠物昵称: 无。"}

event: stream
data: {"type":"content","data": "- 宠物种类: 狗。"}

event: stream
data: {"type":"content","data": "- 品种: 无。"}

event: stream
data: {"type":"content","data": "- 年龄: 无。"}

event: stream
data: {"type":"content","data": "- 体重: 无。"}

event: stream
data: {"type":"content","data": ""}

event: stream
data: {"type":"content","data": "**主诉:**"}

event: stream
data: {"type":"content","data": "狗狗不吃饭。"}

event: stream
data: {"type":"content","data": ""}

event: stream
data: {"type":"content","data": "**病情记录:**"}

event: stream
data: {"type":"content","data": "狗狗出现食欲不振的情况，目前具体原因不明，可能与消化系统问题或情绪压力有关。"}

event: end_stream
data: {"type":"content","data": None}

event: error
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
【病情小结】

**基本信息:**
- 宠物昵称: 无。
- 宠物种类: 狗。
- 品种: 无。
- 年龄: 无。
- 体重: 无。

**主诉:**
狗狗不吃饭。

**病情记录:**
狗狗出现食欲不振的情况，目前具体原因不明，可能与消化系统问题或情绪压力有关。
$
```

#### 返回数据说明

| 特征           | 说明                                                                 |
|----------------|----------------------------------------------------------------------|
| 流式输出       | 响应内容分批次发送，客户端需持续读取数据流                           |
| 内容组成       | 包含"病情小结"、"基本信息"、"主诉"、"病情记录"等部分                |
| 结束标识符     | 最后一个数据块以 `$` 符号结尾，表示本次数据流传输已完成              |
| 使用场景       | 用于展示问诊总结内容，作为生成最终报告的前置步骤                     |

## 使用场景说明

该接口通常在以下环节中调用：

- 用户完成所有问诊交互；
- 系统准备生成最终报告前；
- 需要向用户展示问诊过程的汇总信息时。

## 注意事项

1. **连接管理**：客户端应正确处理连接建立、数据接收和连接关闭流程
2. **错误处理**：需要监听error事件并适当处理错误情况
3. **字符编码**：确保正确处理UTF-8编码的中文内容
4. **超时设置**：设置合理的超时时间，避免长时间等待无响应
5. **重试机制**：网络中断时应实现自动重连机制
6. **总结内容**：总结内容基于用户的回答和图片分析结果生成，仅供参考
7. **专业建议**：如果宠物症状持续或加重，建议及时咨询专业兽医

## 接口调试
---
<script setup>  
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'  
</script>  

<ClientOnly>  
  <SwaggerUI   
    tag="summary"   
    type="post"   
    path="/aidoc/summary"  
    version="v2" 
  />  
</ClientOnly>