# AI宠物声音识别分析（上传文件）

## 产品介绍
---
AI宠物声音识别服务能够通过分析上传的宠物音频文件，对宠物的声音进行智能识别与解读。支持猫和狗两种动物类型，采用流式响应方式实时返回分析结果。与声音情绪识别不同，该服务基于大模型 prompt 配置进行综合声音分析，输出更丰富的声音描述与健康提示。

## 使用场景
---
- **宠物日常监护**：分析宠物叫声，了解宠物当前状态，及时发现异常
- **宠物医疗辅助**：辅助兽医通过宠物声音判断健康状况
- **宠物行为研究**：结合声音数据分析宠物行为规律
- **智能设备集成**：集成到宠物智能硬件中实现实时声音监测

## 接口调用前置步骤

调用本接口前，需先调用 [session-start](../smart-consultation/session-start) 获取 `session_id`，传参时 `module_type` 固定为 **`13`**（声音识别模块）。

注意：**声音识别接口本身不需要传 `pet_profile_id`**，但前置的 `session-start` 是否需要传入，请以当前 `session-start` 文档和实际服务实现为准。当前示例如下：

```json
{
    "module_type": 13,
    "pet_profile_id": 3147
}
```

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-voice-recg/analysis`

**请求头：**

```http
Authorization: Bearer [ACCESS_TOKEN]
Accept: text/event-stream
```

## 请求参数：[multipart/form-data]

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `voice` | `file` | 是 | 上传的音频文件，支持 `mp3`、`aac`、`wav`、`m4a` |
| `session_id` | `string` | 是 | 会话ID，由 session-start 接口获取 |
| `animal_type` | `integer` | 否 | 动物类型：`1`-猫，`2`-狗，默认 `1` |

**curl 示例：**

```bash
curl -N --location 'https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-voice-recg/analysis' \
  -H 'Authorization: Bearer [ACCESS_TOKEN]' \
  --form 'session_id=[SESSION_ID]' \
  --form 'animal_type=1' \
  --form 'voice=@"/path/to/audio.mp3"'
```

> `session_id` 和 `animal_type` 建议放在 `multipart/form-data` 中；`-N` 用于关闭 curl 缓冲，便于实时查看流式返回。

## 返回结果

该接口为流式返回（SSE），响应 `Content-Type` 为 `text/event-stream`，数据以增量方式持续输出，直至分析完毕。

```
data: 这段声音

data: 是一只猫

data: 发出的轻柔叫声，

data: 情绪状态较为平静，无明显不适迹象。

data: [DONE]
```

## 返回参数说明

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `data` | `string` | 每次推送的文本片段，前端拼接后即为完整分析结果 |
| `[DONE]` | — | 流式结束标志，收到后表示本次分析已完成 |

## 错误响应

| HTTP 状态码 | 说明 |
| --- | --- |
| `400` | 缺少必要参数，或请求格式错误 |
| `401` | 未授权，token 无效或已过期 |

## 补充说明

- 上传版应始终使用 `multipart/form-data`
- 代码中保留了对查询参数的兼容读取，但当前建议把 `session_id` 和 `animal_type` 都放在 form-data 中
- 当 `voice` 缺失时，实际错误可能先由 OpenAPI 校验器返回 required-property 消息
