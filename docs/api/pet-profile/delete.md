# 删除宠物档案
---
开发者需要按照如下步骤完成：


## 调用接口：
**请求方式：** `DELETE（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/pet/pet-profile?pet_profile_id=[宠物编号]&token=[ACCESS_TOKEN]`

## 参数列表[query]：

| 名称           | 类型   | 必填 | 说明       |
| -------------- | ------ | ---- | ---------- |
| pet_profile_id | number | 是   | 宠物档案ID |
| token          | string | 是   | 凭证令牌 |


## 返回参数说明：
无返回参数
状态：204

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