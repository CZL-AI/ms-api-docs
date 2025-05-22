# 4、获取病情分析 - 智能问诊模块

## 接口描述
---
该接口用于判断病情分析的关键字，以辅助诊断。

## 调用接口

**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/aidoc/analysis?token=[ACCESS_TOKEN]`

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
    "questions": [
      {
        "content": "腹痛持续多久了？",
        //问题
        "id": "ques1",
        //问题标识
        "options": [
          {
            "choice": "一天内",
            "title": "持续时间"
          }
        ]
      },
      {
        "content": "精神状态如何？",
        "id": "ques2",
        "options": [
          {
            "choice": "较差",
            "title": "精神状态"
          }
        ]
      },
      {
        "content": "食欲是否正常？",
        "id": "ques3",
        "options": [
          {
            "choice": "下降",
            "title": "食欲"
          }
        ]
      }
    ]
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
    path="/aidoc/analysis"   
  />  
</ClientOnly>


