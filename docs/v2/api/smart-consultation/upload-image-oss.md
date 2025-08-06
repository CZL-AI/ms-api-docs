# 8、上传文件 - 智能问诊模块

## 接口描述
---
该接口用于将用户拍摄的宠物图片上传至对象存储服务（OSS），以便后续进行图像识别与健康分析。上传成功后会返回图片的访问地址，供其他接口（如 `/pic-result`）使用。


## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/file/upload-image-oss?token=[ACCESS_TOKEN]`

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
| 名称           | 类型    | 说明                                               |
|----------------|---------|----------------------------------------------------|
| code           | number  | 状态码，`1` 表示成功，其他为失败                  |
| data           | object  | 图片上传后的返回数据对象                           |
| data.name      | string  | 上传成功后的文件名                                 |
| data.show_url  | string  | 图片展示地址，用于前端预览                         |
| data.url       | string  | 图片原始访问地址，用于后续 API 调用                |
| msg            | string  | 接口执行结果描述                                   |
| time           | number  | 接口处理时间戳，单位为秒                           |

## 注意事项

1. **权限控制**：请确保请求时携带有效 `token`。
2. **文件格式限制**：仅支持常见图片格式（如 JPEG、PNG）。
3. **文件大小限制**：单个文件不得超过 10MB。
4. **重复上传问题**：每次上传都会生成新文件名，不会覆盖原有文件。
5. **URL 有效性**：返回的 `url` 和 `show_url` 默认为永久有效链接。
6. **错误处理建议**：若上传失败，请检查网络或重试上传。


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
    version="v2"  
  />  
</ClientOnly>


