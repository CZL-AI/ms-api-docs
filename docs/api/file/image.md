# 图片上传接口
---
可通过此接口上传图片到宠智灵服务器，并返回图片的访问地址。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/file/upload-image-oss?upload_type=[UPLOAD_TYPE]&upload_to_local=[UPLOAD_TO_LOCAL]&token=[TOKEN]`

## **参数列表1：**[query]
| 参数            | 类型   | 含义                                               |
| --------------- | ------ | -------------------------------------------------- |
| upload_type     | number | 图片上传类型 1-头像 2-图片识别模块 3-表情包 4-其他 |
| upload_to_local | number | 是否上传到本地服务器                               |

## **参数列表2：**[multipart/form-data]

| 参数  | 类型 | 含义                   |
| ----- | ---- | ---------------------- |
| image | file | 上传的文件【jpg, png】 |

## **返回结果：**
```json
{
    "code": 1,
    "data": {
        "name": "1735899523.jpg",
        "show_url": "https://czl-upload.oss-shenzhen.chongzhiling.com/ms-ai-b/20250103/17358995231Rp3fg0v.jpg",
        "url": "https://upload2.suoweilai.com/image/avatar/ms-ai-b/1735899523.jpg"
    },
    "msg": "ok",
    "time": 1735899528.201443
}
```
## **返回参数说明：**
| 参数     | 类型   | 含义                          |
| -------- | ------ | ----------------------------- |
| url      | string | 图片的访问地址[宠智灵-服务器] |
| show_url | string | 图片的访问地址[OSS]           |

::warning::
建议使用 url字段


## 接口调试
---
<script setup>
import SwaggerUI from '../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    type="post"
    tag="File 服务"
    path="/file/upload-image-oss" 
  />
</ClientOnly>