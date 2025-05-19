# 6、上传文件 - 智能问诊模块

## 接口描述
---
该接口用于将用户拍摄的宠物图片上传到对象存储服务（OSS）。用户根据系统提示上传图片后，图片会被存储到指定的存储桶中，并生成一个可访问的图片地址，用于后续的分析和诊断。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/file/upload-image-oss`

## 请求参数
### Body 参数（`multipart/form-data`）
| 名称            | 类型   | 必填 | 说明                  |
| --------------- | ------ | ---- | --------------------- |
| image           | file   | 是   | 需要上传的图片文件    |


## 返回结果
```json
{
    "code": 1,
    "data": {
        "name": "1742008967.jpg",
        "show_url": "https://czl-upload.oss-accelerate.aliyuncs.com/ms-ai-b/20250315/1742008967OKlfqRjb.jpg",
        "url": "https://czl-upload.oss-accelerate.aliyuncs.com/ms-ai-b/20250315/1742008967OKlfqRjb.jpg"
    },
    "msg": "ok",
    "time": 1742008967.8735206
}
```

## 返回参数说明
| 名称              | 类型   | 说明                                         |
|-------------------|--------|----------------------------------------------|
| code              | number | 状态码，1表示成功                            |
| data              | object | 返回数据对象                                 |
| data.name         | string | 上传后的文件名称                             |
| data.show_url     | string | 图片显示地址，用于前端展示                   |
| data.url          | string | 图片访问地址，用于API调用                    |
| msg               | string | 返回信息描述                                 |
| time              | number | 服务器处理时间戳                             |

## 注意事项
1. **文件格式限制**：仅支持上传图片格式（如 JPEG、PNG 等）。
2. **文件大小限制**：单个文件大小不得超过 10MB。
3. **存储路径**：上传的图片将存储在指定的OSS存储桶中，返回的 `url` 可用于后续接口调用。

## 接口调试
---
<script setup>  
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'  
</script>  

<ClientOnly>  
  <SwaggerUI   
    tag="upload-image-oss"   
    type="post"   
    path="/file/upload-image-oss"   
  />  
</ClientOnly>


