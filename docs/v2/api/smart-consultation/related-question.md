# 5、获取病情分析 - 智能问诊模块

## 接口描述
---
该接口用于判断病情分析的关键字，以辅助诊断。

## 调用接口

**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/aidoc/related-question?token=[ACCESS_TOKEN]`

## 请求参数

```json
{
  "pet_profile_id": 0,
  //宠物档案id
  "session_id": "string"
  //会话id
}
```

## 参数列表

| 名称             | 类型     | 必填 | 说明             |
|----------------|--------|----|----------------|
| pet_profile_id | number | 是  | 宠物档案ID         |
| session_id     | string | 是  | 会话ID，用于管理会话上下文 |

## 返回结果

```json
{
  "data": {
    "options": [
      "最近有呕吐或腹泻的情况。",
      "排便是否困难或有血便？",
      "精神沉郁，不爱活动。",
      "是否有咳嗽、呼吸困难等症状？",
      "触摸腹部时，是否有明显的抗拒？"
    
      
  },
  "error_code": 0,
  "message": "Get successfully.",
  "success": true
}
```

## 返回参数说明

| 名称         | 类型      | 说明                      |
|------------|---------|-------------------------|
| data       | object  | 返回数据对象                  |
| error_code | string  | 错误码                     |
| message    | string  | 返回信息描述                  |
| success    | boolean | 是否成功，成功返回true，失败返回false |

## 接口调试
---
<script setup>  
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'  
</script>  

<ClientOnly>  
  <SwaggerUI   
    tag="related-question"   
    type="post"   
    path="/aidoc/related-question"   
  />  
</ClientOnly>


