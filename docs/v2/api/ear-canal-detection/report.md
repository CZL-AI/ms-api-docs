# 生成识别报告说明文档
---
开发者需要按照如下步骤完成：
获取识别结果接口后，开发者可以调用生成识别报告接口，获取识别报告。

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/aipic/report?token=[ACCESS_TOKEN]`

## 请求参数：
```json
{
    "session_id": "689ddf5e-ebce-4504-92eb-b2885c9d138b",
    "img_url": "https://angular00001.oss-cn-beijing.aliyuncs.com/applet.png",
    "pet_profile_id": 0,
    "sub_module_type": 7
}
```


## 参数列表：

| 名称            | 类型   | 必填 | 说明                                               |
| --------------- | ------ | ---- | -------------------------------------------------- |
| img_url         | string | 是   | 识别宠物图片地址（需提供一张能正常访问的图片地址） |
| sub_module_type | number | 是   | 子模块类型，固定为7                                |
| pet_profile_id  | number | 是   | 宠物档案ID                                         |
| session_id      | string | 是   | 会话ID                                             |

## 返回结果：
```json
 {
    "data": null,
    "message": "Get successfully.",
    "success": true // 成功返回true，失败返回false
}
```

## 返回参数说明：
成功即可，无需分析使用数据。

## 接口调试：
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    tag="aipic"
    type="post"
    path="/aipic/report" 
  />
</ClientOnly>