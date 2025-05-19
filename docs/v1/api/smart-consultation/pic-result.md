# 7、获取图片结果 - 智能问诊模块

## 接口描述
---
该接口用于获取上传图片的分析结果。系统会对用户上传的图片进行分析，并返回相关的诊断信息或建议，帮助用户更好地理解宠物的健康状况。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/aidoc/pic-result?token=[ACCESS_TOKEN]`

## 请求参数
```json
{
    "img_url": "https://angular00001.oss-cn-beijing.aliyuncs.com/2024-08-16/dog66.jpg",
    "pet_profile_id": 0,
    "session_id": "c139a49a-ca34-472d-9749-6cd976cbb937"
}
```

## 参数列表

| 名称            | 类型   | 必填 | 说明                  |
| --------------- | ------ | ---- | --------------------- |
| img_url         | string | 是   | 上传图片的访问地址    |
| pet_profile_id  | number | 是   | 宠物档案ID            |
| session_id      | string | 是   | 会话ID，用于管理会话上下文 |

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
| data              | null   | 返回数据，图片分析结果处理完成后为null        |
| message           | string | 返回信息描述                                 |
| success           | boolean| 是否成功，成功返回true，失败返回false        |

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
  />  
</ClientOnly>  



