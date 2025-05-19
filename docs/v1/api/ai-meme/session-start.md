# AI宠物表情包生成服务

## 产品介绍
---
AI宠物表情包生成服务是一款基于人工智能技术的创新应用，专为宠物爱好者和宠物相关应用开发者设计。该服务能够自动识别上传的宠物图片（主要支持猫和狗），并根据宠物的姿态、表情等特征，生成有趣、个性化的表情包。系统会分析宠物图像，判断是否为猫狗类宠物，确保图片内容合规，并生成适合的文字描述，最终输出可用于社交媒体分享、即时通讯或应用内展示的宠物表情包。

## 使用场景
---
- **社交媒体分享**：用户可以将自己宠物的照片转换为有趣的表情包，在社交媒体上分享，增加互动性和趣味性
- **宠物社区应用**：宠物社区平台可集成此功能，让用户生成并分享宠物表情包，丰富社区内容
- **宠物医疗平台**：在宠物医疗咨询过程中，可用于缓解紧张情绪，增强用户体验
- **宠物电商平台**：作为营销工具，吸引用户上传宠物照片生成表情包，提高用户参与度
- **宠物纪念服务**：为宠物主人提供一种新的方式记录和纪念宠物的有趣瞬间

## 接口调用流程
---
1. 获取session_id
2. 调用AI表情包生成接口，上传宠物图片并获取生成结果

# 获取session_id开始流程说明文档
---
开发者需要按照如下步骤完成：
调用宠物表情包生成API前，都需要先获取session_id。

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/session-record/session-start?token=[ACCESS_TOKEN]`

## 请求参数：
```json
{
    "cost_type": 1, 
    "module_type": 6 
}
```


## 参数列表：

| 名称        | 类型   | 必填 | 说明              |
| ----------- | ------ | ---- | ----------------- |
| cost_type   | number | 是   | 消费类型，固定为1 |
| module_type | number | 是   | 模块类型，固定为6 |

## 返回结果：
```json
{
    "data": {
        "medical_record_id": 22786,
        "session_id": "689ddf5e-ebce-4504-92eb-b2885c9d138b"
    },
    "message": "Get successfully.",
    "success": true // 成功返回true，失败返回false
}
```

## 返回参数说明：
| 名称              | 类型   | 说明                                         |
| ----------------- | ------ | -------------------------------------------- |
| medical_record_id | number | 医疗记录ID                                   |
| session_id        | string | 会话ID, 用于管理会话上下文, 在后续的接口用上 |

## 接口调试：
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    tag="session"
    type="post"
    path="/session-record/session-start" 
  />
</ClientOnly>