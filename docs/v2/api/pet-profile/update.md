# 修改宠物档案说明文档
---
开发者需要按照如下步骤完成：

当用户在商户程序中修改宠物档案时，需要部分宠物信息会被存储在我们的数据库中。这样，我们才能够获取与该宠物ID相关的信息。

## 调用接口：
**请求方式：** `PUT（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/pet-profile?pet_profile_id=[PET_PROFILE_ID]&token=[ACCESS_TOKEN]&tmp_avatar=[AVATAR_URL]`

## Query参数：
| 名称        | 类型   | 必填 | 说明                     |
| ----------- | ------ | ---- | ------------------------|
| token      | string | 是   | 调用接口凭证                 |
| tmp_avatar      | string | 否   | 宠物头像地址[不填默认为空]，如果tmp_avatar不会空，会优先保存使用tmp_avatar，覆盖body'avatar                 |`

## 请求参数：
```json
{
  "allergy_history": "无",
  "avatar": "https://angular00001.oss-cn-beijing.aliyuncs.com/applet.png",
  "birthday": "2024-09-09 12:00:00",
  "disease_history": "无",
  "family_history": "无",
  "gender": 0,
  "is_neutered": 0,
  "is_vaccination": 0,
  "name": "啊文",
  "pet_type": 2,
  "pet_variety": "德文",
  "vaccination_date": "2024-09-13 12:00:00",
  "weight": "2"
}
```

## 参数列表：

| 名称        | 类型   | 必填 | 说明                     |
| ----------- | ------ | ---- | ------------------------ |
| avatar      | string | 否   | 宠物图片                 |
| birthday    | string | 否   | 出生日期                 |
| gender      | number | 是   | 性别: 1-公, 2-母, NULL[非1，2] 表示未知性别          |
| name        | string | 是   | 宠物名称                 |
| pet_type    | number | 是   | 宠物类型：1-猫, 2-狗     |
| pet_variety | string | 否   | 宠物品种: 如: 中华田园犬 |
| weight      | string | 否   | 体重(kg)                 |
|is_neutered | number | 否   | 是否绝育：0：未绝育，1：已绝育 |


## 返回结果：
```json
{
  "data": {
    "pet_profile_id": 35872
  },
  "message": "Post successfully.",
  "success": true
}
```

## 返回参数说明：
| 名称                | 类型   | 说明     |
| ------------------- | ------ | -------- |
| data.pet_profile_id | number | 宠物编号 |


## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    type="put"
    path="/pet-profile" 
  />
</ClientOnly>