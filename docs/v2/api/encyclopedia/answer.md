# 养宠百科-AI问答

## 接口说明
---
开发者在获取 session_id 后，即可调用本接口向 AI 发起问答请求，获取流式回答内容。

## 调用接口：
**请求方式：** `POST（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/ai-conv/answer?token=[ACCESS_TOKEN]&is_sse=true`

> ⚠️ 注意：当 `is_sse=true` 时，接口使用标准的 SSE 事件类型返回；否则使用传统的 `$` 结尾格式返回。

## 请求参数：
```json
{
    "session_id": "689ddf5e-ebce-4504-92eb-b2885c9d138b",
    "user_input": "金毛犬每天需要喂食几次？"
}
```

## 参数列表：
### Query 参数
| 名称    | 类型    | 必填 | 说明                                   |
| ------- | ------- | ---- | -------------------------------------- |
| token   | string  | 是   | 登录凭证，用于身份验证                 |
| is_sse  | boolean | 否   | 是否使用 SSE 格式返回，默认 false      |

### Body 参数（`application/json`）
| 名称        | 类型   | 必填 | 说明                       |
| ----------- | ------ | ---- | -------------------------- |
| session_id  | string | 是   | 会话ID，通过开始会话接口获取 |
| user_input  | string | 是   | 用户输入的问题内容         |

## 返回结果

### SSE 格式返回（当 is_sse=true 时）

SSE 事件类型说明：

```
event: start_stream
data: {"type":"content","data": None}

event: stream
data: {"type":"content","data": "金毛寻回犬成犬每天通常需要喂食2次，早晚各一次。"}

event: end_stream
data: {"type":"content","data": None}

event: error
data: {"type":"content","data": None}

event: signal_stop
data: {"type":"content","data": "输入内容不符合规范，请重新输入"}
```

| 事件类型     | 说明                                                                 | 数据格式 |
|--------------|----------------------------------------------------------------------|----------|
| start_stream | 流开始事件                                                           | `{"type":"content","data": None}` |
| metadata     | 元数据事件                                                           | `{"type":"reference","data": "引用内容"}` 或 `{"type":"thinking","data": "思考内容"}` |
| stream       | 数据流事件                                                           | `{"type":"content","data": "实际内容"}` |
| end_stream   | 流结束事件                                                           | `{"type":"content","data": None}` |
| error        | 错误事件                                                             | `{"type":"content","data": 错误信息}` |
| signal_stop  | 流程终止事件【输入内容不符合规范时触发，会中断流程】                 | `{"type":"content","data": "输入内容不符合规范，请重新输入"}` |

### 传统格式返回（当 is_sse=false 或不传时）
正常情况下，接口以流式文本形式返回给开发者：
```
Content-Type: text/event-stream
AI生成的回答片段1

AI生成的回答片段2

AI生成的回答片段3

...

AI生成的最后一个回答片段$
```

## 返回参数说明：
- 响应以流式文本形式返回，客户端需要能够处理流式数据。

- 流式传输的内容会分多次发送。

- 最后一个数据块以 `$` 符号结尾，表示流式传输结束。

- 客户端应持续读取数据流，直到接收到以 `$` 结尾的数据块。

## 注意事项：
1. **连接管理**：客户端应正确处理连接建立、数据接收和连接关闭流程
2. **错误处理**：需要监听 error 事件并适当处理错误情况
3. **字符编码**：确保正确处理 UTF-8 编码的中文内容
4. **超时设置**：设置合理的超时时间，避免长时间等待无响应
5. **重试机制**：网络中断时应实现自动重连机制

## 接口调试：
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    tag="ai-conv"
    type="post"
    path="/ai-conv/answer"
  />
</ClientOnly>
