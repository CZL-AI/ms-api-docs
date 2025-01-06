# 删除宠物档案
---
开发者需要按照如下步骤完成：


## 调用接口：
**请求方式：** `DELETE（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/pet/pet-profile?token=[ACCESS_TOKEN]`

## 请求参数：
```json
{
    "pet_profile_id": 0
}
```

## 参数列表：

| 名称           | 类型   | 必填 | 说明       |
| -------------- | ------ | ---- | ---------- |
| pet_profile_id | number | 否   | 宠物档案ID |


## 返回结果：
```json
 {
    "code": 200, // 状态码，200表示成功
    "message": "success",
    "data": "操作成功"
}
```

## 返回参数说明：
状态码code：200表示成功即可。

## 接口调试
---
<script setup>
import SwaggerUI from '../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    type="delete"
    path="/pet-profile" 
  />
</ClientOnly>