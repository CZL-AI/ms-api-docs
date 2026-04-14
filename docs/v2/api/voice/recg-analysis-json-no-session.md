# AI宠物声音识别分析（上传文件，JSON返回，无会话）

## 接口说明
---
该接口用于上传音频并直接获取一次性 JSON 结果，不要求 `session_id`，也不会保存分析记录。

适合以下场景：

- 服务端批量处理后只取同步结果
- 联调时想直接拿文本和结构化结果
- 不希望为每次调用创建会话

## 调用接口：
**请求方式：** `POST（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-voice-recg/analysis-json-no-session`

**请求头：**

```http
Authorization: Bearer [ACCESS_TOKEN]
Accept: application/json
```

## 请求参数：[multipart/form-data]

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `voice` | `file` | 是 | 上传的音频文件，支持 `mp3`、`aac`、`wav`、`m4a` |
| `animal_type` | `integer` | 否 | 动物类型：`1`-猫，`2`-狗，默认 `1` |

**curl 示例：**

```bash
curl --location 'https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-voice-recg/analysis-json-no-session' \
  -H 'Authorization: Bearer [ACCESS_TOKEN]' \
  --form 'animal_type=1' \
  --form 'voice=@"/path/to/audio.mp3"'
```

## 返回结果

```json
{
  "data": {
    "analysis_result": "声音类别：犬类警觉叫声\n声音标签：急促、警戒\n翻译：附近有动静，我正在提醒你。",
    "structured_result": {
      "voice_category": "犬类警觉叫声",
      "voice_label": "急促、警戒",
      "translation": "附近有动静，我正在提醒你。"
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
| `data.structured_result` | `object` | 轻量结构化结果 |
| `data.voice_url` | `string` | 服务端上传后的音频 URL |

## 错误响应

| HTTP 状态码 | 说明 |
| --- | --- |
| `400` | 缺少必要参数，或请求格式错误 |
| `401` | 未授权，token 无效或已过期 |

## 补充说明

- 无会话版不会创建会话，也不会保存结果
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
    path="/ai-voice-recg/analysis-json-no-session"
    version="v2"
  />
</ClientOnly>
