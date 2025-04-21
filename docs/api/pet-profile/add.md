# 创建宠物档案说明文档

## 功能介绍
---
本文档介绍了如何通过API创建宠物档案。宠物档案是宠物健康管理的基础数据，包含宠物的基本信息（如名称、品种、性别、体重等）和健康信息（如过敏史、疾病史、疫苗接种情况等）。通过创建宠物档案，您可以为后续的宠物健康管理、智能问诊和个性化服务提供必要的数据支持。

## 使用方法
---
开发者需要通过HTTP POST请求创建宠物档案，请求时需要提供宠物的基本信息（必填项包括宠物名称、性别和宠物类型）。系统会返回创建成功的宠物档案详细信息，包括系统生成的宠物档案ID，该ID将用于后续与该宠物相关的所有API调用。建议在用户注册或首次使用应用时引导用户创建宠物档案，以便提供更精准的服务。

## 适用场景
---
- **宠物应用初始化**：用户首次使用宠物健康管理应用时，创建基础宠物信息
- **宠物医疗服务**：宠物医院或诊所为新宠物患者建立电子档案
- **宠物商城个性化**：电商平台为用户宠物创建档案，提供个性化商品推荐
- **智能设备配置**：宠物智能设备初始化配置，记录宠物基本信息
- **多宠家庭管理**：帮助饲养多只宠物的家庭分别创建和管理各宠物档案

---
开发者需要按照如下步骤完成：

当用户在商户程序中创建宠物档案时，需要部分宠物信息会被存储在我们的数据库中。这样，我们才能够获取与该宠物ID相关的信息。

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/pet-profile?token=[ACCESS_TOKEN]`

## 请求参数：
```json
{
    "avatar": "https://xxx/applet.png",
    "gender": 0,
    "name": "德文",
    "pet_type": 2,
    "pet_variety": "中华田园犬",
    "weight": "2"
}
```

## 参数列表：

| 名称        | 类型   | 必填 | 说明                     |
| ----------- | ------ | ---- | ------------------------ |
| avatar      | string | 否   | 宠物图片                 |
| birthday    | string | 否   | 出生日期                 |
| gender      | number | 是   | 性别: 1-公, 2-母         |
| name        | string | 是   | 宠物名称                 |
| pet_type    | number | 是   | 宠物类型：1-猫, 2-狗     |
| pet_variety | string | 否   | 宠物品种: 如: 中华田园犬 |
| weight      | string | 否   | 体重(kg)                 |


## 返回结果：
```json
{
    "code": 200, // 状态码，200表示成功
    "message": "success",
    "data": {
        "age": "0岁1个月",
        "allergy_history": "无",
        "avatar": "https://xxxx/applet.png",
        "birthday": "xxxx-xx-xxT12:00:00",
        "care_advice": null,
        "diet_standard": null,
        "disease_history": "无",
        "ex_info": {},
        "family_history": "无",
        "gender": "未知",
        "health_advice": null,
        "id": 123,
        "is_del": 0,
        "is_neutered": "未绝育",
        "is_vaccination": 0,
        "name": "德文",
        "pet_type": "狗",
        "pet_variety": "中华田园犬",
        "post_info": {},
        "vaccination_date": ""xxxx-xx-xxT12:00:00",
        "weight": "2",
        "weight_info": "2Kg"
    }
}
```

## 返回参数说明：
| 名称            | 类型   | 说明                           |
|-----------------|--------|--------------------------------|
| age             | string | 年龄                           |
| allergy_history | string | 过敏史                         |
| avatar          | string | 宠物图片                       |
| birthday        | string | 出生日期                       |
| disease_history | null   | 疾病史                         |
| family_history  | null   | 家族史                         |
| gender          | number | 性别: 1-公, 2-母               |
| is_neutered     | number | 是否绝育：0：未绝育，1：已绝育 |
| is_vaccination  | null   | 是否接种疫苗：是否接种疫苗    |
| name            | string | 宠物名称                       |
| pet_type        | number | 宠物类型：1-猫, 2-狗           |
| pet_variety     | string | 宠物品种                       |
| vaccination_date| string | 疫苗接种时间                   |
| weight          | string | 体重(kg)                       |

## 接口调试
---
<script setup>
import SwaggerUI from '../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    type="post"
    path="/pet-profile" 
  />
</ClientOnly>