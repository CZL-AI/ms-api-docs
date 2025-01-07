# 图片上传接口
---
可通过此接口上传视频到宠智灵服务器，并返回图片的访问地址。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/file/upload-video-oss?token=[TOKEN]`

## **参数列表：**[multipart/form-data]
| 参数 | 类型 | 含义                                                                        |
| ---- | ---- | --------------------------------------------------------------------------- |
| file | file | 上传的文件【常见的视频格式，mp4，avi, mov, wmv, flv, rmvb, mpeg, mpg, m4v】 |



## **返回结果：**
```json
{
    "code": 200,
    "message": "ok",
    "data": {
        "name": "1736213031.mp4",
        "url": "https://czl-upload.oss-shenzhen.chongzhiling.com/ms-ai-b/20250107/1736213031ByWPZtwa.mp4",
        "time": 1736213045.784357
    }
}
```
## **返回参数说明：**
| 参数 | 类型   | 含义           |
| ---- | ------ | -------------- |
| url  | string | 视频的访问地址 |


## 接口调试
---
<script setup>
import SwaggerUI from '../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    type="post"
    tag="File 服务"
    path="/file/upload-video-oss" 
  />
</ClientOnly>