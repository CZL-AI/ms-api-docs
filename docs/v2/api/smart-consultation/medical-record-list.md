
# 13、获取完整的报告列表 - 智能问诊模块

## 接口描述
---
该接口用于获取完整的报告列表。用户可以通过此接口查询已生成的报告的详细信息，包括回顾、诊断、建议等。

## 调用接口
**请求方式：** `POST（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/medical-record-list?token=[ACCESS_TOKEN]`

## 请求参数
```json
{
  "limit": 2,
  "module_type": [
   5
  ],
  "page":1,
  "pet_profile_id": [
   
  ],
  "report_type": "v2"
}
```

## 请求参数
### Body 参数（`application/json`）
| 名称         | 类型    | 必填 | 说明         |
|--------------|---------|------|--------------|
| `limit`      | `int`   | 是   | 每页数量     |
| `module_type`| `array` | 否   | 模块类型，例如 `[5]` 表示智能问诊模块 |
| `page`       | `int`   | 是   | 页码         |
| `pet_profile_id`| `array` | 否   | 宠物档案ID列表，例如 `[123, 456]` |
| `report_type`| `string`| 是   | 报告类型，目前固定为 `v2` |

**请求示例：**
```json
{
  "limit": 2,
  "module_type": [
   5
  ],
  "page":1,
  "pet_profile_id": [
   
  ],
  "report_type": "v2"
}
```

## 返回结果

根据 `module_type` 的不同，`pet_info` 字段的结构可能有所差异。

```json
// module_type为1时的返回示例
{
  "data": [
    {
      "created_at": "2025-03-27T10:34:51",
      "id": 66175,
      "is_paid": 0,
      "module_type": 1,
      "pet_info": {
        "avatar": null,
        "id": 36066,
        "name": null
      },
      "pet_profile_id": 36066,
      "report_info": {
        "content": "抓挠，可能皮肤病或寄生虫感染。",
        "img_url": null,
        "report_url": null,
        "title": "猫猫最近一直在抓挠自己，担心它可能有皮肤病或者是跳蚤问题。"
      },
      "report_time": null,
      "report_type": "v2",
      "session_id": "4b27d1a6-af40-4f66-bec7-56485e59e56d",
      "stage": "2-1",
      "status": 2,
      "sub_module_type": null,
      "summary": null,
      "updated_at": "2025-05-27T08:13:58"
    }
  ],
  "message": "Get successfully.",
  "success": true
}
```
```json
// module_type为5时的返回示例
{
  "data": [
    {
      "created_at": "2025-05-28T08:14:36",
      "id": 69884,
      "is_paid": 0,
      "module_type": 5,
      "pet_info": {},
      "pet_profile_id": 0,
      "report_info": {
        "content": "该猫咪具有短而卷曲的毛发，耳朵大且耳位高，体态匀称，这些特征与德文卷毛猫的标准特征相符。",
        "img_url": "https://video-upload-2025.oss-accelerate.aliyuncs.com/pic_reports/20250528/630e0e6addb142a7a569dc8e4930f258.jpeg",
        "report_url": null,
        "title": "德文卷毛猫"
      },
      "report_time": null,
      "report_type": "v2",
      "session_id": "b61bce24-b492-4d33-bb1d-2874af5008cc",
      "stage": null,
      "status": 2,
      "sub_module_type": "1",
      "summary": null,
      "updated_at": "2025-05-28T08:15:16"
    },
    {}
  ],
  "message": "Get successfully.",
  "success": true
}
```

## 返回参数说明
| 名称              | 类型    | 说明                                                                           |
|-------------------|---------|------------------------------------------------------------------------------|
| `created_at`      | `string`| 报告创建时间，格式为 ISO 8601                                                          |
| `id`              | `number`| 报告ID                                                                         |
| `is_paid`         | `number`| 是否已支付，`0`表示未支付，`1`表示已支付                                                      |
| `module_type`     | `number`| 模块类型，`1`表示智能问诊，`5`表示图片识别                                                     |
| `pet_info`        | `object`| 宠物信息对象。当 `module_type` 为 1 时，包含宠物ID、名称等字段；当 `module_type` 为 5 时，可能为空对象 `{}`。 |
| - `pet_id`        | `number`| 宠物ID (仅当 `pet_info` 非空时存在)                                                   |
| - `pet_name`      | `string`| 宠物名称 (仅当 `pet_info` 非空时存在)                                                   |
| - `pet_type`      | `string`| 宠物类型 (仅当 `pet_info` 非空时存在)                                                   |
| `pet_profile_id`  | `number`| 宠物档案ID                                                                       |
| `report_info`     | `object`| 报告详细信息对象，包含以下字段：                                                             |
| - `content`       | `string`| 报告列表粗略详细内容                                                                   |
| - `img_url`       | `string`| 报告相关图片URL（可能为`null`）                                                         |
| - `report_url`    | `string`| 报告URL（可能为`null`）                                                             |
| - `title`         | `string`| 报告列表标题信息                                                                     |
| `report_time`     | `string`| 报告生成时间，格式为 ISO 8601                                                          |
| `session_id`      | `string`| 会话ID，用于标识一次完整的问诊会话                                                           |
| `stage`           | `string`| 问诊阶段                                                                         |
| `status`          | `number`| 报告状态，`2`表示已完成                                                                |
| `sub_module_type` | `string`| 子模块类型，例如`1`表示常规问诊，`2`表示行为分析等                                                 |
| `summary`         | `string`| 问诊总结，包含宠物情况、初步诊断、重要建议、护理建议和复诊建议                                              |
| `updated_at`      | `string`| 报告更新时间，格式为 ISO 8601                                                          |
| `message`         | `string`| 返回信息描述，例如 `Get successfully.`                                                |
| `success`         | `boolean`| 是否成功，成功返回`true`，失败返回`false`                                                  |

## 报告内容详解
`report_info` 字段是一个对象，其 `content` 字段包含完整的问诊报告内容，该内容是一个 JSON 字符串。需要解析 `report_info.content` 字段的 JSON 字符串后才能获取详细内容，包括问诊回顾、诊断结果和治疗建议。

## 注意事项
1.  **报告解析**：`report_info.content` 字段是 JSON 字符串，需要进行解析（`JSON.parse()`）后才能获取详细内容。
2.  **报告内容**：完整的问诊报告内容包含问诊回顾、诊断结果和治疗建议，供用户参考。
3.  **报告保存**：用户可以保存或分享报告，以便后续查阅。
4.  **专业建议**：报告仅供参考，最终诊断和治疗建议请咨询专业兽医。

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
        