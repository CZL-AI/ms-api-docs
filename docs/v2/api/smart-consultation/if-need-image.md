# 7、是否需要上传图片 - 智能问诊模块

## 接口描述
---
该接口用于判断当前智能问诊流程是否需要用户上传图片。系统会根据已收集的宠物健康信息，决定是否需要用户提供图像资料以辅助诊断。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/aidoc/if-need-image?token=[ACCESS_TOKEN]`

> 
## 请求参数
```json
{
    "pet_profile_id": 3147,
    "session_id": "7cc8c7e0-266f-4fb5-8bf9-cac62905a23d"
}
```

## 请求参数
### Body 参数（`application/json`）
| 名称             | 类型   | 必填 | 说明                             |
|------------------|--------|------|----------------------------------|
| pet_profile_id   | number | 是   | 宠物档案 ID，用于识别宠物信息     |
| session_id       | string | 是   | 会话唯一标识，用于维持上下文状态 |

### 示例请求体


## 返回结果
```json
{
    "data": {
        "is_pic": "True",
        "pic_explain": "请提供一张狗狗眼睛的特写照片，重点是分泌物区域，并且清晰显示眼睛周围的皮肤状况。这有助于判断是否是结膜炎或者其他感染。请确保照片清晰，光线充足，能清楚地看到眼睛分泌物的情况。"
    },
    "message": "Get successfully.",
    "success": true
}
```

## 返回字段说明

| 名称              | 类型    | 说明                                             |
|-------------------|---------|--------------------------------------------------|
| data              | object  | 返回数据对象                                     |
| is_pic            | boolean | 是否需要上传图片，`true` 表示需要，`false` 表示不需要 |
| pic_explain       | string  | 需要上传图片的原因及具体要求                     |
| message           | string  | 接口执行结果描述                                 |
| success           | boolean | 是否成功，成功返回 `true`，失败返回 `false`      |


## 使用场景说明

该接口通常在以下情况下被调用：

- 用户回答不足以支持明确诊断；
- 系统认为图像信息可以提高诊断准确率；
- 问诊流程进入需视觉辅助判断阶段（如皮肤病、眼部疾病等）。
- 
## 注意事项

1. **权限控制**：本接口依赖于 `token` 认证，请确保请求时携带有效 token。
2. **响应处理**：
   - 若 `is_pic` 为 `true`，应引导用户上传图片；
   - 若为 `false`，则继续后续问诊流程或生成报告。
3. **图片要求提示**：可通过 `pic_explain` 字段内容向用户展示具体上传要求。

---


## 接口调试
---
<script setup>  
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'  
</script>  

<ClientOnly>  
  <SwaggerUI   
    tag="if-need-image"   
    type="post"   
    path="/aidoc/if-need-image"
    version="v2"   
  />  
</ClientOnly>


