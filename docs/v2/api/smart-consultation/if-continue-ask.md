# 8、是否继续问答【流式】 - 智能问诊模块

## 接口描述
---
该接口用于判断是否需要继续进行问诊问答。系统会根据当前问诊的进度和用户输入的信息，决定是否需要继续提问，以获取更多关于宠物健康状况的细节。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/aidoc-exotic/if-continue-ask?token=[ACCESS_TOKEN]`

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
"[True]\n$"
```

## 返回参数说明
- 响应内容为流式文本，返回的是一个字符串。
- 返回值为"[True]\n$"表示需要继续问诊。
- 返回值为"[False]\n$"表示问诊可以结束。
- "$"符号表示流式传输结束。

## 注意事项
1. **继续问诊条件**：如果系统返回"[True]\n$"，表示需要更多信息来完成诊断，应继续问诊流程。
2. **结束问诊条件**：如果系统返回"[False]\n$"，表示已有足够信息，可以结束问诊并生成总结。
3. **流式数据处理**：客户端需要能够处理流式数据，持续读取数据流，直到接收到以"$"结尾的数据块。

## 接口调试
---
<script setup>  
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'  
</script>  

<ClientOnly>  
  <SwaggerUI   
    tag="if-continue-ask"   
    type="post"   
    path="/aidoc-exotic/if-continue-ask"   
  />  
</ClientOnly>  



