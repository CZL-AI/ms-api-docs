# 获取视频分析报告

## 接口描述
---
视频行为分析任务提交成功后，会返回 `report_id`。当需要查看最终分析结果时，请通过通用医疗报告接口获取。

> 适用场景：
> - 查询视频分析报告是否已经生成完成
> - 获取视频分析的结构化结果
> - 获取视频分析报告摘要、封面图和结构化分析结果

## 调用接口
**请求方式：** `GET（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/medical-record?token=[ACCESS_TOKEN]`

## 请求参数
### Query 参数
| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `report_id` | `integer` | 是 | 视频分析任务返回的报告 ID |
| `format` | `string` | 否 | 当前仅支持 `json`，建议不传 |

## 请求示例
```bash
curl -X GET 'https://ms-ai.chongzhiling.com/api/v2.0/ai-b/medical-record?report_id=1024&token=[ACCESS_TOKEN]'
```

## 返回结果

### 1. `format=json` 返回示例
```json
{
  "data": {
    "id": 1024,
    "session_id": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "created_at": "2026-04-08T16:18:03",
    "updated_at": "2026-04-08T16:18:15",
    "module_type": 12,
    "pet_profile_id": 3147,
    "status": 2,
    "report_status": 2,
    "report_info": {
      "title": "视频分析结果",
      "content": "宠物整体表现平稳，建议继续观察日常活动和饮食状态。",
      "report_url": "https://example.com/report/1024",
      "img_url": "https://example.com/report/1024-cover.jpg"
    },
    "report": "{\"summary\":\"宠物整体表现平稳\",\"video_url\":\"https://example.com/video/1024.mp4\",\"report_url\":\"https://example.com/report/1024\"}"
  },
  "message": "Get successfully.",
  "success": true
}
```

## 返回参数说明
| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `id` | `integer` | 报告 ID |
| `session_id` | `string` | 会话 ID |
| `module_type` | `integer` | 模块类型，视频行为分析固定为 `12` |
| `pet_profile_id` | `integer` | 宠物档案 ID |
| `status` | `integer` | 流程状态 |
| `report_status` | `integer` | 报告状态：`0`-未生成，`1`-生成中，`2`-已完成，`3`-生成失败 |
| `report_info.title` | `string` | 报告标题，系统会根据视频分析结果自动生成 |
| `report_info.content` | `string` | 报告摘要，用于列表卡片展示 |
| `report_info.report_url` | `string / null` | 报告访问地址 |
| `report_info.img_url` | `string / null` | 报告封面图地址 |
| `report` | `string` | 视频分析结果的 JSON 字符串，需要客户端自行解析 |

## 视频分析 `report` 字段说明

### 当 `format=json`
`report` 字段本质上是视频分析结果的 JSON 字符串，常见字段包括但不限于：

- `summary`
- `description`
- `advice`
- `analysis`
- `video_url`
- `report_url`
- `cover_url`
- `task_uuid`

不同算法版本返回的字段可能略有差异，建议客户端按“字段存在则渲染”的方式兼容处理。

## 使用建议
1. **轮询状态**：在调用视频分析生成接口后，可通过本接口的 `report_status` 判断是否生成完成。
2. **列表展示**：列表页优先使用 `report_info.title`、`report_info.content`、`report_info.img_url`。
3. **详情展示**：详情页可解析 `report` 字段，按需展示结构化分析结果。
4. **参数约束**：当前按 JSON 结果使用即可，不要依赖 HTML 返回格式。
5. **容错处理**：视频分析是异步任务，建议前端对 `report_status=1` 和 `report_status=3` 分别给出“生成中”和“生成失败”的明确提示。

## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    tag="medical-record"
    type="get"
    path="/medical-record"
    version="v2"
  />
</ClientOnly>
