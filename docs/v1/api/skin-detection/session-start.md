# AI宠物皮肤检测服务

## 产品介绍
---
AI宠物皮肤检测服务是一款基于人工智能技术的专业宠物皮肤健康检测工具，专为宠物主人、宠物医疗机构和宠物健康应用开发者设计。该服务能够通过分析宠物皮肤的图像，自动识别和评估宠物皮肤健康状况，检测可能存在的异常情况，如皮肤炎症、过敏反应、寄生虫感染、真菌感染、皮肤肿块等问题。系统对上传的宠物皮肤图片进行全面分析，生成专业的健康评估报告，帮助用户及时发现宠物皮肤健康隐患，为宠物提供更精准的皮肤健康管理和医疗支持，预防皮肤疾病的恶化和扩散。

## 使用场景
---
- **日常皮肤健康监测**：宠物主人可以定期拍摄宠物皮肤照片，通过系统检测宠物皮肤健康状况
- **远程兽医皮肤咨询**：兽医可以通过该服务对宠物皮肤图像进行初步分析，辅助远程诊断
- **宠物皮肤病筛查**：宠物医院可以利用该服务进行初步筛查，提高诊断效率
- **季节性皮肤问题预防**：在特定季节（如过敏高发季），帮助宠物主人监测和预防皮肤问题
- **宠物美容护理参考**：宠物美容师可根据皮肤检测结果，为宠物提供更适合的美容和护理方案

## 接口调用流程
---
1. 获取session_id
2. 上传宠物皮肤图片获取识别结果（summary接口）
3. 生成识别报告（report接口）
4. 获取完整的识别报告内容（medical-record接口）

# 获取session_id开始会话流程说明文档

---
开发者需要按照如下步骤完成：
<br/>
皮肤检测API前，都需要先获取session_id。

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/session-record/session-start?token=[ACCESS_TOKEN]`

## 请求参数：
```json
{
    "module_type": 5, 
    "sub_module_type": 6, 
    "pet_profile_id": 0
}
```


## 参数列表：

| 名称            | 类型   | 必填 | 说明                  |
| --------------- | ------ | ---- | --------------------- |
| module_type     | number | 是   | 识别模块类型，固定为5 |
| sub_module_type | number | 是   | 子模块类型，固定为6   |
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