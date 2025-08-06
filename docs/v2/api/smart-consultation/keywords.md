# 2、判断获取关键字 - 智能问诊模块

## 接口描述
---
该接口用于从用户的主诉内容中提取关键症状词，并自动匹配推荐的就诊科室或诊断方向。适用于智能问诊流程中的初步引导环节。

## 调用接口

**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/aidoc/keywords?token=[ACCESS_TOKEN]`

## 请求参数
### Body 参数（`application/json`）
```json
{
  "content": "猫咪呕吐两天",
  "pet_profile_id": 3147,
  "session_id": "7cc8c7e0-266f-4fb5-8bf9-cac62905a23d"
}
```

## 参数列表

| 名称             | 类型   | 必填 | 说明                         |
|------------------|--------|------|------------------------------|
| content          | string | 是   | 用户主诉内容，如“猫咪呕吐两天” |
| pet_profile_id   | number | 是   | 宠物档案 ID，用于绑定宠物信息 |
| session_id       | string | 是   | 会话唯一标识，用于维持上下文状态 |

## 返回结果

```json
{
  "data": {
    "keyword": "猫咪腹痛",
    "unit": "消化内科"
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
| data.keyword      | string  | 提取的症状关键词，用于后续分析               |
| data.unit         | string  | 匹配的推荐科室名称                           |
| error_code | string  | 错误码                     |
| message    | string  | 返回信息描述                  |
| success    | boolean | 是否成功，成功返回 `true`，失败返回 `false`  |

## 使用场景说明

该接口通常在用户输入初始主诉后调用，用于：
- 提取关键症状词汇；
- 自动推荐可能涉及的科室或疾病方向；
- 辅助后续问诊流程分支选择。

## 注意事项

1. **权限控制**：请确保请求时携带有效 `token`。
2. **字段一致性**：`keyword` 应保持语义准确，便于后续推理模块使用。

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
    version="v2"  
  />  
</ClientOnly>


