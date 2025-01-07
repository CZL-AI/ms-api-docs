# 获取识别报告说明文档
---
用于检测鸟类的品种及相关信息

## 调用接口：
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/recognition/identifying_birds?token=[ACCESS_TOKEN]`

## 请求参数：
```json
{
  "image_url": "https://angular00001.oss-cn-beijing.aliyuncs.com/2024-08-16/12025.png"
}
```


## 参数列表：

| 名称    | 类型   | 必填 | 说明                                           |
| ------- | ------ | ---- | ---------------------------------------------- |
| image_url | string | 是   | 识别图片地址（需提供一张能正常访问的图片地址） |

## 返回结果：
```json
{
    "data": {
        "A_order": "鸻形目",
        "B_family": "鸥科",
        "C_genus": "须浮鸥属",
        "D_species": "黑须浮鸥",
        "E_common_name": "Black Tern",
        "F_scientific_name": "Chlidonias niger",
        "G_distribution": "分布于欧洲、亚洲和北美洲，冬季迁徙至非洲和南美洲。",
        "H_rarity": "4级：较常见（数量尚可，但种群受到一定威胁）。",
        "I_description": "黑须浮鸥是一种中小型水鸟，繁殖期成鸟头、颈、胸部呈黑色，背部和翅膀呈灰色，腹部白色，尾羽浅灰。嘴和腿呈黑色。非繁殖期黑色部分褪为灰白色。体长约23-26厘米，翼展约60-70厘米。它们主要以昆虫、小鱼和甲壳类动物为食，在空中捕食或从水面捕捉。通常栖息在湿地、湖泊和沼泽地区。",
        "J_identification_reason": "繁殖期头颈胸部黑色，背部灰色，腹部白色，黑色的嘴和腿，以及飞行姿态。",
        "K_features": "繁殖期头颈胸部黑色，背部灰色，腹部白色；非繁殖期黑色部分褪为灰白色；嘴和腿为黑色。",
        "L_vocal_characteristics": "叫声为尖锐的“kik”或“keek”，常用于警戒和交流。",
        "M_habitat": "主要栖息于淡水湿地、湖泊、沼泽和沿海地区。",
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

