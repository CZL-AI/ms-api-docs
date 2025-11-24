# 5、生成健康检查报告 - 健康检查模块

## 接口描述
---
该接口用于在用户完成所有健康检查问题后，触发生成健康检查报告。报告生成为异步任务，调用后系统会在后台处理并生成完整的健康评估报告。

## 调用接口
**请求方式：** `POST（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/ai-health-check/report?token=[ACCESS_TOKEN]`

## 请求参数
### Body 参数（`application/json`）
| 名称            | 类型   | 必填 | 说明                           |
| --------------- | ------ | ---- | ------------------------------ |
| session_id      | string | 是   | 会话ID，用于标识本次健康检查流程 |
| pet_profile_id  | number | 否   | 宠物档案ID，关联宠物信息        |

**请求示例：**
```json
{
    "session_id": "689ddf5e-ebce-4504-92eb-b2885c9d138b",
    "pet_profile_id": 123
}
```

## 返回结果
```json
{
    "data": null,
    "message": "Get successfully.",
    "success": true
}
```

## 返回参数说明
| 名称    | 类型    | 说明                           |
| ------- | ------- | ------------------------------ |
| success | boolean | 任务提交是否成功                |
| message | string  | 返回信息描述                   |

## 报告生成流程
1. 调用本接口提交报告生成请求
2. 系统会将任务放入消息队列异步处理，并立即返回成功响应
3. 后台异步处理：AI根据用户的健康检查答案生成综合健康评估报告
4. **客户端需要轮询查询报告状态**：
   - 调用 `/medical-record` 接口，传入 `report_id`（即medical_record_id）
   - 检查返回的 `report_status` 字段
   - `report_status` 为 0：报告生成中
   - `report_status` 为 2：报告生成完成
   - 建议每隔 3-5 秒轮询一次
   - 建议设置超时时间（如2分钟），避免无限等待

## 轮询示例代码
```javascript
// 轮询获取报告状态
async function pollReportStatus(reportId, maxAttempts = 40, interval = 3000) {
  for (let i = 0; i < maxAttempts; i++) {
    const response = await fetch(`/api/v2.0/ai-b/medical-record?report_id=${reportId}`);
    const data = await response.json();

    if (data.data.report_status === 2) {
      console.log('报告生成完成');
      return data.data; // 返回完整报告数据
    }

    console.log(`报告生成中，第 ${i + 1} 次查询...`);
    await new Promise(resolve => setTimeout(resolve, interval));
  }

  throw new Error('报告生成超时');
}

// 使用示例
try {
  const report = await pollReportStatus(medicalRecordId);
  console.log('报告内容:', report);
} catch (error) {
  console.error('获取报告失败:', error);
}
```

## 报告内容包括
- **健康综合评分**：基于四个维度的综合健康评分
- **分项评估**：饮食、活动、环境、生活习惯各维度的单独评估
- **健康风险提示**：根据答案识别出的潜在健康风险
- **改善建议**：针对性的健康改善建议
- **复查建议**：是否需要进一步检查的建议

## 注意事项
1. **调用时机**：建议在所有问题回答完成后再调用此接口
2. **异步处理**：报告生成为异步任务，调用成功后需等待一段时间（通常1-2分钟）
3. **保存medical_record_id**：调用 `/ai-health-check/questions` 接口时会返回 `medical_record_id`，需要保存此ID用于后续轮询报告状态
4. **轮询查询**：调用本接口后，必须通过轮询 `/medical-record` 接口来查询报告生成状态
5. **状态判断**：只有当 `report_status = 2` 时，报告才真正生成完成
6. **进度确认**：可通过get-progress接口确认所有问题已回答完毕（is_completed=true）
7. **报告获取**：报告生成后，通过 `/medical-record?report_id={medical_record_id}` 接口获取报告内容
8. **重复调用**：重复调用此接口会触发重新生成报告，会覆盖之前的报告

## 获取报告结果
报告生成完成后，可通过以下方式获取报告：
- **获取报告列表**：调用`/medical-record-list`接口，通过session_id筛选
- **获取报告详情**：调用`/medical-record`接口获取完整报告内容

## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    tag="health-check"
    type="post"
    path="/health-check/generate-report"
    version="v2"
  />
</ClientOnly>
