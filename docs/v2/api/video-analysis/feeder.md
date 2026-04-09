# AI宠物进食进水视频识别服务

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-feeder/predict?token=[ACCESS_TOKEN]`

## **参数列表：**[multipart/form-data]
| 参数  | 类型 | 含义                   |
| ----- | ---- | ---------------------- |
| file | `file` | 上传的视频文件【mp4, avi等格式】 |

## 返回结果

```json
{
    "data": {
        "conf": 0.59,
        "counts": 4,
        "index": 1,
        "label": "进食",
        "total_segments": 4
    },
    "message": "Get successfully.",
    "success": true
}
```

## 返回参数说明

| 字段名             | 类型     | 说明                                                                 |
|--------------------|----------|----------------------------------------------------------------------|
| `success`          | boolean  | 响应状态码，true 表示请求成功                                       |
| `message`          | string   | 响应描述                                                            |
| `data`             | object   | 包含行为识别结果的数据对象                                          |
| └─`conf`           | float    | 识别置信度（范围：0~1）                                             |
| └─`counts`         | int      | 当前行为类型出现次数                                                |
| └─`index`          | int      | 当前片段在视频中的索引                                              |
| └─`label`          | string   | 识别的行为标签（如"饮水"、"进食"、"其他"、"假动作"）              |
| └─`total_segments` | int      | 视频被分割的总片段数                                                |