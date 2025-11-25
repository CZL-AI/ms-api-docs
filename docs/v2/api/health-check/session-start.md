# 1、开始会话流程 - 健康检查模块

## 接口描述
---
该接口用于开始健康检查会话流程。在调用健康检查相关API前，都需要先调用此接口获取 `session_id` 和 `medical_record_id`。

## 调用接口
**请求方式：** `POST（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/session-record/session-start?token=[ACCESS_TOKEN]`

## 请求参数
### Body 参数（`application/json`）
| 名称            | 类型   | 必填 | 说明                   |
| --------------- | ------ |----| ---------------------- |
| module_type     | number | 是  | 模块类型，固定为 18    |
| pet_profile_id  | number | 是  | 宠物档案ID，关联宠物信息 |

**请求示例：**
```json
{
    "module_type": 18,
    "pet_profile_id": 36327
}
```

## 返回结果
```json
{
    "data": {
        "medical_record_id": 122659,
        "session_id": "0156bcde-ff28-4097-9da9-42773f79b2ed"
    },
    "message": "Get successfully.",
    "success": true
}
```

## 返回参数说明
| 名称              | 类型    | 说明                                           |
| ----------------- | ------- | ---------------------------------------------- |
| medical_record_id | number  | 医疗记录ID，用于后续获取报告详情               |
| session_id        | string  | 会话ID，用于管理会话上下文，在后续接口中使用   |
| success           | boolean | 请求是否成功，true表示成功，false表示失败      |
| message           | string  | 返回信息描述                                   |

## 使用场景
1. **开始健康检查**：用户开始健康检查前，先调用此接口获取会话标识
2. **关联宠物档案**：通过 `pet_profile_id` 将健康检查结果与特定宠物关联
3. **会话管理**：获取的 `session_id` 用于后续所有健康检查相关接口

## 注意事项
1. **必须先调用**：在调用健康检查其他接口前，必须先调用此接口获取 `session_id`
2. **保存返回值**：请务必保存返回的 `session_id` 和 `medical_record_id`，后续接口需要使用
3. **module_type 固定值**：健康检查模块的 `module_type` 固定为 18
4. **宠物档案关联**：如果需要将检查结果与宠物档案关联，请传入有效的 `pet_profile_id`
5. **会话有效期**：会话创建后请及时完成健康检查流程，避免会话过期

## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    tag="session"
    type="post"
    path="/session-record/session-start"
    version="v2"
  />
</ClientOnly>