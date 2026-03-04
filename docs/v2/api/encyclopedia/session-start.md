# 养宠百科服务

## 产品介绍
---
养宠百科服务是一个知识问答工具，专为宠物主人、宠物爱好者及宠物相关应用开发者设计。该服务通过智能对话的方式，为用户提供全面、专业的宠物养护知识，涵盖日常饮食、疾病预防、行为训练、繁殖护理等各类宠物养护话题。系统能够理解用户的自然语言提问，并结合宠物百科知识库给出准确、详细的解答，同时智能推荐与当前话题相关的延伸问题，帮助用户系统地了解宠物养护知识。

## 使用场景
---
- **日常养护咨询**：宠物主人可以随时查询宠物的饮食、运动、睡眠等日常护理建议
- **疾病健康咨询**：了解宠物常见疾病症状、预防措施及就医建议
- **行为训练指导**：获取宠物行为纠正和训练技巧的专业建议
- **宠物应用集成**：宠物类 App 可集成该服务，为用户提供智能问答功能
- **知识延伸探索**：通过相关问题推荐，引导用户系统学习宠物养护知识

## 接口调用流程
---
1. 获取 session_id（开始会话）
2. 发起 AI 问答获取流式回答（answer 接口）
3. 获取相关推荐问题（relation 接口）

# 获取 session_id 开始会话流程说明文档
---
在调用养宠百科 API 前，需要先调用本接口获取 session_id。

## 调用接口：
**请求方式：** `POST（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/session-record/session-start?token=[ACCESS_TOKEN]`

## 请求参数：
```json
{
    "module_type": 4
}
```

## 参数列表：

| 名称        | 类型   | 必填 | 说明                  |
| ----------- | ------ | ---- | --------------------- |
| module_type | number | 是   | 识别模块类型，固定为4 |

## 返回结果：
```json
{
    "data": {
        "medical_record_id": 22786,
        "session_id": "689ddf5e-ebce-4504-92eb-b2885c9d138b"
    },
    "message": "Get successfully.",
    "success": true // 成功返回true，失败返回false
}
```

## 返回参数说明：
| 名称              | 类型   | 说明                                         |
| ----------------- | ------ | -------------------------------------------- |
| medical_record_id | number | 医疗记录ID                                   |
| session_id        | string | 会话ID，用于管理会话上下文，在后续的接口中使用 |

## 接口调试：
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    tag="session"
    type="post"
    path="/session-record/session-start"
  />
</ClientOnly>
