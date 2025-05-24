# 智能问诊模块 

## 产品介绍
---
智能问诊模块是一款基于人工智能技术的宠物健康辅助诊断工具，适用于宠物医疗机构、宠物主人及第三方健康管理平台。通过自然语言处理与图像识别能力，模块可协助用户完成宠物健康问题的初步分析与引导式问诊。

## 使用场景
---
- **宠物医院远程诊断**：兽医可以通过该模块对宠物健康问题进行初步分析，辅助远程诊断。
- **宠物主人家庭检查**：宠物主人可以在家中通过智能问诊模块咨询宠物健康问题。
- **宠物健康管理平台**：宠物健康管理应用可集成此功能，为用户提供宠物健康咨询服务。
- **宠物医疗教育**：可用于宠物医疗教育培训，帮助学习者识别不同的健康问题。
- **宠物保险评估**：宠物保险公司可利用该模块评估宠物健康状况，作为保险定价和理赔参考。

## 接口调用流程
---
**在开始一次完整的智能问诊流程前，需首先调用本接口获取 session_id，作为后续交互的核心上下文标识。**。

1. 获取session_id

**下文两轮循环，用户与智能问诊模块进行会话。**
```
2. 获取关键字（keywords接口）
3. 获取推理文案（reason-info接口）
4. 获取病情分析（analysis接口）
5. 获取关联症状（related-question接口）
6. 提交病史（history接口）
```

7. 判断是否需要上传图片（if-need-image接口）
8. 上传图片到OSS（upload-image-oss接口）
9. 获取图片识别结果（pic-result接口）
10. 判断是否继续提问（if-continue-ask接口）
11. 获取问诊总结（summary接口）
12. 生成问诊报告（report-v2接口）
13. 获取完整的问诊报告内容（medical-record接口）


# 1、开始会话接口  - 智能问诊模块
获取session_id开始会话流程说明文档

---

开发者需要按照如下步骤完成：

该接口用于初始化一次问诊会话，返回唯一的会话ID（session_id），后续接口调用均需依赖此ID以维持会话状态。

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/session-record/session-start?token=[ACCESS_TOKEN]`

## 请求参数：
```json
{
    "content": "德文不吃饭了",
    "module_type": 1,
    "pet_profile_id": 3147
}
```

## 参数列表：

| 名称            | 类型   | 必填 | 说明              |
| --------------- | ------ | ---- |-----------------|
| content         | string | 是   | 用户输入的初始问诊内容（主诉） |
| module_type     | number | 是   | 识别模块类型，固定为1     |
| pet_profile_id  | number | 是   | 宠物档案 ID，用于绑定宠物信息          |


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
| medical_record_id | number | 医疗记录唯一标识                                   |
| session_id        | string | 会话唯一标识，后续接口必需 |

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



