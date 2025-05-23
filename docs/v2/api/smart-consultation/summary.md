# 11、获取问诊总结【流式】 - 智能问诊模块

## 接口描述
---

该接口用于获取一次完整智能问诊流程结束后的总结信息。系统将根据用户的问答记录、上传图片的分析结果以及推理逻辑，生成一份结构化的问诊总结，供用户查看或后续报告生成使用。

> ⚠️ 注意：本接口以**流式文本**形式返回内容，适合逐步展示给用户阅读；同时需携带有效 `token` 进行身份认证。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/aidoc/summary?token=[ACCESS_TOKEN]`

## 请求参数
```json
{
    "pet_profile_id": 3147,
    "session_id": "c139a49a-ca34-472d-9749-6cd976cbb937"
}
```

## 参数列表
### Body 参数（`application/json`）
| 名称            | 类型   | 必填 | 说明                  |
| --------------- | ------ | ---- | --------------------- |
| pet_profile_id  | number | 是   | 宠物档案 ID，用于绑定宠物信息            |
| session_id      | string | 是   | 会话唯一标识，用于维持上下文状态 |

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

## 返回数据说明

| 特征           | 说明                                                                 |
|----------------|----------------------------------------------------------------------|
| 流式输出       | 响应内容分批次发送，客户端需持续读取数据流                           |
| 内容组成       | 包含“病情小结”、“基本信息”、“主诉”、“病情记录”等部分                |
| 结束标识符     | 最后一个数据块以 `$` 符号结尾，表示本次数据流传输已完成              |
| 使用场景       | 用于展示问诊总结内容，作为生成最终报告的前置步骤                     |

---

## 使用场景说明

该接口通常在以下环节中调用：

- 用户完成所有问诊交互；
- 系统准备生成最终报告前；
- 需要向用户展示问诊过程的汇总信息时。

---
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
    version="v2" 
  />  
</ClientOnly>


