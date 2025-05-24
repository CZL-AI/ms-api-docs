# 9、获取图片结果 - 智能问诊模块

## 接口描述
---
该接口用于获取用户上传宠物图片的识别与分析结果。系统会对提供的图片进行图像识别与健康评估，并将分析结论返回至后续问诊流程中。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/aidoc/pic-result?token=[ACCESS_TOKEN]`

## 请求参数
```json
{
    "img_url": "https://angular00001.oss-cn-beijing.aliyuncs.com/2024-08-16/dog66.jpg",
    "pet_profile_id": 3147,
    "session_id": "c139a49a-ca34-472d-9749-6cd976cbb937"
}
```

## 参数列表
### Body 参数（`application/json`）
| 名称            | 类型   | 必填 | 说明                  |
| --------------- | ------ | ---- | --------------------- |
| img_url         | string | 是   | 图片访问 URL 地址    |
| pet_profile_id  | number | 是   | 宠物档案 ID，用于绑定宠物信息             |
| session_id      | string | 是   | 话唯一标识，用于维持上下文状态 |

## 返回结果
```json
{
    "data": null,
    "message": "Get successfully.",
    "success": true
}
```

## 返回参数说明
| 名称              | 类型   | 说明                                         |
|-------------------|--------|----------------------------------------------|
| data              | null   | 当前接口无实际数据返回，固定为 `null`        |
| message           | string | 返回信息描述                                 |
| success           | boolean| 是否成功，成功返回 `true`，失败返回 `false`       |

## 使用场景说明

该接口通常在以下情况下被调用：

- 用户上传宠物相关图片后；
- 系统需对该图片进行 AI 分析；
- 分析结果将用于辅助诊断、症状识别或推荐检查项目。

---

## 注意事项
1. **图片格式要求**：请确保上传的图片清晰且符合分析要求。
2. **分析时间**：图片分析可能需要一定时间，请耐心等待结果返回。
3. **结果处理**：该接口仅表示图片已成功提交分析，具体分析结果将在后续的问诊流程中体现。
4. **结果解读**：分析结果仅供参考，最终诊断建议咨询专业兽医。

## 接口调试
---
<script setup>  
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'  
</script>  

<ClientOnly>  
  <SwaggerUI   
    tag="pic-result"   
    type="post"   
    path="/aidoc/pic-result"  
    version="v2" 
  />  
</ClientOnly>  



