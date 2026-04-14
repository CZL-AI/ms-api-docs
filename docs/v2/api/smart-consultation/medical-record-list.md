# 13、获取完整的报告列表

## 接口描述
---
该接口用于按用户维度分页查询已生成的医疗报告列表，适用于报告中心、历史记录页和按宠物档案筛选的报告列表场景。

接口是**通用报告列表接口**，不是智能问诊专属接口。当前常见的 `module_type` 包括：

- `1`：智能问诊
- `12`：视频行为分析
- `5`：图片识别
- `19`：宠物档案建议

## 调用接口
**请求方式：** `POST（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/medical-record-list`

**请求头：**

```http
Authorization: Bearer [ACCESS_TOKEN]
Content-Type: application/json
```

## 请求参数
### Body 参数（`application/json`）
| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `limit` | `int` | 是 | 每页数量 |
| `module_type` | `array[int]` | 否 | 模块类型列表，例如 `[1]`、`[12]`、`[19]` |
| `sub_module_type` | `array[int]` | 否 | 子模块类型列表。`module_type=19` 时，`1`-喂养建议，`2`-养成建议 |
| `page` | `int` | 是 | 页码 |
| `pet_profile_id` | `array[int]` | 否 | 宠物档案 ID 列表，例如 `[123, 456]` |

**请求示例：**
```json
{
  "limit": 10,
  "module_type": [19],
  "sub_module_type": [1, 2],
  "page": 1,
  "pet_profile_id": [44727]
}
```

## 返回结果

### 示例 1：`module_type=1`（智能问诊）
```json
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

### 示例 2：`module_type=19`（宠物档案建议）
```json
{
  "data": [
    {
      "created_at": "2026-04-09T02:54:38",
      "id": 122480,
      "is_paid": 0,
      "module_type": 19,
      "pet_info": {},
      "pet_profile_id": 44727,
      "report_info": {
        "content": "每日推荐喂食量 220g",
        "img_url": null,
        "report_url": null,
        "title": "低脂减肥粮，控制热量，增加运动"
      },
      "report_time": "2026-04-09T02:54:38",
      "report_type": "v2",
      "session_id": "b5cf8a6b-1bd7-4aa9-869b-9d805aeddb20",
      "stage": null,
      "status": 2,
      "sub_module_type": "1",
      "summary": null,
      "updated_at": "2026-04-09T02:54:38"
    }
  ],
  "message": "Get successfully.",
  "success": true
}
```

## 返回参数说明
| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `created_at` | `string` | 报告创建时间，ISO 8601 格式 |
| `id` | `number` | 报告 ID |
| `is_paid` | `number` | 是否已支付，`0` 表示未支付，`1` 表示已支付 |
| `module_type` | `number` | 模块类型，例如 `1`-智能问诊、`12`-视频行为分析、`5`-图片识别、`19`-宠物档案建议 |
| `pet_info` | `object` | 宠物信息对象。部分模块可能为空对象 `{}` |
| `pet_profile_id` | `number` | 宠物档案 ID |
| `report_info` | `object` | 报告摘要信息对象 |
| `report_info.content` | `string` | 报告列表摘要内容 |
| `report_info.img_url` | `string` | 报告相关图片 URL，可能为 `null` |
| `report_info.report_url` | `string` | 报告 URL，可能为 `null` |
| `report_info.title` | `string` | 报告列表标题 |
| `report_time` | `string` | 报告生成时间，ISO 8601 格式 |
| `session_id` | `string` | 会话 ID |
| `stage` | `string / null` | 流程阶段，不同模块可能为空 |
| `status` | `number` | 流程状态 |
| `sub_module_type` | `string / null` | 子模块类型。`module_type=19` 时，`1`-喂养建议，`2`-养成建议 |
| `summary` | `string / null` | 报告总结，部分模块可能为空 |
| `updated_at` | `string` | 报告更新时间，ISO 8601 格式 |
| `message` | `string` | 返回信息描述，例如 `Get successfully.` |
| `success` | `boolean` | 是否成功，成功返回 `true`，失败返回 `false` |

## 使用说明
1. 该接口返回的是**报告列表摘要**，适合报告中心或历史记录页，不等同于完整报告内容。
2. `report_info.title` 和 `report_info.content` 的语义会随 `module_type` 变化：
   智能问诊通常返回问诊主题和摘要；视频分析通常返回行为标题和分析摘要；宠物档案建议通常返回建议标题和建议摘要。
3. 如需查看单条完整报告内容，可继续调用 [`/medical-record`](./medical-record.md)。
4. 宠物档案建议模块也提供了更明确的专用接口：
   列表推荐使用 [`/pet-profile/advice-records`](../pet-profile-advice/advice-records.md)，详情推荐使用 [`/pet-profile/advice-record`](../pet-profile-advice/advice-record.md)。

## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>
<ClientOnly>
  <SwaggerUI
    tag="medical-record-list"
    type="post"
    path="/medical-record-list"
    version="v2"
  />
</ClientOnly>
