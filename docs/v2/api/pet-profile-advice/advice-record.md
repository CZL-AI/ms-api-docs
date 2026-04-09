# 获取建议历史详情
---

## 接口说明
用于根据建议记录 ID 获取单条建议完整内容，适合详情页、报告页和再次查看场景。

## 调用接口
**请求方式：** `GET（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/pet-profile/advice-record?medical_record_id=[MEDICAL_RECORD_ID]&token=[ACCESS_TOKEN]`

## 请求参数
### Query 参数
| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `medical_record_id` | `int` | 是 | 建议记录 ID |

## 响应字段
| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `medical_record_id` | `int` | 建议记录 ID |
| `session_id` | `string` | 会话 ID |
| `pet_profile_id` | `int` | 宠物档案 ID |
| `advice_type` | `string` | 建议类型 |
| `report_status` | `int` | 报告状态 |
| `generated_at` | `string` | 生成时间，ISO 8601 格式 |
| `lang` | `string` | 记录语言，`zh` 或 `en` |
| `title` | `string` | 建议标题 |
| `summary` | `string` | 建议摘要 |
| `content` | `object` | 建议完整内容 |
| `message` | `string` | 返回信息 |
| `success` | `boolean` | 是否成功 |

## 代码示例
**请求示例：**
```bash
curl -X GET 'https://ms-ai.chongzhiling.com/api/v2.0/ai-b/pet-profile/advice-record?medical_record_id=122481'   -H 'Authorization: Bearer [ACCESS_TOKEN]'
```

**响应示例：**
```json
{
  "data": {
    "medical_record_id": 122481,
    "session_id": "1c986d96-1982-4188-9887-48768f20af9b",
    "pet_profile_id": 44727,
    "advice_type": "growth_advice",
    "report_status": 2,
    "generated_at": "2026-04-09T02:54:43",
    "lang": "zh",
    "title": "健康状况",
    "summary": "可可目前BCS评分7分，属于超重状态，需科学减重。",
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
    type="get"
    path="/pet-profile/advice-record"
    version="v2"
  />
</ClientOnly>
