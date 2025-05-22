# 3、推理文案【流式】 - 智能问诊模块

## 接口描述
---
该接口用于获取智能问诊模块中的推理文案，以流式文本形式返回。开发者可以通过此接口获取系统生成的问题，并展示给用户。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/aidoc/reason-info?token=[ACCESS_TOKEN]`

## 请求参数
```json
{
    "pet_profile_id": 3147,
    "session_id": "26494514-5f81-468f-94c7-539706282337"
}
```

## 参数列表

| 名称            | 类型   | 必填 | 说明                  |
| --------------- | ------ | ---- | --------------------- |
| pet_profile_id  | number | 是   | 宠物档案ID            |
| session_id      | string | 是   | 会话ID，用于管理会话上下文 |

## 返回结果
```plaintext
猫咪肚子痛的原因有很多，例如**饮食不当、寄生虫感染、肠胃炎**等都可能引起。我会尽力帮助您找出原因。

为了更准确判断病因,我需要了解更多细节:
$
```

## 返回参数说明
- 响应内容为流式文本，客户端需要能够处理流式数据。
- 流式传输的内容会分多次发送。
- 最后一个数据块以 `$` 符号结尾，表示流式传输结束。
- 客户端应该持续读取数据流，直到接收到以 `$` 结尾的数据块。

## 接口调试
---
<script setup>  
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'  
</script>  

<ClientOnly>  
  <SwaggerUI   
    tag="question"   
    type="post"   
    path="/aidoc/reason-info"   
  />  
</ClientOnly>  



