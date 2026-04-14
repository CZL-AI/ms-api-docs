# AI宠物声音识别分析（通过URL，JSON返回）

## 接口说明
---
该接口用于直接传入音频 URL，并返回一次性 JSON 结果。适合音频文件已经在 OSS 或其他对象存储中的场景。

与 [`analysis-by-url`](./recg-analysis-by-url.md) 的区别是：

- 本接口返回标准 JSON
- 流式消费方请使用 SSE 版本

## 接口调用前置步骤

调用本接口前，需先调用 [session-start](../smart-consultation/session-start) 获取 `session_id`，传参时 `module_type` 固定为 **`13`**（声音识别模块）。

```json
{
    "module_type": 13,
    "pet_profile_id": 3147
}
```

## 调用接口：
**请求方式：** `POST（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-voice-recg/analysis-by-url-json`

**请求头：**

```http
Authorization: Bearer [ACCESS_TOKEN]
Content-Type: application/json
Accept: application/json
```

## 请求参数：[application/json]

```json
{
    "session_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "voice_url": "https://your-oss-bucket.oss-cn-shenzhen.aliyuncs.com/audio/xxx.mp3",
    "animal_type": 1
}
```

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `session_id` | `string` | 是 | 会话ID，由 session-start 接口获取 |
| `voice_url` | `string` | 是 | 音频文件的可访问 URL |
| `animal_type` | `integer` | 否 | 动物类型：`1`-猫，`2`-狗，默认 `1` |

## 返回结果

```json
{
  "data": {
    "analysis_result": "声音类别：猫咪轻叫\n声音标签：轻柔、撒娇\n翻译：我想和你互动一下。",
    "structured_result": {
      "voice_category": "猫咪轻叫",
      "voice_label": "轻柔、撒娇",
      "translation": "我想和你互动一下。"
    },
    "voice_url": "https://your-oss-bucket.oss-cn-shenzhen.aliyuncs.com/audio/xxx.mp3"
  },
  "message": "Get successfully.",
  "success": true
}
```

## 返回参数说明

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `data.analysis_result` | `string` | 完整分析文本 |
| `data.structured_result` | `object` | 轻量结构化结果 |
| `data.voice_url` | `string` | 调用方传入的音频 URL |

## 错误响应

| HTTP 状态码 | 说明 |
| --- | --- |
| `400` | 缺少必要参数（`voice_url` 或 `session_id`） |
| `401` | 未授权，token 无效或已过期 |

## 补充说明

- URL 版应始终使用 `application/json`
- 该接口会保存结果到会话记录
- 当 `voice_url` 缺失时，实际错误通常会先由 OpenAPI 校验器返回 required-property 消息

## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    type="post"
    path="/ai-voice-recg/analysis-by-url-json"
    version="v2"
  />
</ClientOnly>
