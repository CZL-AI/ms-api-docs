# AI宠物声音识别分析（上传文件，无会话）

## 接口说明
---
该接口用于直接上传音频文件并获取流式分析结果，不要求传入 `session_id`，也不会写入医疗记录或聊天记录。

适合以下场景：

- 设备端临时试跑或能力验证
- 只关心实时分析结果，不需要历史留痕
- 服务端中转调用，不希望创建独立会话

> 如需把分析结果与会话、报告列表或历史记录关联，请改用会话型接口 [`analysis`](./recg-analysis.md)。

## 调用接口：
**请求方式：** `POST（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-voice-recg/analysis-no-session`

**请求头：**

```http
Authorization: Bearer [ACCESS_TOKEN]
Accept: text/event-stream
```

## 请求参数：[multipart/form-data]

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `voice` | `file` | 是 | 上传的音频文件，支持 `mp3`、`aac`、`wav`、`m4a` |
| `animal_type` | `integer` | 否 | 动物类型：`1`-猫，`2`-狗，默认 `1` |

**curl 示例：**

```bash
curl -N --location 'https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-voice-recg/analysis-no-session' \
  -H 'Authorization: Bearer [ACCESS_TOKEN]' \
  --form 'animal_type=1' \
  --form 'voice=@"/path/to/audio.mp3"'
```

## 返回结果

该接口为流式返回（SSE），响应 `Content-Type` 为 `text/event-stream`。

```text
data: 这段声音

data: 更像是一只猫

data: 在轻声呼唤，

data: 整体情绪较平稳，偏向寻求关注。

data: [DONE]
```

## 返回参数说明

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `data` | `string` | 每次推送的文本片段，客户端按顺序拼接即可 |
| `[DONE]` | — | 流式结束标志 |

## 错误响应

| HTTP 状态码 | 说明 |
| --- | --- |
| `400` | 缺少必要参数，或请求格式错误 |
| `401` | 未授权，token 无效或已过期 |

## 补充说明

- 无会话版不要求调用 `session-start`
- 无会话版不会保存分析结果，也不会生成 `medical_record`
- 上传版只支持 `multipart/form-data`
- 当 `voice` 缺失时，实际错误通常会先由 OpenAPI 校验器返回 required-property 消息

## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    type="post"
    path="/ai-voice-recg/analysis-no-session"
    version="v2"
  />
</ClientOnly>
