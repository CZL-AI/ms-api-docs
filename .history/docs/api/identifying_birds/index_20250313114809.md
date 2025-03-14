# 获取识别报告说明文档
---
用于检测鸟类的品种及相关信息

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/recognition/identifying_birds`

## 请求参数：
```json
{
  "img_url": "https://angular00001.oss-cn-beijing.aliyuncs.com/applet.png"
}
```


## 参数列表：

| 名称    | 类型   | 必填 | 说明                                           |
| ------- | ------ | ---- | ---------------------------------------------- |
| img_url | string | 是   | 识别图片地址（需提供一张能正常访问的图片地址） |

## 返回结果：
```json
{
    "data": {
        "A_order": "雀形目",
        "B_family": "椋鸟科",
        "C_genus": "八哥属",
        "D_species": "家八哥",
        "E_common_name": "Common Myna",
        "F_scientific_name": "Acridotheres tristis",
        "G_distribution": "多分布于南亚地区，但也分布在东南亚、澳大利亚和南太平洋部分岛屿，已经引入到全球许多地区。",
        "H_rarity": "2级：非常常见（数量稳定，但对环境变化敏感）。",
        "I_description": "家八哥是一种中等体型的鸟类，具有光泽的黑色羽毛、黄色的眼圈和腿部。以杂食性为主，主要食用昆虫、果实和人类废弃物。通常在城市、农田和疏林地带栖息，并且适应能力强。",
        "J_identification_reason": "其显著的黑色羽毛、黄色的眼圈和腿部，加上特有的冠状羽毛。",
        "K_features": "黑色体羽，黄色眼圈和腿部，特有的冠状羽毛。",
        "L_vocal_characteristics": "家八哥的叫声多变，包括哨声、模仿其它鸟类的声音，常用于通信、求偶和领地保护。",
        "M_habitat": "主要栖息于城市、农田和疏林地带。",
        "N_confidence": "95%"
    },
    "message": "Get successfully.",
    "success": true
}
```

## 返回参数说明：
| 字段                        | 含义                                               |
| --------------------------- | -------------------------------------------------- |
| **A_order**                 | 鸟类的分类目。                                     |
| **B_family**                | 鸟类的分类科。                                     |
| **C_genus**                 | 鸟类的分类属。                                     |
| **D_species**               | 鸟类的分类种。                                     |
| **E_common_name**           | 鸟类的常见英文名。                                 |
| **F_scientific_name**       | 鸟类的科学名称。                                   |
| **G_distribution**          | 鸟类的地理分布区域。                               |
| **H_rarity**                | 鸟类的稀有程度，分为10级（从“极常见”到“极濒危”）。 |
| **I_description**           | 对鸟类的专业描述，包括形态特征、生活习性等。       |
| **J_identification_reason** | 识别该鸟类的主要原因。                             |
| **K_features**              | 鸟类的显著特征，例如羽毛颜色、体型大小等。         |
| **L_vocal_characteristics** | 鸟类的叫声特征，例如音调、节奏和用途。             |
| **M_habitat**               | 鸟类的主要栖息地类型，例如森林、湿地、草原等。     |
| **N_confidence**            | 识别的置信水平。                                   |


## 接口调试：
---
<script setup>
import SwaggerUI from '../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    tag="recognition"
    type="post"
    path="/recognition/identifying_birds" 
  />
</ClientOnly>

