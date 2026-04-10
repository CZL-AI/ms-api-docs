# 养宠百科-相关问题推荐

## 接口说明
---
开发者在获取 AI 问答结果后，可调用本接口获取与当前问题相关的推荐问题列表，帮助用户进一步探索相关养宠知识。

> 备注：
> - 中文版使用：`https://ms-ai.chongzhiling.com/api/v1.0/ai-b/...`
> - 英文版使用：`https://ms-ai-cn.chongzhiling.com/api/v1.0/ai-en/...`
> - 代码仓库 `ms-ai-b` 中已注册 `user-en.yaml`，该接口支持 `ai-en` 英文入口

## 调用接口：
**请求方式：** `POST（HTTPS）`
**中文请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/ai-conv/relation?token=[ACCESS_TOKEN]`
**英文请求地址：** `https://ms-ai-cn.chongzhiling.com/api/v1.0/ai-en/ai-conv/relation?token=[ACCESS_TOKEN]`

## 请求参数：
```json
{
    "session_id": "689ddf5e-ebce-4504-92eb-b2885c9d138b",
    "user_input": "金毛犬每天需要喂食几次？"
}
```

## 参数列表：
### Query 参数
| 名称    | 类型   | 必填 | 说明                   |
| ------- | ------ | ---- | ---------------------- |
| token   | string | 是   | 登录凭证，用于身份验证 |

### Body 参数（`application/json`）
| 名称        | 类型   | 必填 | 说明                                     |
| ----------- | ------ | ---- | ---------------------------------------- |
| session_id  | string | 是   | 会话ID，通过开始会话接口获取             |
| user_input  | string | 是   | 用户当前的问题内容，用于生成相关推荐问题 |

## 返回结果：
```json
{
    "data": {
        "options": [
            "如果我按照您说的做了降温，但是宠物的情况没有好转，或者症状反而加重了，我应该立即带它去看兽医吗？",
            "您提到要测量直肠温度，请问在家应该怎么安全、准确地给宠物测量体温呢？",
            "宠物经过降温后，如果看起来好转了，我还需要注意些什么？有没有什么后续的观察重点或者护理建议？"
        ]
    },
    "message": "Get successfully.",
    "success": true // 成功返回true，失败返回false
}
```

## 返回参数说明：
| 名称          | 类型     | 说明                         |
| ------------- | -------- | ---------------------------- |
| options       | string[] | 相关推荐问题列表             |

## 注意事项：
1. **调用时机**：建议在 answer 接口返回完成后再调用本接口，以确保推荐问题与回答内容相关
2. **结果使用**：可将 options 数组中的问题以快捷按钮形式展示给用户，方便用户一键追问

## 接口调试：
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    tag="ai-conv"
    type="post"
    path="/ai-conv/relation"
  />
</ClientOnly>
