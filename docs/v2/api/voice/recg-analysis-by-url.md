# AI宠物声音识别分析（通过URL）

## 产品介绍
---
AI宠物声音识别服务支持直接传入音频文件的 URL 进行声音分析，无需上传本地文件。适用于音频已存储在 OSS 或其他对象存储上的场景，与文件上传版本功能完全一致，同样采用流式响应方式实时返回分析结果。

## 使用场景
---
- **设备端直传**：宠物智能设备将录音上传至 OSS 后，直接传 URL 触发分析，避免二次上传
- **异步分析流程**：先上传音频，再按需触发分析，适合批量处理场景
- **第三方音频接入**：对接已有音频存储服务，无需迁移文件

## 接口调用前置步骤

调用本接口前，需先调用 [session-start](../smart-consultation/session-start) 获取 `session_id`，传参时 `module_type` 固定为 **`13`**（声音识别模块）：

```json
{
    "module_type": 13,
    "pet_profile_id": 3147
}
```

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-voice-recg/analysis-by-url?token=[ACCESS_TOKEN]`

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

该接口为流式返回（SSE），响应 `Content-Type` 为 `text/event-stream`，数据以增量方式持续输出，直至分析完毕。

```
data: 这段声音

data: 是一只狗

data: 发出的急促吠叫，

data: 可能处于兴奋或警觉状态，建议关注周围环境变化。

data: [DONE]
```

## 返回参数说明

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `data` | `string` | 每次推送的文本片段，前端拼接后即为完整分析结果 |
| `[DONE]` | — | 流式结束标志，收到后表示本次分析已完成 |

## 与文件上传版本的区别

| 对比项 | 文件上传版（analysis） | URL版（analysis-by-url） |
| --- | --- | --- |
| 请求格式 | `multipart/form-data` | `application/json` |
| 音频来源 | 本地文件 | 已有 URL |
| OSS 上传 | 由服务端自动处理 | 调用方自行上传 |

## 错误响应

| HTTP 状态码 | 说明 |
| --- | --- |
| `400` | 缺少必要参数（`voice_url` 或 `session_id`） |
| `401` | 未授权，token 无效或已过期 |
