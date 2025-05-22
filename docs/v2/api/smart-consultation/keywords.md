# 2、判断获取关键字 - 智能问诊模块

## 接口描述
---
该接口用于判断获取科室的关键字，以辅助诊断。

## 调用接口

**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/aidoc/keywords?token=[ACCESS_TOKEN]`

## 请求参数

```json
{
  "content": "string",
  //用户主诉
  "pet_profile_id": 0,
  //宠物档案id
  "session_id": "string"
  //会话id
}
```

## 参数列表

| 名称             | 类型     | 必填 | 说明     |
|----------------|--------|----|--------|
| content        | string | 是  | 用户主诉   |
| pet_profile_id | int    | 是  | 宠物档案id |
| session_id     | string | 是  | 会话id   |

## 返回结果

```json
{
  "data": {
    "keyword": "猫咪腹痛",
    //关键词
    "unit": "消化内科"
    //科室
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
    tag="keywords"   
    type="post"   
    path="/aidoc/keywords"   
  />  
</ClientOnly>


