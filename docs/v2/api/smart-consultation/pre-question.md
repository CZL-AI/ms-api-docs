# 1、获取预设问题  - 智能问诊模块

根据宠物档案获取问诊预设问题列表。

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/pre-question?token=[ACCESS_TOKEN]&pet_profile_id=[宠物ID]`

## 请求参数 [Query]：
```json
token: string (必填)  接口调用凭证
pet_profile_id: number (必填)  宠物档案 ID，用于绑定
```

## 返回结果：
```json
{
    "data": [
        "狗狗打喷嚏流鼻涕是感冒吗？",
        "狗狗食欲不振，精神不好是生病了吗？",
        "狗狗挠耳朵有黑分泌物是耳螨吗？",
        "狗狗走路瘸腿是什么原因？",
        "狗狗掉毛有红疹是什么原因？",
        "狗狗呕吐拉肚子是食物中毒吗？",
        "狗狗眼睛有分泌物是发炎吗？",
        "狗狗喘粗气是心脏病吗？",
        "狗狗体重下降，喝水多是糖尿病吗？"
    ],
    "message": "Get successfully.",
    "success": true
}
```

## 返回参数说明：
| 名称              | 类型   | 说明                                         |
| ----------------- | ------ | -------------------------------------------- |
| data | array | 预设问题列表                                   |
| message | string | 接口返回信息                                   |
| success | boolean | 接口调用状态                                   |
