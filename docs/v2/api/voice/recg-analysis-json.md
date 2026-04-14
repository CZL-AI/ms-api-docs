# AI宠物声音识别分析（上传文件，JSON返回）

## 接口说明
---
该接口与 [`analysis`](./recg-analysis.md) 使用同一套会话型上传流程，但返回结果为一次性 JSON，而不是 SSE 流。

适合以下场景：

- 调用方希望直接拿到结构化 JSON 结果
- 后端服务需要同步拿到完整分析文本并继续加工
- 不方便处理 SSE 长连接

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
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-voice-recg/analysis-json`

**请求头：**

```http
Authorization: Bearer [ACCESS_TOKEN]
Accept: application/json
```

## 请求参数：[multipart/form-data]

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `voice` | `file` | 是 | 上传的音频文件，支持 `mp3`、`aac`、`wav`、`m4a` |
| `session_id` | `string` | 是 | 会话ID，由 session-start 接口获取 |
| `animal_type` | `integer` | 否 | 动物类型：`1`-猫，`2`-狗，默认 `1` |

**curl 示例：**

```bash
curl --location 'https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-voice-recg/analysis-json' \
  -H 'Authorization: Bearer [ACCESS_TOKEN]' \
  --form 'session_id=[SESSION_ID]' \
  --form 'animal_type=1' \
  --form 'voice=@"/path/to/audio.mp3"'
```

## 返回结果

```json
{
  "data": {
    "analysis_result": "声音类别：猫咪呼唤\n声音标签：轻柔、寻求关注\n翻译：主人，我想靠近你。",
    "structured_result": {
      "voice_category": "猫咪呼唤",
      "voice_label": "轻柔、寻求关注",
      "translation": "主人，我想靠近你。"
    },
    "voice_url": "https://example.oss-cn-shenzhen.aliyuncs.com/audio/voice.mp3"
  },
  "message": "Get successfully.",
  "success": true
}
```

## 返回参数说明

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `data.analysis_result` | `string` | 完整分析文本 |
| `data.structured_result` | `object` | 对分析文本做的轻量解析结果 |
| `data.structured_result.voice_category` | `string` | 从“声音类别”行解析出的值 |
| `data.structured_result.voice_label` | `string` | 从“声音标签”行解析出的值 |
| `data.structured_result.translation` | `string` | 从“翻译”行解析出的值 |
| `data.voice_url` | `string` | 服务端上传后的音频 URL |

## 错误响应

| HTTP 状态码 | 说明 |
| --- | --- |
| `400` | 缺少必要参数，或请求格式错误 |
| `401` | 未授权，token 无效或已过期 |

## 补充说明

- 该接口会保存结果到会话记录
- `structured_result` 只会解析包含 `:` 或 `：` 的文本行
- 若模型输出格式与预期不一致，`structured_result` 可能为空对象或包含额外键
- 上传版只支持 `multipart/form-data`

## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    type="post"
    path="/ai-voice-recg/analysis-json"
    version="v2"
  />
</ClientOnly>
