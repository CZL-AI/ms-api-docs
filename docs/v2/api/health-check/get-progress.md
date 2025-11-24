# 4、获取健康检查进度 - 健康检查模块

## 接口描述
---
该接口用于获取当前健康检查的完成进度，包括总问题数、已回答问题数、未回答问题数等信息，帮助用户了解检查进度。

## 调用接口
**请求方式：** `GET（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-health-check/progress?token=[ACCESS_TOKEN]`

## 请求参数
### Query 参数
| 名称       | 类型   | 必填 | 说明                           |
| ---------- | ------ | ---- | ------------------------------ |
| session_id | string | 是   | 会话ID，用于标识本次健康检查流程 |

**请求示例：**
```
GET https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-health-check/progress?token=xxx&session_id=689ddf5e-ebce-4504-92eb-b2885c9d138b
```

## 返回结果
```json
{
    "data": {
        "answered_count": 8,
        "total_questions": 20,
        "progress_percentage": 40.0,
        "is_completed": false
    },
    "message": "Get successfully.",
    "success": true
}
```

## 返回参数说明
| 名称                | 类型    | 说明                           |
| ------------------- | ------- | ------------------------------ |
| answered_count      | number  | 已回答问题数                   |
| total_questions     | number  | 总问题数                       |
| progress_percentage | number  | 完成进度百分比（0-100）         |
| is_completed        | boolean | 是否已完成所有问题             |

## 使用场景
1. **展示进度条**：客户端可根据progress_percentage展示可视化的进度条
2. **检查完成状态**：通过is_completed判断是否可以生成报告
3. **提醒用户**：根据answered_count和total_questions提醒用户还有多少问题待回答
4. **进度统计**：实时显示答题进度，提升用户体验

## 注意事项
1. 此接口可以在任何时候调用，用于实时获取进度信息
2. 只有当is_completed为true时，才建议调用生成报告接口
3. progress_percentage为浮点数，计算公式为：(answered_count / total_questions) * 100
4. 建议在用户提交答案后调用此接口更新进度显示
5. 总问题数(total_questions)根据实际抽取的问题数量动态计算

## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    tag="health-check"
    type="get"
    path="/health-check/get-progress"
    version="v2"
  />
</ClientOnly>
