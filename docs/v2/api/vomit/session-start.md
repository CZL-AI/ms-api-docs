# AI宠物呕吐物检查服务

## 产品介绍
---
AI宠物呕吐物检查服务是一款基于人工智能技术的专业宠物健康监测工具，专为宠物主人、宠物医疗机构和宠物健康应用开发者设计。该服务能够通过分析宠物呕吐物的图像，自动识别和评估宠物消化系统健康状况，检测可能存在的异常情况，如食物中毒、异物摄入、消化系统疾病、寄生虫感染等问题。系统对上传的宠物呕吐物图片进行全面分析，生成专业的健康评估报告，帮助用户及时发现宠物健康隐患，为宠物提供更精准的健康管理和医疗支持，预防消化系统疾病的恶化和并发症的发生。

## 使用场景
---
- **急性健康问题评估**：宠物出现呕吐症状时，主人可以拍摄呕吐物照片，获取初步分析和处理建议
- **远程兽医咨询**：兽医可以通过该服务对宠物呕吐物图像进行初步分析，辅助远程诊断
- **宠物饮食调整参考**：根据呕吐物分析结果，为宠物主人提供饮食调整建议，改善宠物消化健康
- **宠物健康监测记录**：作为宠物健康档案的一部分，记录宠物呕吐症状及分析结果，用于长期健康管理
- **紧急情况决策辅助**：帮助宠物主人判断是否需要立即就医，减少不必要的恐慌或延误治疗

## 接口调用流程
---
1. 获取session_id
2. 上传宠物呕吐物图片获取识别结果（summary接口）
3. 生成识别报告（report接口）
4. 获取完整的识别报告内容（medical-record接口）

# 获取session_id开始会话流程说明文档

---
开发者需要按照如下步骤完成：
<br/>
呕吐物检查API前，都需要先获取session_id。

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/session-record/session-start?token=[ACCESS_TOKEN]`

## 请求参数：
```json
{
    "module_type": 5, 
    "sub_module_type": 5, 
    "pet_profile_id": 0
}
```


## 参数列表：

| 名称            | 类型   | 必填 | 说明                  |
| --------------- | ------ | ---- | --------------------- |
| module_type     | number | 是   | 识别模块类型，固定为5 |
| sub_module_type | number | 是   | 子模块类型，固定为5   |
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