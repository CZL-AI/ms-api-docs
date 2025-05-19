# 5、是否需要上传图片 - 智能问诊模块

## 接口描述
---
该接口用于判断是否需要用户上传图片。根据当前问诊的上下文和用户回答，系统会决定是否需要用户提供宠物的相关图片，以辅助诊断。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/aidoc/if-need-image?token=[ACCESS_TOKEN]`

## 请求参数
```json
{
    "pet_profile_id": 0,
    "session_id": "7cc8c7e0-266f-4fb5-8bf9-cac62905a23d"
}
```

## 参数列表

| 名称            | 类型   | 必填 | 说明                  |
| --------------- | ------ | ---- | --------------------- |
| pet_profile_id  | number | 是   | 宠物档案ID            |
| session_id      | string | 是   | 会话ID，用于管理会话上下文 |

## 返回结果
```json
{
    "data": {
        "is_pic": "True",
        "pic_explain": "请提供一张狗狗眼睛的特写照片，重点是分泌物区域，并且清晰显示眼睛周围的皮肤状况。这有助于判断是否是结膜炎或者其他感染。请确保照片清晰，光线充足，能清楚地看到眼睛分泌物的情况。"
    },
    "message": "Get successfully.",
    "success": true
}
```

## 返回参数说明
| 名称              | 类型   | 说明                                         |
|-------------------|--------|----------------------------------------------|
| data              | object | 返回数据对象                                 |
| is_pic            | string | 是否需要上传图片，"True" 表示需要，"False" 表示不需要 |
| pic_explain       | string | 需要上传图片的详细说明，包括图片要求和目的    |
| message           | string | 返回信息描述                                 |
| success           | boolean| 是否成功，成功返回true，失败返回false        |

## 接口调试
---
<script setup>  
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'  
</script>  

<ClientOnly>  
  <SwaggerUI   
    tag="if-need-image"   
    type="post"   
    path="/aidoc/if-need-image"   
  />  
</ClientOnly>


