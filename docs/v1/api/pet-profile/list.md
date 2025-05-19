# 宠物档案列表说明文档
---

## 调用接口：
**请求方式：** `GET（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/pet-profiles?token=[ACCESS_TOKEN]`

## 返回结果：
```json
{
  "data": [
    {
      "age": "0岁3个月",
      "allergy_history": "无",
      "avatar": "https://angular00001.oss-cn-beijing.aliyuncs.com/applet.png",
      "birthday": "2024-09-09T12:00:00",
      "care_advice": null,
      "diet_standard": null,
      "disease_history": "无",
      "ex_info": {},
      "family_history": "无",
      "gender": "未知",
      "health_advice": null,
      "id": 35872,
      "is_del": 0,
      "is_neutered": "未绝育",
      "is_vaccination": 0,
      "name": "德文-123",
      "pet_type": "猫",
      "pet_variety": "旺财-123",
      "post_info": {},
      "vaccination_date": "2024-09-13T12:00:00",
      "weight": "2",
      "weight_info": "2Kg"
    }
  ],
  "message": "Get successfully.",
  "success": true
}
```

## 返回参数说明：
| 名称             | 类型   | 说明                           |
| ---------------- | ------ | ------------------------------ |
| age              | string | 年龄                           |
| allergy_history  | string | 过敏史                         |
| avatar           | string | 宠物图片                       |
| birthday         | string | 出生日期                       |
| disease_history  | null   | 疾病史                         |
| family_history   | null   | 家族史                         |
| gender           | number | 性别: 1-公, 2-母               |
| is_neutered      | number | 是否绝育：0：未绝育，1：已绝育 |
| is_vaccination   | null   | 是否接种疫苗：是否接种疫苗     |
| name             | string | 宠物名称                       |
| pet_type         | number | 宠物类型：1-猫, 2-狗           |
| pet_variety      | string | 宠物品种                       |
| vaccination_date | string | 疫苗接种时间                   |
| weight           | string | 体重(kg)                       |

## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    type="get"
    path="/pet-profiles" 
  />
</ClientOnly>