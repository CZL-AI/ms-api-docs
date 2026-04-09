# 生成喂养建议
---

## 接口说明
基于宠物档案生成一份新的喂养建议，并返回结构化喂养结果。该接口会生成新的建议记录，可用于后续列表展示和详情查看。

## 调用接口
**请求方式：** `POST（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/pet-profile/feeding-advice?token=[ACCESS_TOKEN]`

## 请求参数
### Body 参数（`application/json`）
| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `pet_profile_id` | `int` | 是 | 宠物档案 ID |

**请求示例：**
```json
{
  "pet_profile_id": 44727
}
```

## 响应字段
| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `pet_profile_id` | `int` | 宠物档案 ID |
| `advice_type` | `string` | 建议类型，固定为 `feeding_advice` |
| `lang` | `string` | 返回语言，`zh` 或 `en` |
| `generated_at` | `string` | 生成时间，ISO 8601 格式 |
| `source` | `string` | 数据来源，生成接口通常为 `llm` |
| `session_id` | `string` | 本次生成建议对应的会话 ID |
| `medical_record_id` | `int` | 本次建议记录 ID |
| `report_status` | `int` | 报告状态，`2` 表示生成成功 |
| `content` | `object` | 喂养建议内容 |
| `content.recommend_basicinfo` | `object` | 喂养建议主体 |
| `content.recommend_basicinfo.feed_amount` | `number` | 推荐的每日喂食量，单位克 |
| `content.recommend_basicinfo.protein` | `number` | 每日所需蛋白质，单位克 |
| `content.recommend_basicinfo.carbohydrate` | `number` | 每日所需碳水化合物，单位克 |
| `content.recommend_basicinfo.fibre` | `number` | 每日所需纤维量，单位克 |
| `content.recommend_basicinfo.fat` | `number` | 每日所需脂肪，单位克 |
| `content.recommend_basicinfo.nutrition_supply` | `string` | 需要额外补充的营养 |
| `content.recommend_basicinfo.feed_recommend` | `string` | 喂食推荐 |
| `message` | `string` | 返回信息 |
| `success` | `boolean` | 是否成功 |

## 代码示例
**请求示例：**
```bash
curl -X POST 'https://ms-ai.chongzhiling.com/api/v2.0/ai-b/pet-profile/feeding-advice'   -H 'Authorization: Bearer [ACCESS_TOKEN]'   -H 'Content-Type: application/json'   -d '{
    "pet_profile_id": 44727
  }'
```

**响应示例：**
```json
{
  "data": {
    "pet_profile_id": 44727,
    "advice_type": "feeding_advice",
    "lang": "zh",
    "generated_at": "2026-04-09T02:54:38",
    "source": "llm",
    "session_id": "b5cf8a6b-1bd7-4aa9-869b-9d805aeddb20",
    "medical_record_id": 122480,
    "report_status": 2,
    "content": {
      "recommend_basicinfo": {
        "feed_amount": 220,
        "protein": 65,
        "carbohydrate": 85,
        "fibre": 12,
        "fat": 20,
        "nutrition_supply": "关节保护剂",
        "feed_recommend": "低脂减肥粮，控制热量，增加运动"
      }
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
    type="post"
    path="/pet-profile/feeding-advice"
    version="v2"
  />
</ClientOnly>
