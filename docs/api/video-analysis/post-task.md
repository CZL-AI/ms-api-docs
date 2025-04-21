# 发送任务
---
提交任务，对宠物视频进行智能分析，通过多维度分析宠物视频，提供专业行为与健康评估。
采用路径追踪、窗口自注意力机制，优化算法确保高效分析。适用于宠物主人、兽医及研究机构，助力理解宠物需求、改善人宠互动、支持健康研究。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/recognition/video_recognition?token=[TOKEN]`

## **参数列表：**[application/json]
| 参数            | 类型   | 含义                                               |
| --------------- | ------ | -------------------------------------------------- |
| video_url     | string | 分析视频URL |


## **返回结果：**
```json
{
    "data": {
        "task_id": "f6bcfc8c-09f2-4199-96fd-42fe87ec1a11"
    },
    "message": "Get successfully.",
    "success": true
}
```
## **返回参数说明：**
| 参数     | 类型   | 含义                          |
| -------- | ------ | ----------------------------- |
| success      | boolean | 是否成功                   |
| message  | string | 返回信息                      |
| data.task  | string | 任务ID                      |

## 接口调试
---
<script setup>
import SwaggerUI from '../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    type="post"
    tag="recognition"
    path="/recognition/video_recognition" 
  />
</ClientOnly>