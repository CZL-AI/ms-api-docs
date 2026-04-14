# 历史接口说明：发送任务（旧版视频行为分析）
---

本文档对应旧版视频分析任务接口：

- `POST /api/v1.0/ai-b/recognition/video_recognition`

该接口使用 `task_id / task_uuid` 轮询模式，已不是当前推荐接入方式。

## 当前推荐流程

新接入请改用 v2 接口链路：

1. 调用 [`session-start`](../smart-consultation/session-start.md) 获取 `session_id`
2. 调用 [`发起视频分析`](./behavior.md) 提交 `video_url`
3. 调用 [`获取视频分析报告`](./report.md) 根据 `report_id` 查询结果

## 迁移说明

| 历史能力 | 当前能力 |
| --- | --- |
| `task_id` / `task_uuid` | `report_id` |
| `/recognition/video_recognition` | `/ai-video-recg/gen-report` |
| `/recognition/task_status` | `/medical-record` |
| query `token` | `Authorization: Bearer [ACCESS_TOKEN]` |

## 说明

- 本页仅供存量接入方比对历史调用
- 新项目不建议继续接入旧版视频任务接口
