# 获取识别结果说明文档
---
开发者需要按照如下步骤完成：
宠物品种识别API前，都需要先获取session_id。

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/aipic/summary?token=[ACCESS_TOKEN]`

## 请求参数：
```json
{
    "img_url":"https://angular00001.oss-cn-beijing.aliyuncs.com/applet.png",
    "sub_module_type":1,
    "pet_profile_id":0,
    "session_id":"689ddf5e-ebce-4504-92eb-b2885c9d138b"
}
```


## 参数列表：

| 名称            | 类型   | 必填 | 说明                                               |
| --------------- | ------ | ---- | -------------------------------------------------- |
| img_urlimg_url  | string | 是   | 识别宠物图片地址（需提供一张能正常访问的图片地址） |
| sub_module_type | number | 是   | 子模块类型，固定为1                                |
| pet_profile_id  | number | 是   | 宠物档案ID                                         |
| session_id      | string | 是   | 会话ID                                             |

## 返回结果：
正常情况下，接口会返回以流式文本形式返回给到开发者：
```
Content-Type: text/event-stream
AI生成的图片分析结果片段1

AI生成的图片分析结果片段2

AI生成的图片分析结果片段3

...

AI生成的最后一个图片分析结果片段$
```

## 返回参数说明：
- 响应是以流式文本形式返回的，客户端需要能够处理流式数据。

- 流式传输的内容会分多次发送。

- 最后一个数据块以$符号结尾，表示流式传输结束。

- 客户端应该持续读取数据流，直到接收到以$结尾的数据块。

## 接口调试：
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    tag="aipic"
    type="post"
    path="/aipic/summary" 
  />
</ClientOnly>