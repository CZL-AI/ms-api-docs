# 3、获取单个健康检查问题 - 健康检查模块

## 接口描述
---
该接口用于获取单个健康检查问题的详细信息。当客户端需要单独获取某个问题的详细信息时可以调用此接口。

## 调用接口
**请求方式：** `GET（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-health-check/question?token=[ACCESS_TOKEN]`

## 请求参数
### Query 参数
| 名称         | 类型   | 必填 | 说明                           |
| ------------ | ------ | ---- | ------------------------------ |
| session_id   | string | 是   | 会话ID，用于标识本次健康检查流程 |
| question_id  | number | 是   | 问题ID                         |

**请求示例：**
```
GET https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-health-check/question?token=xxx&session_id=689ddf5e-ebce-4504-92eb-b2885c9d138b&question_id=1
```

## 返回结果
```json
{
    "data": {
        "session_id": "689ddf5e-ebce-4504-92eb-b2885c9d138b",
        "medical_record_id": 22786,
        "question": {
            "id": 1,
            "category": "diet",
            "question": "您的宠物每天吃几餐？",
            "options": [
                {
                    "option_id": 1,
                    "text": "1餐"
                },
                {
                    "option_id": 2,
                    "text": "2餐"
                },
                {
                    "option_id": 3,
                    "text": "3餐或以上"
                }
            ]
        }
    },
    "message": "Get successfully.",
    "success": true
}
```

## 返回参数说明
| 名称              | 类型   | 说明         |
| ----------------- | ------ | ------------ |
| session_id        | string | 会话ID       |
| medical_record_id | number | 医疗记录ID   |
| question          | object | 问题详情对象 |
| - id              | number | 问题ID       |
| - category        | string | 问题类别（diet/activity/environment/lifestyle） |
| - question        | string | 问题内容     |
| - options         | array  | 选项列表     |
| -- option_id      | number | 选项ID       |
| -- text           | string | 选项文本     |

## 错误情况
如果问题不存在，接口会返回错误：
```json
{
    "data": null,
    "message": "问题不存在",
    "success": false
}
```

## 注意事项
1. session_id和question_id都是必需参数
2. question_id必须是有效的数字
3. 问题必须存在且关联到对应的session_id
4. 此接口主要用于客户端需要重新获取某个问题的详细信息场景

## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    tag="health-check"
    type="get"
    path="/health-check/get-single-question"
    version="v2"
  />
</ClientOnly>
