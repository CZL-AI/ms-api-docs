# 13、获取完整的报告列表 - 智能问诊模块

## 接口描述
---
该接口用于获取完整的报告列表。用户可以通过此接口查询已生成的报告的详细信息，包括回顾、诊断、建议等。

## 调用接口
**请求方式：** `GET（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/medical-record-list?token=[ACCESS_TOKEN]

## 请求参数

| 名称      | 类型    | 必填 | 说明     |
| --------- |-------|----|--------|
| pet_profile_id     | array | 否  | 宠物档案id |
| page | int   | 是  | 页码     |
| limit | int   | 是  | 每页数量   |
| module_type | array   | 否  | 模块类型   |


## 返回结果
```json
{
  "data": [
    {
      "created_at": "2025-01-13T09:40:32",
      "id": 76749,
      "is_paid": 0,
      "is_plan": 0,
      "module_type": 1,
      "pet_info": {},
      "pet_profile_id": 0,
      "report_info": {
        "content": "根据历史问诊记录，症状为：内容是string，需要进一步分析。",
        "img_url": null,
        "report_url": null,
        "title": "客户描述了一系列问题，具体内容为 string。"
      },
      "report_status": 2,
      "report_time": "2025-01-13T09:42:44",
      "session_id": "11cd8c71-4322-4d3e-bf5c-128a09e0aa48",
      "stage": null,
      "status": 2,
      "sub_module_type": "0",
      "summary": null,
      "updated_at": "2025-01-13T17:39:35"
    },
    {
      "created_at": "2025-01-13T09:05:53",
      "id": 76745,
      "is_paid": 0,
      "is_plan": 0,
      "module_type": 1,
      "pet_info": {},
      "pet_profile_id": 0,
      "report_info": {
        "content": "客户描述内容，暂无明显疾病特征",
        "img_url": null,
        "report_url": null,
        "title": "string"
      },
      "report_status": 2,
      "report_time": "2025-01-13T09:15:13",
      "session_id": "8ce42c2b-a024-4110-b109-4e75ac2e2010",
      "stage": null,
      "status": 2,
      "sub_module_type": "0",
      "summary": null,
      "updated_at": "2025-01-13T17:02:39"
    }
  ],
  "error_code": 0,
  "message": "Get successfully.",
  "success": true
}
```

## 返回参数说明
| 名称              | 类型   | 说明                                         |
|-------------------|--------|----------------------------------------------|
| created_at        | string | 报告创建时间，格式为 ISO 8601                 |
| id                | number | 报告ID                                       |
| module_type       | number | 模块类型，5表示智能问诊模块                   |
| pet_profile_id    | number | 宠物档案ID                                   |
| report_info       | object | 报告详细信息对象，包含以下字段：                 |
| - content         | string | 报告详细内容（JSON字符串）                     |
| - img_url         | string | 报告相关图片URL（可能为null）                  |
| - report_url      | string | 报告URL（可能为null）                          |
| - title           | string | 报告标题                                     |
| report_time       | string | 报告生成时间，格式为 ISO 8601                 |
| session_id        | string | 会话ID                                       |
| status            | number | 报告状态，2表示已完成                         |
| sub_module_type   | string | 子模块类型，1表示常规问诊                     |
| summary           | string | 问诊总结，包含宠物情况、初步诊断、重要建议、护理建议和复诊建议 |
| updated_at        | string | 报告更新时间，格式为 ISO 8601                 |
| message           | string | 返回信息描述                                 |
| success           | boolean| 是否成功，成功返回true，失败返回false         |

## 报告内容详解
`report_info` 字段是一个对象，其 `content` 字段包含完整的问诊报告内容，该内容是一个 JSON 字符串。需要解析 `report_info.content` 字段的 JSON 字符串后才能获取详细内容。

## 注意事项
1. **报告解析**：`report_info.content` 字段是 JSON 字符串，需要解析后才能获取详细内容。
2. **报告内容**：完整的问诊报告内容包含问诊回顾、诊断结果和治疗建议，供用户参考。
3. **报告保存**：用户可以保存或分享报告，以便后续查阅。
4. **专业建议**：报告仅供参考，最终诊断和治疗建议请咨询专业兽医。
## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>
<ClientOnly>
  <SwaggerUI
    tag="medical-record-list"
    type="get"
    path="/medical-record-list"
    version="v2"
  />
</ClientOnly>