# 9、获取问诊总结【流式】 - 智能问诊模块

## 接口描述
---
该接口用于获取智能问诊的总结信息。在问诊结束后，系统会根据用户的回答和图片分析结果生成一份总结报告，帮助用户快速了解宠物的健康状况和建议措施。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/aidoc/summary?token=[ACCESS_TOKEN]`

## 请求参数
```json
{
    "pet_profile_id": 0,
    "session_id": "c139a49a-ca34-472d-9749-6cd976cbb937"
}
```

## 参数列表

| 名称            | 类型   | 必填 | 说明                  |
| --------------- | ------ | ---- | --------------------- |
| pet_profile_id  | number | 是   | 宠物档案ID            |
| session_id      | string | 是   | 会话ID，用于管理会话上下文 |

## 返回结果
```plaintext
【病情小结】

**基本信息:**
- 宠物昵称: 无。
- 宠物种类: 狗。
- 品种: 无。
- 年龄: 无。
- 体重: 无。

**主诉:**
狗狗不吃饭。

**病情记录:**
狗狗出现食欲不振的情况，目前具体原因不明，可能与消化系统问题或情绪压力有关。
$
```

## 返回参数说明
- 响应内容为流式文本，返回的是一个包含问诊总结的字符串。
- 总结内容通常包含以下几个部分：
  - **病情小结**：整体概述
  - **基本信息**：宠物的基本资料，如昵称、种类、品种、年龄、体重等
  - **主诉**：用户最初描述的问题
  - **病情记录**：根据问诊过程收集的信息生成的病情分析
- "$"符号表示流式传输结束。

## 注意事项
1. **总结内容**：总结内容基于用户的回答和图片分析结果生成，仅供参考。
2. **专业建议**：如果宠物症状持续或加重，建议及时咨询专业兽医。
3. **流式数据处理**：客户端需要能够处理流式数据，持续读取数据流，直到接收到以"$"结尾的数据块。

## 接口调试
---
<script setup>  
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'  
</script>  

<ClientOnly>  
  <SwaggerUI   
    tag="summary"   
    type="post"   
    path="/aidoc/summary"   
  />  
</ClientOnly>


