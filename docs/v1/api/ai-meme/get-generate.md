# 获取生成表情包说明文档
---
开发者需要按照如下步骤完成：
根据 AI 表情包生成接口返回的文案序号，获取对应的表情包图片。

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/ai-meme/generate?token=[ACCESS_TOKEN]`

## 请求参数：
```json
{
    "context_index": 0,
    "meme_id": 6618
}
```

## 参数列表：

| 名称          | 类型   | 必填 | 说明                                                 |
| ------------- | ------ | ---- | ---------------------------------------------------- |
| context_index | number | 是   | 表情包文案序号，对应生成接口返回的 caption_list 下标 |
| meme_id       | number | 是   | 表情包记录ID，对应生成接口返回结果中的 id            |

## 返回结果：
```json
{
    "data": {
        "meme_url": "https://czl-upload.oss-accelerate.aliyuncs.com/meme_b3281251-e65b-40a5-8e6c-cafa28de0a67.jpg"
    },
    "message": "Get successfully.",
    "success": true
}
```

## 返回参数说明：
| 名称          | 类型    | 说明                         |
| ------------- | ------- | ---------------------------- |
| data.meme_url | string  | 生成后的表情包图片地址       |
| message       | string  | 返回信息描述                 |
| success       | boolean | 是否请求成功，true 表示成功  |

## 注意事项：
1. 需要先调用 `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/ai-meme?token=[ACCESS_TOKEN]` 生成表情包文案列表，并获取返回结果中的 `id` 和 `context.caption_list`。
2. `meme_id` 取生成接口返回结果中的 `id`。
3. `context_index` 是 `context.caption_list` 的序号，从 0 开始。例如需要生成 `caption_list` 中第一条文案对应的表情包时，传 `context_index: 0`。
4. 调用成功后，接口返回 `data.meme_url`，客户端可使用该地址展示或下载对应表情包。

## 生成接口返回示例：
```json
{
    "data": {
        "context": {
            "caption_list": [
                "这届AI不行，看谁都是猫狗。",
                "我是鱼，不是猫，别乱认亲戚。",
                "AI：只要长了眼睛，统统算猫狗。",
                "这识别系统是喝了多少假酒？",
                "鱼：我这辈子没这么无语过。",
                "这就是传说中的指鱼为猫？",
                "AI的眼睛，大概是用来装饰的。",
                "别问，问就是品种独特的猫。"
            ],
            "is_cat_dog": 0,
            "is_legal": 1
        },
        "created_at": "2026-04-30T08:51:28",
        "id": 6618,
        "meme_img": {},
        "origin_img": "https://czl-upload.oss-accelerate.aliyuncs.com/ms-ai-b/20260430/1777539080NKvqXUGw.jpeg",
        "updated_at": null,
        "user_uuid": "8a43a75c-5624-4cb0-9cf5-0d9342b78709"
    },
    "message": "Get successfully.",
    "success": true
}
```

## 接口调试：
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    tag="ai-meme"
    type="post"
    path="/ai-meme/generate"
    version="v2"
  />
</ClientOnly>
