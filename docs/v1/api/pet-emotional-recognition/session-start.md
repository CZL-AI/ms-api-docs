# AI宠物情绪识别服务

## 产品介绍
---
AI宠物情绪识别服务是一款基于人工智能技术的宠物情感分析工具，专为宠物主人、宠物行为学家、宠物训练师和宠物相关应用开发者设计。该服务能够通过分析宠物的面部表情、身体姿态和行为特征，自动识别和评估宠物的情绪状态，包括快乐、悲伤、愤怒、恐惧、放松、警觉等多种情绪。系统对上传的宠物图片进行精准分析，生成专业的情绪评估报告，帮助用户更好地理解宠物的情感需求和心理状态，促进人宠之间的有效沟通，提升宠物的生活质量和幸福感。

## 使用场景
---
- **日常情绪监测**：宠物主人可以通过拍摄宠物照片，了解宠物当前的情绪状态，及时回应宠物的情感需求
- **行为问题诊断**：宠物行为专家可利用该服务辅助分析宠物的情绪变化，找出行为问题的潜在原因
- **训练效果评估**：宠物训练师可通过情绪识别，评估训练过程中宠物的压力水平和接受程度，调整训练方法
- **宠物社交应用**：宠物社交平台可集成此功能，让用户分享宠物的情绪状态，增强社交互动体验
- **宠物健康监测**：作为健康监测的辅助工具，通过情绪变化发现宠物可能存在的健康问题，及早干预

## 接口调用流程
---
1. 获取session_id
2. 上传宠物图片获取情绪识别结果（summary接口）
3. 生成情绪识别报告（report接口）
4. 获取完整的情绪识别报告内容（medical-record接口）

# 获取session_id开始会话流程说明文档
---
开发者需要按照如下步骤完成：
<br/>
宠物情绪识别API前，都需要先获取session_id。

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/session-record/session-start?token=[ACCESS_TOKEN]`

## 请求参数：
```json
{
    "module_type": 5, 
    "sub_module_type": 2, 
    "pet_profile_id": 0
}
```


## 参数列表：

| 名称            | 类型   | 必填 | 说明                  |
| --------------- | ------ | ---- | --------------------- |
| module_type     | number | 是   | 识别模块类型，固定为5 |
| sub_module_type | number | 是   | 子模块类型，固定为2   |
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