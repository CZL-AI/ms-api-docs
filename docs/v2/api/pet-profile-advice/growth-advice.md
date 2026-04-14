# 生成养成建议
---

## 接口说明
基于宠物档案生成一份新的养成建议，并返回适合前端卡片化展示的分栏内容。该接口会生成新的建议记录，可用于后续列表展示和详情查看。

## 调用接口
**请求方式：** `POST（HTTPS）`
**中文请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/pet-profile/growth-advice`
**英文请求地址：** `https://ms-ai-cn.chongzhiling.com/api/v2.0/ai-en/pet-profile/growth-advice`

**请求头：**

```http
Authorization: Bearer [ACCESS_TOKEN]
Content-Type: application/json
```

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
| `advice_type` | `string` | 建议类型，固定为 `growth_advice` |
| `lang` | `string` | 返回语言，`zh` 或 `en` |
| `generated_at` | `string` | 生成时间，ISO 8601 格式 |
| `source` | `string` | 数据来源，生成接口通常为 `llm` |
| `session_id` | `string` | 本次生成建议对应的会话 ID |
| `medical_record_id` | `int` | 本次建议记录 ID |
| `report_status` | `int` | 报告状态，`2` 表示生成成功 |
| `content` | `object` | 养成建议内容 |
| `content.tabs` | `array<object>` | 建议分栏列表 |
| `content.tabs[].key` | `string` | 分栏标识 |
| `content.tabs[].title` | `string` | 分栏标题 |
| `content.tabs[].items` | `array<string>` | 当前分栏下的建议列表 |
| `message` | `string` | 返回信息 |
| `success` | `boolean` | 是否成功 |

## 补充说明

- 接口返回语言由入口决定：`ai-b` 返回中文，`ai-en` 返回英文
- 生成成功后会创建新的 `session_id` 与 `medical_record_id`
- 详情回看建议使用 [`advice-record`](./advice-record.md)

## 代码示例
**请求示例：**
```bash
curl -X POST 'https://ms-ai.chongzhiling.com/api/v2.0/ai-b/pet-profile/growth-advice'   -H 'Authorization: Bearer [ACCESS_TOKEN]'   -H 'Content-Type: application/json'   -d '{
    "pet_profile_id": 44727
  }'
```

**响应示例：**
```json
{
  "data": {
    "pet_profile_id": 44727,
    "advice_type": "growth_advice",
    "lang": "zh",
    "generated_at": "2026-04-09T02:54:43",
    "source": "llm",
    "session_id": "1c986d96-1982-4188-9887-48768f20af9b",
    "medical_record_id": 122481,
    "report_status": 2,
    "content": {
      "tabs": [
        {
          "key": "health_status",
          "title": "健康状况",
          "items": [
            "可可目前BCS评分7分，属于超重状态，需科学减重。",
            "柯基犬脊椎压力大，超重会增加腰椎负担，请控制体重。",
            "建议定期检查关节活动度，预防中老年常见的关节炎。"
          ]
        },
        {
          "key": "diet_advice",
          "title": "饮食建议",
          "items": [
            "将每日喂食量减少10%，并更换为低脂减肥处方粮。",
            "严禁喂食人类餐桌食物，避免摄入额外高热量油脂。",
            "将每日总食量分3次喂食，增加饱腹感并促进代谢。"
          ]
        }
      ]
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
    path="/pet-profile/growth-advice"
    version="v2"
  />
</ClientOnly>
