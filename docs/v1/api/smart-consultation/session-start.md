# 智能问诊模块 

## 产品介绍
---
智能问诊模块是一款基于人工智能技术的宠物健康问诊工具，专为宠物医疗机构、宠物主人和宠物健康应用开发者设计。该模块通过智能对话和图像识别技术，为用户提供宠物健康问题的初步诊断和建议，帮助用户更好地管理宠物健康。

## 使用场景
---
- **宠物医院远程诊断**：兽医可以通过该模块对宠物健康问题进行初步分析，辅助远程诊断。
- **宠物主人家庭检查**：宠物主人可以在家中通过智能问诊模块咨询宠物健康问题。
- **宠物健康管理平台**：宠物健康管理应用可集成此功能，为用户提供宠物健康咨询服务。
- **宠物医疗教育**：可用于宠物医疗教育培训，帮助学习者识别不同的健康问题。
- **宠物保险评估**：宠物保险公司可利用该模块评估宠物健康状况，作为保险定价和理赔参考。

## 接口调用流程
---
1. 获取session_id
2. 提交问题（question接口）
3. 获取问题选项（options接口）
4. 提交病史（history接口）
5. 判断是否需要上传图片（if-need-image接口）
6. 上传图片到OSS（upload-image-oss接口）
7. 获取图片识别结果（pic-result接口）
8. 判断是否继续提问（if-continue-ask接口）
9. 获取问诊总结（summary接口）
10. 生成问诊报告（report接口）
11. 获取完整的问诊报告内容（medical-record接口）


# 1、开始会话接口  - 智能问诊模块
获取session_id开始会话流程说明文档

---

开发者需要按照如下步骤完成：
在调用智能问诊模块的API之前，都需要先获取session_id。

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/session-record/session-start?token=[ACCESS_TOKEN]`

## 请求参数：
```json
{
    "content": "德文不吃饭了",
    "module_type": 1,
    "pet_profile_id": 3147
}
```

## 参数列表：

| 名称            | 类型   | 必填 | 说明                  |
| --------------- | ------ | ---- | --------------------- |
| content         | string | 是   | 初始问题内容          |
| module_type     | number | 是   | 识别模块类型，固定为1 |
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



