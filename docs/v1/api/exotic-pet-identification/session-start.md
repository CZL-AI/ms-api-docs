# AI异宠识别服务

## 产品介绍
---
AI异宠识别服务是一款基于人工智能技术的异宠品种鉴定工具，专为异宠爱好者、宠物收养机构、宠物医疗机构和宠物相关应用开发者设计。该服务能够通过分析异宠的图像，自动识别和确定异宠的品种，包括爬行类、鸟类、啮齿类、两栖类等多种异宠类型。系统对上传的异宠图片进行精准分析，能够识别常见的异宠品种，并分析其主要特征。服务生成专业的品种识别报告，提供品种特征、习性特点、常见健康问题和饲养建议等全面信息，帮助用户更好地了解自己的异宠，提供更适合的饲养和医疗照顾。

## 使用场景
---
- **异宠收养识别**：收养机构可以通过该服务确定待收养异宠的品种，为潜在主人提供准确信息
- **异宠医疗参考**：兽医可以根据品种识别结果，了解特定品种的常见疾病倾向，制定更精准的诊疗方案
- **异宠保险评估**：保险公司可以基于准确的品种信息，为异宠提供更合适的保险方案和定价
- **异宠社区应用**：异宠社交平台可集成此功能，让用户分享和了解彼此异宠的品种信息
- **个人异宠档案**：异宠主人可以获取异宠的准确品种信息，建立完整的异宠档案，更好地了解异宠需求

## 接口调用流程
---
1. 获取session_id
2. 上传异宠图片获取品种识别结果（summary接口）
3. 生成品种识别报告（report接口）
4. 获取完整的品种识别报告内容（medical-record接口）

# 获取session_id开始会话流程说明文档
---
开发者需要按照如下步骤完成：
<br/>
异宠品种识别API前，都需要先获取session_id。

## 调用接口：
**请求方式：** `POST（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/session-record/session-start?token=[ACCESS_TOKEN]`

## 请求参数：
```json
{
    "module_type": 9,
    "sub_module_type": 1,
    "pet_profile_id": 0
}
```


## 参数列表：

| 名称            | 类型   | 必填 | 说明                                  |
| --------------- | ------ | ---- | ------------------------------------- |
| module_type     | number | 是   | 识别模块类型，固定为9（异宠图片识别） |
| sub_module_type | number | 是   | 子模块类型，固定为1（异宠品种识别）   |
| pet_profile_id  | number | 是   | 宠物档案ID                            |

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