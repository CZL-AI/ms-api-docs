# AI宠物品种识别服务

## 产品介绍
---
AI宠物品种识别服务是一款基于人工智能技术的宠物品种鉴定工具，专为宠物主人、宠物收养机构、宠物医疗机构和宠物相关应用开发者设计。该服务能够通过分析宠物的图像，自动识别和确定宠物的品种，包括数百种犬类和猫类品种，以及其他常见宠物类型。系统对上传的宠物图片进行精准分析，不仅能够识别纯种宠物，还能分析混血宠物的主要品种构成。服务生成专业的品种识别报告，提供品种特征、性格特点、常见健康问题和护理建议等全面信息，帮助用户更好地了解自己的宠物，提供更适合的饲养和医疗照顾。

## 使用场景
---
- **宠物收养识别**：收养机构可以通过该服务确定待收养宠物的品种，为潜在主人提供准确信息
- **宠物医疗参考**：兽医可以根据品种识别结果，了解特定品种的遗传疾病倾向，制定更精准的诊疗方案
- **宠物保险评估**：保险公司可以基于准确的品种信息，为宠物提供更合适的保险方案和定价
- **宠物社区应用**：宠物社交平台可集成此功能，让用户分享和了解彼此宠物的品种信息
- **个人宠物档案**：宠物主人可以获取宠物的准确品种信息，建立完整的宠物档案，更好地了解宠物需求

## 接口调用流程
---
1. 获取session_id
2. 上传宠物图片获取品种识别结果（summary接口）
3. 生成品种识别报告（report接口）
4. 获取完整的品种识别报告内容（medical-record接口）

# 获取session_id开始会话流程说明文档
---
开发者需要按照如下步骤完成：
<br/>
宠物品种识别API前，都需要先获取session_id。

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/session-record/session-start?token=[ACCESS_TOKEN]`

## 请求参数：
```json
{
    "module_type": 5, 
    "sub_module_type": 1, 
    "pet_profile_id": 0
}
```


## 参数列表：

| 名称            | 类型   | 必填 | 说明                  |
| --------------- | ------ | ---- | --------------------- |
| module_type     | number | 是   | 识别模块类型，固定为5 |
| sub_module_type | number | 是   | 子模块类型，固定为1   |
| pet_profile_id  | number | 是   | 宠物档案ID            |

## 返回结果：
```json
{
    "data": {
        "medical_record_id": 22786,
        "session_id": "689ddf5e-ebce-4504-92eb-b2885c9d138b"
    },
    "message": "Get successfully.",
    "success": true // 成功返回true，失败返回false
}
```

## 返回参数说明：
| 名称              | 类型   | 说明                                         |
| ----------------- | ------ | -------------------------------------------- |
| medical_record_id | number | 医疗记录ID                                   |
| session_id        | string | 会话ID, 用于管理会话上下文, 在后续的接口用上 |

## 接口调试：
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    tag="session"
    type="post"
    path="/session-record/session-start" 
  />
</ClientOnly>