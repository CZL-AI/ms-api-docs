# 生成表情包说明文档
---
开发者需要按照如下步骤完成：
生成宠物表情包。

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/ai-meme?token=[ACCESS_TOKEN]`

## 请求参数：
```json
{
    "image_url":"https://angular00001.oss-cn-beijing.aliyuncs.com/applet.png", 
    "session_id":"689ddf5e-ebce-4504-92eb-b2885c9d138b" 
}
```


## 参数列表：

| 名称       | 类型   | 必填 | 说明                                           |
| ---------- | ------ | ---- | ---------------------------------------------- |
| image_url  | string | 是   | 宠物图片地址（需提供一张能正常访问的图片地址） |
| session_id | string | 是   | 会话ID                                         |

## 返回结果：
```json
{
    "data": {
        "context": {
            "caption_list": [],
            "is_cat_dog": 1,
            "is_legal": 1
        },
        "created_at": "",
        "id": 123,
        "meme_img": {},
        "origin_img": null,
        "updated_at": null,
        "user_uuid": ""
    },
    "message": "Get successfully.",
    "success": true // 返回true表示请求成功
}
```

## 返回参数说明：
| 名称                 | 类型   | 说明                               |
| -------------------- | ------ | ---------------------------------- |
| context.caption_list | array  | 包含多个文本项的列表，描述相关情境 |
| context.is_cat_dog   | number | 是否为猫狗（1：是，0：否）         |
| context.is_legal     | number | 是否合法（1：合法，0：不合法）     |
| created_at           | string | 创建时间，格式为 ISO 8601          |
| id                   | string | 唯一标识符，ID                     |
| meme_img             | string | 表示 meme 图片的对象，当前为空对象 |
| origin_img           | null   | 原始图片，当前为 null              |
| updated_at           | null   | 更新时间，当前为 null              |
| user_uuid            | null   | 用户的唯一标识符，UUID 格式        |


## 接口调试：
---
<script setup>
import SwaggerUI from '../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    tag="ai-meme"
    type="post"
    path="/ai-meme" 
  />
</ClientOnly>