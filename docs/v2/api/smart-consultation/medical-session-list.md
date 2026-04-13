# 15、获取历史会话列表 - 智能问诊/知识问答

## 接口描述
---
该接口用于获取当前登录用户的历史会话列表，适用于：

- 智能问诊历史入口页
- 知识问答历史入口页
- 最近会话列表
- 按宠物档案筛选的历史会话列表

接口返回的是**会话维度的摘要信息**，不是完整消息内容。如需查看某个会话的聊天详情，请继续调用 [`/session-record`](./get-history.md)。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/medical-session-list`

**请求头：**

```http
Authorization: Bearer [ACCESS_TOKEN]
Content-Type: application/json
```

## 请求参数
### Body 参数（`application/json`）
| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `page` | `integer` | 否 | 页码，默认 `1` |
| `limit` | `integer` | 否 | 每页数量，默认 `10` |
| `module_type` | `array[integer]` | 否 | 模块类型列表，默认 `[1, 4]`，其中 `1`-智能问诊，`4`-知识问答 |
| `pet_profile_id` | `array[integer]` | 否 | 宠物档案 ID 列表，用于按宠物过滤 |

## 请求示例
```json
{
  "page": 1,
  "limit": 10,
  "module_type": [1, 4],
  "pet_profile_id": [3147]
}
```

## 返回结果
```json
{
  "data": {
    "list": [
      {
        "medical_record_id": 81021,
        "session_id": "d7d6f0f1-59a8-4a9b-bb83-b6ff9a6629f0",
        "module_type": 1,
        "pet_profile_id": 3147,
        "sub_module_type": null,
        "status": 2,
        "report_status": 2,
        "title": "猫咪最近食欲下降",
        "last_message": "建议继续观察精神状态和饮水情况。",
        "last_role": "ai",
        "message_count": 8,
        "latest_time": "2026-04-08T15:03:13",
        "created_at": "2026-04-08T15:03:10",
        "updated_at": "2026-04-08T15:20:48"
      }
    ],
    "pagination": {
      "total_count": 18,
      "page": 1,
      "limit": 10,
      "total_pages": 2,
      "has_next": true,
      "has_prev": false
    }
  },
  "message": "Get successfully.",
  "success": true
}
```

## 返回参数说明

### `data.list[]`
| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `medical_record_id` | `integer` | 医疗记录 ID，可用于后续查询报告详情 |
| `session_id` | `string` | 会话 ID |
| `module_type` | `integer` | 模块类型：`1`-智能问诊，`4`-知识问答 |
| `pet_profile_id` | `integer` | 宠物档案 ID |
| `sub_module_type` | `string / null` | 子模块类型 |
| `status` | `integer` | 会话状态 |
| `report_status` | `integer` | 报告状态：`0`-未生成，`1`-生成中，`2`-已完成，`3`-生成失败 |
| `title` | `string` | 会话标题，优先取首条用户消息 |
| `last_message` | `string` | 最后一条消息内容 |
| `last_role` | `string / null` | 最后一条消息角色 |
| `message_count` | `integer` | 当前会话消息总数 |
| `latest_time` | `string` | 会话最近活跃时间 |
| `created_at` | `string` | 医疗记录创建时间 |
| `updated_at` | `string` | 医疗记录更新时间 |

### `data.pagination`
| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `total_count` | `integer` | 总会话数 |
| `page` | `integer` | 当前页码 |
| `limit` | `integer` | 每页数量 |
| `total_pages` | `integer` | 总页数 |
| `has_next` | `boolean` | 是否存在下一页 |
| `has_prev` | `boolean` | 是否存在上一页 |

## 使用说明
1. **默认范围**：不传 `module_type` 时，只返回智能问诊和知识问答两类会话。
2. **排序规则**：按最近一条有效消息时间倒序返回。
3. **标题生成规则**：优先取首条用户消息作为会话标题；若没有首条用户消息，则回退到最后一条消息内容。
4. **明细查看**：会话列表只返回摘要，如需完整聊天内容，请再调用 [`/session-record`](./get-history.md)。

## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    tag="medical-record"
    type="post"
    path="/medical-session-list"
    version="v2"
  />
</ClientOnly>
