# 获取建议概览
---

## 接口说明
用于获取某个宠物档案下喂养建议和养成建议的最新概览信息，适合首页卡片、入口聚合页或报告概览页展示。

## 调用接口
**请求方式：** `GET（HTTPS）`
**中文请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/pet-profile/advice-overview?pet_profile_id=[PET_PROFILE_ID]`
**英文请求地址：** `https://ms-ai-cn.chongzhiling.com/api/v2.0/ai-en/pet-profile/advice-overview?pet_profile_id=[PET_PROFILE_ID]`

**请求头：**

```http
Authorization: Bearer [ACCESS_TOKEN]
```

## 请求参数
### Query 参数
| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `pet_profile_id` | `int` | 是 | 宠物档案 ID |

## 响应字段
| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `pet_profile_id` | `int` | 宠物档案 ID |
| `feeding_advice` | `object` | 喂养建议概览 |
| `growth_advice` | `object` | 养成建议概览 |
| `feeding_advice.advice_type` | `string` | 建议类型 |
| `feeding_advice.medical_record_id` | `int` | 建议记录 ID，无数据时可能为 `null` |
| `feeding_advice.session_id` | `string` | 会话 ID，无数据时可能为 `null` |
| `feeding_advice.generated_at` | `string` | 最近生成时间，无数据时可能为 `null` |
| `feeding_advice.report_status` | `int` | 报告状态 |
| `feeding_advice.title` | `string` | 概览标题 |
| `feeding_advice.summary` | `string` | 概览摘要 |
| `feeding_advice.has_data` | `boolean` | 是否已有数据 |
| `growth_advice.advice_type` | `string` | 建议类型 |
| `growth_advice.medical_record_id` | `int` | 建议记录 ID，无数据时可能为 `null` |
| `growth_advice.session_id` | `string` | 会话 ID，无数据时可能为 `null` |
| `growth_advice.generated_at` | `string` | 最近生成时间，无数据时可能为 `null` |
| `growth_advice.report_status` | `int` | 报告状态 |
| `growth_advice.title` | `string` | 概览标题 |
| `growth_advice.summary` | `string` | 概览摘要 |
| `growth_advice.has_data` | `boolean` | 是否已有数据 |
| `message` | `string` | 返回信息 |
| `success` | `boolean` | 是否成功 |

## 补充说明

- 接口只返回当前入口语言对应的数据
- 如果某一类建议从未生成过，对应对象会返回 `has_data=false`

## 代码示例
**请求示例：**
```bash
curl -X GET 'https://ms-ai.chongzhiling.com/api/v2.0/ai-b/pet-profile/advice-overview?pet_profile_id=44727'   -H 'Authorization: Bearer [ACCESS_TOKEN]'
```

**响应示例：**
```json
{
  "data": {
    "pet_profile_id": 44727,
    "feeding_advice": {
      "advice_type": "feeding_advice",
      "medical_record_id": 122480,
      "session_id": "b5cf8a6b-1bd7-4aa9-869b-9d805aeddb20",
      "generated_at": "2026-04-09T02:54:38",
      "report_status": 2,
      "title": "低脂减肥粮，控制热量，增加运动",
      "summary": "每日推荐喂食量 220g",
      "has_data": true
    },
    "growth_advice": {
      "advice_type": "growth_advice",
      "medical_record_id": 122481,
      "session_id": "1c986d96-1982-4188-9887-48768f20af9b",
      "generated_at": "2026-04-09T02:54:43",
      "report_status": 2,
      "title": "健康状况",
      "summary": "可可目前BCS评分7分，属于超重状态，需科学减重。",
      "has_data": true
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
    path="/pet-profile/advice-overview"
    version="v2"
  />
</ClientOnly>
