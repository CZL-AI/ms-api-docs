# 获取建议历史列表
---

## 接口说明
用于分页获取某个宠物档案下的建议历史记录，可按建议类型筛选，适合历史中心、列表页和下拉分页场景。

## 调用接口
**请求方式：** `GET（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/pet-profile/advice-records?pet_profile_id=[PET_PROFILE_ID]&advice_type=[ADVICE_TYPE]&page=1&limit=10&token=[ACCESS_TOKEN]`

## 请求参数
### Query 参数
| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `pet_profile_id` | `int` | 是 | 宠物档案 ID |
| `advice_type` | `string` | 否 | 建议类型，可选值：`feeding`、`feeding_advice`、`growth`、`growth_advice` |
| `page` | `int` | 否 | 页码，默认 `1` |
| `limit` | `int` | 否 | 每页数量，默认 `10` |

## 响应字段
| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `list` | `array<object>` | 建议记录列表 |
| `list[].medical_record_id` | `int` | 建议记录 ID |
| `list[].session_id` | `string` | 会话 ID |
| `list[].pet_profile_id` | `int` | 宠物档案 ID |
| `list[].advice_type` | `string` | 建议类型 |
| `list[].report_status` | `int` | 报告状态 |
| `list[].title` | `string` | 列表标题 |
| `list[].summary` | `string` | 列表摘要 |
| `list[].generated_at` | `string` | 生成时间，ISO 8601 格式 |
| `list[].lang` | `string` | 记录语言，`zh` 或 `en` |
| `pagination` | `object` | 分页信息 |
| `pagination.total_count` | `int` | 总记录数 |
| `pagination.page` | `int` | 当前页码 |
| `pagination.limit` | `int` | 每页数量 |
| `pagination.total_pages` | `int` | 总页数 |
| `pagination.has_next` | `boolean` | 是否有下一页 |
| `pagination.has_prev` | `boolean` | 是否有上一页 |
| `message` | `string` | 返回信息 |
| `success` | `boolean` | 是否成功 |

## 代码示例
**请求示例：**
```bash
curl -X GET 'https://ms-ai.chongzhiling.com/api/v2.0/ai-b/pet-profile/advice-records?pet_profile_id=44727&advice_type=feeding&page=1&limit=10'   -H 'Authorization: Bearer [ACCESS_TOKEN]'
```

**响应示例：**
```json
{
  "data": {
    "list": [
      {
        "medical_record_id": 122480,
        "session_id": "b5cf8a6b-1bd7-4aa9-869b-9d805aeddb20",
        "pet_profile_id": 44727,
        "advice_type": "feeding_advice",
        "report_status": 2,
        "title": "低脂减肥粮，控制热量，增加运动",
        "summary": "每日推荐喂食量 220g",
        "generated_at": "2026-04-09T02:54:38",
        "lang": "zh"
      }
    ],
    "pagination": {
      "total_count": 1,
      "page": 1,
      "limit": 10,
      "total_pages": 1,
      "has_next": false,
      "has_prev": false
    }
  },
  "message": "Get successfully.",
  "success": true
}
```

## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    type="get"
    path="/pet-profile/advice-records"
    version="v2"
  />
</ClientOnly>
