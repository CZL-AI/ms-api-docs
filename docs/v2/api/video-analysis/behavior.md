# AI宠物视频行为分析

## 产品介绍
---
AI宠物视频行为分析服务能够对上传的宠物视频进行智能识别，自动检测视频中是否存在猫或狗，并对宠物的行为进行深度分析，生成结构化的诊断报告。报告生成采用异步任务机制——接口调用后立即返回任务状态，实际分析结果通过报告查询接口获取。

## 使用场景
---
- **宠物行为监测**：结合摄像头录像，定期分析宠物活动状态
- **宠物医疗辅助**：兽医通过行为视频辅助判断宠物健康状况
- **智能宠物设备**：集成到宠物智能摄像头，实现自动行为识别与报警
- **宠物寄养服务**：寄养机构对宠物日常行为进行记录和分析

## 接口调用流程
---
视频行为分析采用**异步**模式，完整流程如下：

1. 调用 [session-start](../smart-consultation/session-start) 获取 `session_id`，`module_type` 固定传 **`12`**（视频行为分析模块）：
   ```json
   {
       "module_type": 12,
       "pet_profile_id": 3147
   }
   ```
2. 调用本接口发起分析任务，获取 `report_id` 和 `is_pet_exist`
3. 若 `is_pet_exist` 为 `0`，表示视频中未检测到猫狗，无需继续轮询
4. 若 `is_pet_exist` 为 `1`，定期轮询[视频分析报告查询接口](./report.md)，通过 `report_status` 判断报告是否生成完成

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-video-recg/gen-report`

**请求头：**

```http
Authorization: Bearer [ACCESS_TOKEN]
Content-Type: application/json
```

## 请求参数：[application/json]

```json
{
    "session_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "video_url": "https://your-oss-bucket.oss-cn-shenzhen.aliyuncs.com/video/xxx.mp4"
}
```

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `session_id` | `string` | 是 | 会话ID，由 session-start 接口获取 |
| `video_url` | `string` | 是 | 视频文件的可访问 URL，当前要求为可访问的标准 MP4 文件 |

## 返回结果

```json
{
    "data": {
        "report_id": 1024,
        "is_pet_exist": 1
    },
    "message": "success",
    "success": true
}
```

## 返回参数说明

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| `success` | `boolean` | 请求是否成功 |
| `message` | `string` | 响应描述 |
| `data.report_id` | `integer` | 医疗报告记录ID，用于后续查询报告详情 |
| `data.is_pet_exist` | `integer` | 视频中是否检测到猫或狗：`0`-未检测到，`1`-已检测到 |

## 报告状态说明

通过 `report_id` 调用医疗报告查询接口时，`report_status` 字段含义如下：

| 值 | 含义 |
| --- | --- |
| `1` | 报告生成中 |
| `2` | 报告已完成 |
| `3` | 报告生成失败（视频中未检测到猫狗） |

## 错误响应

| HTTP 状态码 | 说明 |
| --- | --- |
| `400` | 参数错误或对应的 session_id 不存在医疗记录 |
| `401` | 未授权，token 无效或已过期 |

## 重要说明

`2026-04-13` 起，服务端会在真正提交分析任务前做视频预校验：

- `video_url` 必须是 `http/https`
- 文件扩展名必须是 `.mp4`
- 服务端会尝试读取文件头并校验标准 MP4 `ftyp`
- 链接不可访问、伪 MP4、非标准 MP4 都会直接返回 `400`

## 历史接口说明

旧版任务接口 [`post-task`](./post-task.md) 和旧版状态接口 [`get-status`](./get-status.md) 仍保留说明页，仅供存量接入方排查历史调用使用。

新接入请统一使用当前 v2 流程：

1. `session-start`
2. `ai-video-recg/gen-report`
3. `medical-record`

## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    type="post"
    path="/ai-video-recg/gen-report"
    version="v2"
  />
</ClientOnly>
