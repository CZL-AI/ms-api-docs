

# 4、保存用户回答 - 智能问诊模块

## 接口描述
---
该接口用于在智能问诊过程中保存用户的回答内容。保存后的回答将被系统用于后续推理逻辑、病情分析及最终问诊报告生成。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/session-record/history?token=[ACCESS_TOKEN]`

> ⚠️ 注意：本接口需携带有效的 `token` 进行身份验证，未授权访问将被拒绝。

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
| content         | string | 是   | 用户输入的回答内容        |
| content_type    | number | 是   | 回答内容类型，当前固定为 `1`（表示文本）  |
| module_type     | number | 是   | 模块类型，当前固定为 `1`       |
| role            | string | 是   | 角色标识，当前支持 `"user"`（用户） 或 `"system"`（系统自动回复）|
| session_id      | string | 是   | 当前会话 ID，用于管理上下文信息 |
| stage           | number | 是   | 当前问诊阶段编号，用于控制问诊流程阶段逻辑           |

## 返回结果
```json
{
    "data": null,
    "message": "Save successfully.",
    "success": true // 成功返回true，失败返回false
}
```

## 返回参数说明
| 名称       | 类型    | 说明                                     |
|------------|---------|------------------------------------------|
| data       | object  | 响应数据对象，当前接口无返回数据，设为 null |
| message    | string  | 接口执行结果描述信息                       |
| success    | boolean | 是否成功，成功返回 `true`，失败返回 `false` |

## 安全说明

- 所有请求必须携带有效的 `token` 参数。
- token 应通过登录接口获取，且具有时效性和权限限制。
- 未授权访问将返回错误码并拒绝请求。

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


