# 14、获取聊天记录 - 智能问诊/知识问答

## 接口描述
---
该接口用于获取指定会话的聊天记录，支持两种使用方式：

1. **兼容模式**：仅传 `session_id`，返回完整历史数组，兼容原有调用方式。
2. **分页模式**：传入 `page` 和/或 `limit`，返回 `history + pagination` 结构，适合会话详情页和聊天记录分页加载。

> 说明：
> - 当前接口要求调用方只能访问自己的会话。
> - 分页模式下会过滤 `stage = 8` 的系统过程消息。

## 调用接口
**请求方式：** `GET（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/session-record?token=[ACCESS_TOKEN]`

## 请求参数
### Query 参数
| 名称 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `session_id` | `string` | 是 | 会话 ID |
| `page` | `integer` | 否 | 页码，默认 `1`。传入后进入分页模式 |
| `limit` | `integer` | 否 | 每页条数，默认 `20` |

## 请求示例

### 1. 兼容模式
```bash
GET /api/v2.0/ai-b/session-record?token=xxx&session_id=7cc8c7e0-266f-4fb5-8bf9-cac62905a23d
```

### 2. 分页模式
```bash
GET /api/v2.0/ai-b/session-record?token=xxx&session_id=7cc8c7e0-266f-4fb5-8bf9-cac62905a23d&page=1&limit=20
```

## 返回结果

### 1. 兼容模式返回示例
```json
{
  "data": {
    "history": [
      {
        "role": "user",
        "content": "猫咪最近食欲下降",
        "image": null
      },
      {
        "role": "ai",
        "content": "这种情况持续多久了？",
        "image": null
      }
    ]
  },
  "message": "Get successfully.",
  "success": true
}
```

### 2. 分页模式返回示例
```json
{
  "data": {
    "history": [
      {
        "id": 10001,
        "role": "user",
        "content": "猫咪最近食欲下降",
        "stage": 1,
        "image": null,
        "content_type": 1,
        "evaluation": null,
        "created_at": "2026-04-08T15:03:11"
      },
      {
        "id": 10002,
        "role": "ai",
        "content": "这种情况持续多久了？",
        "stage": 3,
        "image": null,
        "content_type": 1,
        "evaluation": null,
        "created_at": "2026-04-08T15:03:13"
      }
    ],
    "pagination": {
      "total_count": 32,
      "page": 1,
      "limit": 20,
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

### `data.history[]`
| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `id` | `integer` | 消息记录 ID，仅分页模式返回 |
| `role` | `string` | 消息角色，常见值：`user`、`ai` / `assistant` |
| `content` | `string` | 文本内容；若为图片消息，系统会返回可读文本描述 |
| `stage` | `integer` | 问诊阶段，仅分页模式返回 |
| `image` | `string / null` | 图片地址，纯文本消息时为 `null` |
| `content_type` | `integer` | 内容类型：`1`-文本，`2`-图文，仅分页模式返回 |
| `evaluation` | `integer / null` | 用户评价状态，仅分页模式返回 |
| `created_at` | `string` | 消息创建时间，仅分页模式返回 |

### `data.pagination`
| 名称 | 类型 | 说明 |
| --- | --- | --- |
| `total_count` | `integer` | 当前会话总消息数 |
| `page` | `integer` | 当前页码 |
| `limit` | `integer` | 每页数量 |
| `total_pages` | `integer` | 总页数 |
| `has_next` | `boolean` | 是否存在下一页 |
| `has_prev` | `boolean` | 是否存在上一页 |

## 注意事项
1. **推荐前端使用分页模式**：当会话记录较长时，建议始终传 `page` 和 `limit`。
2. **权限限制**：只能查询当前登录用户自己的会话，否则会返回“该会话不存在或无权访问”。
3. **历史兼容**：不传 `page/limit` 时，返回结构保持兼容旧调用方式。
4. **消息顺序**：返回结果按消息创建顺序升序排列，便于前端直接渲染。

## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    tag="session"
    type="get"
    path="/session-record"
    version="v2"
  />
</ClientOnly>
