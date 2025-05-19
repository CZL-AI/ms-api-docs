# 获取视频分析结果
---


## 调用接口
**请求方式：** `GET（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/recognition/task_status?task_uuid=[TASK_ID]&token=[TOKEN]`


## **返回结果：**
```json
{
    "data": {
        "analysis_and_recommend": "- **日常照顾**：确保定期给宠物提供新鲜的食物和水，注意观察宠物的饮食习惯是否有变化。- **环境改善**：在车内为宠物准备一个舒适的休息区，避免长时间让宠物坐在硬质表面上。- **就医或进一步检查**：目前没有发现宠物有任何异常行为或健康问题，但建议定期带宠物去兽医那里进行体检，以确保其健康状况良好。",
        "emotion_tags": [
            "好奇",
            "平静",
            "平静",
            "平静",
            "平静",
            "平静",
            "平静",
            "平静",
            "平静",
            "平静"
        ],
        "general_description": "- **情绪与神情**：视频中的狗看起来很平静，没有表现出明显的兴奋或焦虑。它坐在车座上，面对着主人，似乎在等待食物。  - **触发因素与环境影响**：主人正在喂食狗罐头，这可能是引起狗情绪变化的主要因素。  - **潜在风险与隐患**：狗看起来很放松，没有表现出任何不安或焦虑的迹象。",
        "pet_breed": {
            "breed": "白色与棕色相间的中型犬"
        },
        "video_quality": {
            "percent": 85
        }
    },
    "message": "Get successfully.",
    "success": true
}
```
## **返回参数说明：**
| 参数                  | 类型    | 含义                                                                 |
|-----------------------|---------|----------------------------------------------------------------------|
| success               | boolean | 是否成功。如果分析过程顺利完成，则为`true`；否则为`false`。          |
| message               | string  | 返回信息，用于描述操作结果或错误原因。例如“Get successfully.”表示成功获取数据。 |
| data.video_quality    | object  | 包含视频质量评估的详细信息，其中`percent`字段表示视频质量评分（0~100）。         |
| data.pet_breed        | object  | 包含宠物品种的抽象描述，使用体貌特征（如毛色、体型）进行表述，避免具体品种推断。 |
| data.emotion_tags     | array   | 包含10个情绪标签，映射宠物在视频中的情绪变化，标签从预定义列表中选取。      |
| data.general_description | string | 使用Markdown格式输出，简要概括宠物的整体情绪、行为表现及潜在风险，分段说明触发因素与环境影响。 |
| data.analysis_and_recommend | string | 使用Markdown格式输出，基于视频观察提出专业建议，包括日常照顾、环境改善和就医建议等。 |


## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    type="get"
    tag="recognition"
    path="/recognition/task_status" 
  />
</ClientOnly>