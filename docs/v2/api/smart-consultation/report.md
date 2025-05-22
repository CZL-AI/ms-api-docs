# 12、生成问诊报告 - 智能问诊模块

## 接口描述
---
该接口用于生成完整的问诊报告。在问诊结束后，系统会根据用户的回答、图片分析结果以及总结信息生成一份详细的问诊报告，供用户保存或分享。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/aidoc/report-v2?token=[ACCESS_TOKEN]`

## 请求参数
```json
{
    "session_id": "c139a49a-ca34-472d-9749-6cd976cbb937"
}
```

## 参数列表

| 名称            | 类型   | 必填 | 说明                  |
| --------------- | ------ | ---- | --------------------- |
| session_id      | string | 是   | 会话ID，用于管理会话上下文 |

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
  />  
</ClientOnly>


