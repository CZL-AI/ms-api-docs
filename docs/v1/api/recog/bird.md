# AI北美鸟类识别服务

## 产品介绍
---
AI鸟类识别服务是一款基于宠智灵模型开发的专业鸟类识别工具，专为鸟类爱好者、自然保护工作者、生态研究人员和教育机构设计。该服务能够通过分析上传的鸟类图像，自动识别鸟类的种类，并提供详细的分类信息、生态习性、分布区域等专业数据。系统对上传的鸟类图片进行精准分析，能够识别数千种不同的鸟类，并提供高置信度的识别结果。无论是常见鸟类还是稀有品种，系统都能提供准确的识别和丰富的相关信息，帮助用户深入了解鸟类世界的多样性。

可识别一张图中的多只鸟类（最多5只），支持多种图片格式（如jpg、png等），并提供详细的鸟类信息，包括分类学信息、分布区域、生态习性等。该服务旨在促进鸟类观察、生态研究和自然教育，助力鸟类保护和生态平衡。


## 使用场景
---
- **鸟类观察与记录**：鸟类爱好者可以通过拍摄鸟类照片，快速识别不熟悉的鸟种，记录观察成果
- **生态调查与研究**：生态学家和研究人员可利用该服务进行鸟类多样性调查，收集区域鸟类数据
- **自然教育与科普**：教育机构可将此服务用于自然科学教育，帮助学生认识和了解不同鸟类
- **野生动物保护**：保护组织可通过识别稀有或濒危鸟类，制定针对性的保护策略
- **旅游与户外活动**：旅行者和户外爱好者可在野外活动中识别遇到的鸟类，丰富旅行体验

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/recognition/identifying_birds_v3?token=[ACCESS_TOKEN]`

**::注意事项::**
该域名`ms-ai.chongzhiling.com` 会根据请求的地域进行动态的分发请求服务，如果测试环境在国内请使用`ms-ai-abroad.chongzhiling.com`。


## **参数列表2：**[multipart/form-data]
| 参数  | 类型 | 含义                   |
| ----- | ---- | ---------------------- |
| image_url | string | 图片URL |
| image | `file` | 上传的文件【jpg, png】 |
| conf | float | 置信度 |
| lang | string | 语言[zh en ja ko]

> `image` 参数选择一个即可，优先使用`image_url`

> `lang` 语言
```
zh 简体中文
en 英文
ja 日文
ko 韩文
```

## 返回结果

```json
{
  "success": true,
  "message": "Get successfully.",
  "data": {
    "image_size": [
      474,
      355
    ],
    "detection_count": 1,
    "detections": [
      {
        "confidence": 0.9786,
        "pos": {
          "xmin": 321,
          "ymin": 53,
          "xmax": 473,
          "ymax": 274
        },
        "bird_info": {
          "A_order": "Passeriformes",
          "B_family": "Thraupidae",
          "C_genus": "Ramphocelus",
          "D_species": "flammigerus",
          "E_common_name": "Flame-rumped Tanager",
          "F_scientific_name": "Ramphocelus flammigerus",
          "G_distribution": "Pacific slope of Colombia and western Ecuador.",
          "H_rarity": "Level 5: General (Population numbers are small, distribution area is limited).",
          "I_description": "The Flame-rumped Tanager is a medium-sized songbird, measuring about 17-18 cm in length. The male is strikingly colored, with a black head, back, wings, and tail, a brilliant orange-red rump, and a red breast. The female has a duller plumage with dark brown-grey upperparts and a yellowish-orange breast and rump. They are typically found in pairs or small family groups, foraging for insects and fruits in the mid to upper levels of the forest canopy. They are known to be relatively active and vocal, using a variety of calls to communicate.",
          "J_identification_reason": "The male's brilliant orange-red rump and red breast, combined with the black body, are distinctive and easily identifiable. The female is identified by her duller plumage and yellowish-orange rump.",
          "K_features": "Male: Black body, bright orange-red rump, red breast. Female: Dull brown-grey upperparts, yellowish-orange breast and rump.",
          "L_vocal_characteristics": "Their vocalizations include a variety of chirps, trills, and short musical phrases. They often use a sharp 'tsip' call, especially when alarmed, and males may produce more elaborate songs during the breeding season.",
          "M_habitat": "Humid forests and forest edges, often found in secondary growth and along stream sides.",
          "N_north_america_occurrence": false
        }
      }
    ]
  }
}
```

## 返回参数说明

| 字段名             | 类型     | 说明                                                                 |
|--------------------|----------|----------------------------------------------------------------------|
| `success`             | boolean      | 响应状态码，true 表示请求成功                                       |
| `message`          | string   | 响应描述                                                            |
| `data`             | object   | 包含识别结果的数据对象                                              |
| └─`image_size`     | array    | 图像尺寸，格式为 `[width, height]`                                  |
| └─`detection_count`| int      | 检测到的鸟类数量                                                   |
| └─`detections`     | array    | 检测到的每只鸟的信息列表                                          |

### `detections` 数组中每个元素包含以下字段：

| 字段名               | 类型     | 说明                                                                    |
|----------------------|----------|-------------------------------------------------------------------------|
| `confidence`         | float    | 识别置信度（范围：0~1）                                               |
| `pos`                | object   | 鸟类在图像中的位置坐标框                                             |
| └─`xmin`            | int      | 左上角 x 坐标                                                         |
| └─`ymin`            | int      | 左上角 y 坐标                                                         |
| └─`xmax`            | int      | 右下角 x 坐标                                                         |
| └─`ymax`            | int      | 右下角 y 坐标                                                         |
| `bird_info`          | object   | 鸟类详细信息                                                          |
| └─`A_order`         | string   | 分类目                                                                  |
| └─`B_family`        | string   | 分类科                                                                  |
| └─`C_genus`         | string   | 分类属                                                                  |
| └─`D_species`       | string   | 分类种                                                                  |
| └─`E_common_name`   | string   | 常见英文名                                                             |
| └─`F_scientific_name`| string  | 科学名称                                                               |
| └─`G_distribution`  | string   | 地理分布区域                                                           |
| └─`H_rarity`        | string   | 稀有程度（分为10级，从“极常见”到“极濒危”）                          |
| └─`I_description`   | string   | 对鸟类的专业描述                                                       |
| └─`J_identification_reason` | string | 识别该鸟类的主要原因                                               |
| └─`K_features`      | string   | 鸟类的显著特征                                                        |
| └─`L_vocal_characteristics` | string | 鸟类的叫声特征                                                     |
| └─`M_habitat`       | string   | 主要栖息地类型                                                         |
| └─`N_north_america_occurrence` | boolean | 是否常见于北美地区                                         |


## 接口调试：
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    tag="recognition"
    type="post"
    path="/recognition/identifying_birds_v3" 
  />
</ClientOnly>
