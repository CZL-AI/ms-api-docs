

# 4、保存用户回答 - 智能问诊模块

## 接口描述
---
该接口用于保存用户在智能问诊过程中的回答。通过此接口，用户的回答将被记录并用于后续的问诊逻辑和报告生成。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/session-record/history?token=[ACCESS_TOKEN]`

## 请求参数
```json
{
    "content": "狗狗精神不好",
    "content_type": 1,
    "module_type": 1,
    "role": "user",
    "session_id": "7cc8c7e0-266f-4fb5-8bf9-cac62905a23d",
    "stage": 0
}
```

## 参数列表

| 名称            | 类型   | 必填 | 说明                  |
| --------------- | ------ | ---- | --------------------- |
| content         | string | 是   | 用户的回答内容        |
| content_type    | number | 是   | 回答内容类型（1：文本）|
| module_type     | number | 是   | 模块类型，固定为1     |
| role            | string | 是   | 角色标识（"user" 或 "system"）|
| session_id      | string | 是   | 会话ID，用于管理会话上下文 |
| stage           | number | 是   | 当前问诊阶段          |

## 返回结果
```json
{
    "data": null,
    "message": "Save successfully.",
    "success": true // 成功返回true，失败返回false
}
```

## 返回参数说明
| 名称              | 类型   | 说明                                         |
|-------------------|--------|----------------------------------------------|
| message           | string | 返回信息描述                                 |
| success           | boolean| 是否成功，成功返回true，失败返回false         |

## 接口调试
---
<script setup>  
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'  
</script>  

<ClientOnly>  
  <SwaggerUI   
    tag="history"   
    type="post"   
    path="/session-record/history"   
  />  
</ClientOnly>  


