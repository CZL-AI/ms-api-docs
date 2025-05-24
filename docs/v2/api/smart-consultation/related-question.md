# 5、获取病情关联症状 - 智能问诊模块

## 接口描述
---
该接口用于根据当前会话上下文获取与病情相关的症状选项。系统将基于用户已提供的信息，推荐一系列可能的症状供用户确认或补充，以辅助后续诊断。

## 调用接口

**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/aidoc/related-question?token=[ACCESS_TOKEN]`

> ⚠️ 注意：本接口需携带有效的 `token` 进行身份验证，未授权访问将被拒绝。

## 请求参数
```json
{
  "pet_profile_id": 3147,
  //宠物档案id
  "session_id": "26494514-5f81-468f-94c7-539706282337"
  //会话id
}
```

## 参数列表
### Body 参数（`application/json`）

| 名称             | 类型     | 必填 | 说明             |
|----------------|--------|----|----------------|
| pet_profile_id | number | 是  | 宠物档案 ID，用于识别宠物信息          |
| session_id     | string | 是  | 会话唯一标识，用于维持上下文状态 |

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
| data.options | array   | 病情关联症状列表，包含多个症状描述字符串      |
| data       | object  | 返回数据对象                  |
| error_code | string  | 错误码                     |
| message    | string  | 返回信息描述                  |
| success    | boolean | 是否成功，成功返回 `true`，失败返回 `false` |

## 使用场景说明

该接口通常在以下情况下被调用：

- 用户完成初步病情分析后；
- 系统需要进一步收集相关症状信息；
- 用于生成引导式问答中的“多选症状”环节。


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
    version="v2"  
  />  
</ClientOnly>


