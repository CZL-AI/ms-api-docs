# 4、提交健康检查答案 - 健康检查模块

## 接口描述
---
该接口用于提交用户对健康检查问题的答案。用户完成每个问题后，调用此接口将答案保存到服务器。

## 调用接口
**请求方式：** `POST（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-health-check/answer?token=[ACCESS_TOKEN]`

## 请求参数
### Body 参数（`application/json`）
| 名称            | 类型   | 必填 | 说明                           |
| --------------- | ------ | ---- | ------------------------------ |
| session_id      | string | 是   | 会话ID，用于标识本次健康检查流程 |
| question_id     | number | 是   | 问题ID                         |
| answer          | string | 是   | 用户回答内容（选项的文本内容）   |
| option_id       | number | 是   | 选项ID（用户选择的选项编号）     |
| pet_profile_id  | number | 否   | 宠物档案ID                     |

**请求示例：**
```json
{
    "session_id": "689ddf5e-ebce-4504-92eb-b2885c9d138b",
    "question_id": 1,
    "option_id": 2,
    "answer": "作为日常互动的小奖励，增进感情",
    "pet_profile_id": 123
}
```

## 返回结果
```json
{
    "data": {
        "message": "答案已保存",
        "session_id": "689ddf5e-ebce-4504-92eb-b2885c9d138b",
        "question_id": 1,
        "medical_record_id": 22786
    },
    "message": "Get successfully.",
    "success": true
}
```

## 返回参数说明
| 名称              | 类型   | 说明                           |
| ----------------- | ------ | ------------------------------ |
| message           | string | 操作结果提示信息                |
| session_id        | string | 会话ID                         |
| question_id       | number | 已保存答案的问题ID              |
| medical_record_id | number | 医疗记录ID                     |

## 注意事项
1. session_id、question_id、answer、option_id都是必填参数
2. answer是用户选择的选项对应的文本内容
3. option_id是用户选择的选项编号（从问题的options数组中获取）
4. 必须同时提供option_id和对应的answer文本
5. 同一个问题可以多次提交答案，后提交的会覆盖之前的答案
6. pet_profile_id为可选参数，用于关联宠物档案
7. 建议在用户回答每个问题后立即调用此接口保存答案，避免数据丢失

## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    tag="health-check"
    type="post"
    path="/ai-health-check/answer"
    version="v2"
  />
</ClientOnly>
