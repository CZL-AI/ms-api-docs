# 3、获取问题联想 - 智能问诊模块

## 接口描述
---
该接口用于获取智能问诊模块中的问题联想选项。开发者可以通过此接口获取系统生成的问题联想选项，并展示给用户，帮助用户更准确地描述问题。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/aidoc/options?token=[ACCESS_TOKEN]`

## 请求参数
```json
{
    "pet_profile_id": 0,
    "question": "狗狗不吃饭",
    "session_id": "15531df5-3b92-4f12-b20f-c2a3ee4918bd"
}
```

## 参数列表

| 名称            | 类型   | 必填 | 说明                  |
| --------------- | ------ | ---- | --------------------- |
| pet_profile_id  | number | 是   | 宠物档案ID            |
| question        | string | 是   | 用户输入的问题描述    |
| session_id      | string | 是   | 会话ID，用于管理会话上下文 |

## 返回结果
```json
{
    "data": {
        "options": [
            "最近两天食欲不振，但精神状态还可以。",
            "食欲完全丧失，并且精神萎靡不振。",
            "食欲下降，伴随呕吐或腹泻症状。",
            "食欲正常，可能只是挑食。"
        ]
    },
    "message": "Get successfully.",
    "success": true
}
```

## 返回参数说明
| 名称              | 类型   | 说明                                         |
|-------------------|--------|----------------------------------------------|
| data              | object | 返回数据对象                                 |
| options           | array  | 联想选项列表，包含多个选项文本               |
| message           | string | 返回信息描述                                 |
| success           | boolean| 是否成功，成功返回true，失败返回false        |

## 接口调试
---
<script setup>  
import SwaggerUI from '../../../src/components/SwaggerUI.vue'  
</script>  

<ClientOnly>  
  <SwaggerUI   
    tag="options"   
    type="post"   
    path="/aidoc/options"   
  />  
</ClientOnly>  



