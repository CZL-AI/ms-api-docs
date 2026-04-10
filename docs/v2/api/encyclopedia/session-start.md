# 养宠百科服务

## 接口调用流程
---
1. 获取 session_id（开始会话）
2. 发起 AI 问答获取流式回答（answer 接口）
3. 获取相关推荐问题（relation 接口）

# 获取 session_id 开始会话流程说明文档
---
在调用养宠百科 API 前，需要先调用本接口获取 session_id。

> 备注：
> - 中文版使用：`https://ms-ai.chongzhiling.com/api/v1.0/ai-b/...`
> - 英文版使用：`https://ms-ai-cn.chongzhiling.com/api/v1.0/ai-en/...`
> - 代码仓库 `ms-ai-b` 中已注册 `user-en.yaml`，该接口支持 `ai-en` 英文入口

## 调用接口：
**请求方式：** `POST（HTTPS）`
**中文请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/session-record/session-start?token=[ACCESS_TOKEN]`
**英文请求地址：** `https://ms-ai-cn.chongzhiling.com/api/v1.0/ai-en/session-record/session-start?token=[ACCESS_TOKEN]`

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
