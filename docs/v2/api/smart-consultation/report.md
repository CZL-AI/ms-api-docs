# 12、生成问诊报告 - 智能问诊模块

## 接口描述
---

该接口用于在一次完整问诊结束后触发问诊报告的生成过程。系统将根据用户的问答记录、上传图片的分析结果及总结内容，生成一份结构化报告，并通过医疗记录接口提供后续访问。

> ⚠️ 注意：本接口仅用于触发报告生成，不会直接返回报告内容。请通过 `/medical-record` 接口查询生成结果。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/aidoc/report?token=[ACCESS_TOKEN]`

## 请求参数
```json
{
    "session_id": "c139a49a-ca34-472d-9749-6cd976cbb937"
}
```

## 参数列表
### Body 参数（`application/json`）
| 名称            | 类型   | 必填 | 说明                  |
| --------------- | ------ | ---- | --------------------- |
| session_id      | string | 是   | 会话唯一标识，用于识别上下文 |

## 返回结果
```json
true
```

## 返回参数说明
返回值为布尔类型，`true` 表示报告生成成功，`false` 表示报告生成失败。

## 注意事项
1. **报告生成**：该接口仅用于触发报告生成过程，不会直接返回报告内容。
2. **报告获取**：生成报告后，可以通过医疗记录接口（medical-record）获取完整的报告内容。
3. **报告内容**：报告内容包括问诊总结、图片分析结果和问答记录，供用户参考。
4. **报告保存**：用户可以保存或分享报告，以便后续查阅。
5. **专业建议**：报告仅供参考，最终诊断建议咨询专业兽医。

## 接口调试
---
<script setup>  
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'  
</script>  

<ClientOnly>  
  <SwaggerUI   
    tag="report"   
    type="post"   
    path="/aidoc/report" 
    version="v2"  
  />  
</ClientOnly>


