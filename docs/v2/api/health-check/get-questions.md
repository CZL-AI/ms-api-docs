# 2、获取健康检查问题集 - 健康检查模块

## 接口描述
---
该接口用于获取健康检查的问题集，系统会从饮食(diet)、活动(activity)、环境(environment)、生活习惯(lifestyle)四个类别中随机抽取指定数量的问题。每个类别默认获取4个问题。

## 调用接口
**请求方式：** `GET（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-health-check/questions?token=[ACCESS_TOKEN]`

## 请求参数
### Query 参数
| 名称            | 类型   | 必填 | 说明                           |
| --------------- | ------ | ---- | ------------------------------ |
| session_id      | string | 是   | 会话ID，用于标识本次健康检查流程 |
| pet_profile_id  | number | 否   | 宠物档案ID，关联宠物信息        |

**请求示例：**
```
GET https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-health-check/questions?token=xxx&session_id=689ddf5e-ebce-4504-92eb-b2885c9d138b&pet_profile_id=123
```

## 返回结果
```json
{
    "data": {
        "session_id": "689ddf5e-ebce-4504-92eb-b2885c9d138b",
        "medical_record_id": 22786,
        "total_questions": 16,
        "questions_by_category": {
            "diet": [
                {
                    "id": 1,
                    "category": "diet",
                    "question": "您的宠物每天吃几餐？",
                    "options": [
                        {"id": 1, "text": "1餐"},
                        {"id": 2, "text": "2餐"},
                        {"id": 3, "text": "3餐或以上"}
                    ]
                }
            ],
            "activity": [
                {
                    "id": 5,
                    "category": "activity",
                    "question": "您的宠物每天运动时间是多长？",
                    "options": [
                        {"id": 11, "text": "少于30分钟"},
                        {"id": 12, "text": "30-60分钟"},
                        {"id": 13, "text": "超过60分钟"}
                    ]
                }
            ],
            "environment": [
                {
                    "id": 9,
                    "category": "environment",
                    "question": "您的宠物生活环境是否经常清洁？",
                    "options": [
                        {"id": 21, "text": "每天清洁"},
                        {"id": 22, "text": "每周清洁"},
                        {"id": 23, "text": "不定期清洁"}
                    ]
                }
            ],
            "lifestyle": [
                {
                    "id": 13,
                    "category": "lifestyle",
                    "question": "您的宠物是否定期驱虫？",
                    "options": [
                        {"id": 31, "text": "是"},
                        {"id": 32, "text": "否"},
                        {"id": 33, "text": "偶尔"}
                    ]
                }
            ]
        },
        "all_questions": [
            {
                "id": 1,
                "category": "diet",
                "question": "您的宠物每天吃几餐？",
                "options": [
                    {"id": 1, "text": "1餐"},
                    {"id": 2, "text": "2餐"},
                    {"id": 3, "text": "3餐或以上"}
                ]
            }
        ]
    },
    "message": "Get successfully.",
    "success": true
}
```

## 返回参数说明
| 名称                      | 类型    | 说明                                     |
| ------------------------- | ------- | ---------------------------------------- |
| session_id                | string  | 会话ID，用于标识本次健康检查流程          |
| medical_record_id         | number  | 医疗记录ID                               |
| total_questions           | number  | 问题总数                                 |
| questions_by_category     | object  | 按类别分组的问题集合                      |
| - diet                    | array   | 饮食类问题列表                           |
| - activity                | array   | 活动类问题列表                           |
| - environment             | array   | 环境类问题列表                           |
| - lifestyle               | array   | 生活习惯类问题列表                        |
| all_questions             | array   | 所有问题的完整列表                        |
| - id                      | number  | 问题ID                                   |
| - category                | string  | 问题类别                                 |
| - question                | string  | 问题内容                                 |
| - options                 | array   | 选项列表                                 |
| -- id                     | number  | 选项ID                                   |
| -- text                   | string  | 选项文本                                 |

## 注意事项
1. session_id是必需参数，用于标识本次健康检查流程
2. 每个类别默认随机获取4个问题，共16个问题
3. 返回的问题会自动保存到数据库，关联到session_id
4. pet_profile_id为可选参数，如果提供则会关联到对应的宠物档案
5. 问题ID和选项ID在后续提交答案时会用到

## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    tag="health-check"
    type="get"
    path="/health-check/get-questions"
    version="v2"
  />
</ClientOnly>
