# 生成图片报告说明文档

## 功能介绍
---
本文档介绍了如何通过API生成宠物的图片报告。该接口接收一张图片、宠物档案ID和子模块类型，用于生成基于图片的健康或诊断报告。返回结果中 `data` 字段的结构会根据 `sub_module_type` 的值而不同。

## 使用方法
---
开发者需要通过HTTP POST请求上传图片并提供相关的宠物信息来生成图片报告。请求时需要以 `multipart/form-data` 格式提交文件和表单数据。系统会返回报告生成任务的处理结果。

## 适用场景
---
- **宠物健康评估**：用户上传宠物图片（如皮肤、眼睛等）进行初步健康评估。
- **智能诊断辅助**：结合图片和宠物档案信息，辅助进行疾病诊断。
- **报告生成**：为用户提供可视化的宠物健康报告。

---
## 子模块说明[sub_module_type]
|   sub_module_type    | 说明                |
| ---------------  | ----------------------- |
| 1             | 品种识别                  |
| 2             | 表情识别                  |
| 3             | 口腔检测                  |
| 4             | 排泄物                    |
| 5             | 呕吐物                    |
| 6             | 皮肤检测                  |
| 7             | 耳道检查                  |
| 8             | 眼睛检查                  |

---
开发者需要按照如下步骤完成：

通过调用 `/pic` 接口，上传宠物相关图片和信息，系统将处理并返回报告结果。

## 调用接口：
**请求方式：** `POST（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/async/api/v2/report-service-v2/pic?token=[ACCESS_TOKEN]`

## 请求参数：

| 名称            | 类型       | 必填 | 说明                                   |
| --------------- | ---------- | ---- | -------------------------------------- |
| img             | file       | 是   | 需要上传的图片文件                     |
| pet_profile_id  | integer    | 是   | 关联的宠物档案ID                       |
| sub_module_type | integer    | 是   | 子模块类型，具体数值含义需参考业务定义 |

**注意：** 虽然接口定义中 `pet_profile_id` 为必填项，但在 `sub_module_type` 对应 `1（品种识别）` 或 `2（表情识别）` 时，业务逻辑上可能不依赖于具体的宠物档案信息。对于其他 `sub_module_type` 值 (如对应身体部位识别 3-8)，`pet_profile_id` 是必需的。建议在所有情况下都提供有效的 `pet_profile_id`。

## 返回结果：
该接口返回一个基础响应结构，其中 `data` 字段包含报告生成任务的处理结果。`data` 字段的具体结构取决于请求中的 `sub_module_type` 参数，并遵循相应的 Pydantic Schema 定义。

```json
{
    "code": 200, // 状态码，200表示成功
    "message": "success",
    "data": {
        // 根据 sub_module_type 不同，这里的结构不同
        // 具体结构请参考下方根据 sub_module_type 分类的说明
    },
    "success": true // 表示请求是否成功
}
```

## 返回参数说明：
| 名称    | 类型    | 说明                                                                 |
| ------- | ------- | -------------------------------------------------------------------- |
| code    | integer | 状态码，200表示成功                                                  |
| message | string  | 响应消息                                                             |
| data    | object  | 报告生成任务的处理结果，具体结构取决于业务逻辑和 `sub_module_type` 参数 |
| success | boolean | 表示请求是否成功 (true/false)                                        |

### `data` 字段结构说明 (根据 `sub_module_type`)

`data` 字段的结构根据 `sub_module_type` 的值不同，生成的json文件是不同的。

#### 当 `sub_module_type` 对应 `1 （品种识别）` 时：
`data` 字段结构遵循定义。
```
// 示例 JSON 结构
{
     "recg": {
         "photo": "这是一张拉布拉多犬的侧面照，显示了它的头部和部分身体。它的毛色以白色和浅棕色为主，耳朵呈下垂状，鼻子的颜色为黑色，脖子上戴着棕色项圈。",
         "report": [
             {
                 "name": "毛色和图案",
                 "feature": "毛色为白色和浅棕色，浅棕色主要分布在头部和耳朵周围。"
             },
             {
                 "name": "眼睛颜色",
                 "feature": "眼睛颜色为深棕色。"
             },
             {
                 "name": "耳朵形态",
                 "feature": "耳朵呈下垂状，耳根部略微抬起，耳尖向下。"
             },
             {
                 "name": "体型大小",
                 "feature": "体型中等偏大，肌肉发达。"
             },
             {
                 "name": "体态",
                 "feature": "整体体态健壮，线条流畅。"
             },
             {
                 "name": "腿的长度",
                 "feature": "腿部长度适中，与身体比例协调。"
             },
             {
                 "name": "毛发类型",
                 "feature": "毛发短而平滑，质地较硬。"
             },
             {
                 "name": "行为姿态",
                 "feature": "侧面站立，姿态平静。"
             },
             {
                 "name": "尾巴",
                 "feature": "尾巴没有显示。"
             },
             {
                 "name": "脸型和头部",
                 "feature": "头部呈楔形，口吻较长，额头平坦。"
             }
         ]
     },
     "advice": [
         {
             "title": "品种特征",
             "description": {
                 "summary_words": "体型中等，肌肉发达",
                 "explaination": "柯基犬腿短身长，背部平直，胸部宽阔，拥有独特的“小短腿”造型，肌肉发达，行动敏捷。",
                 "summary_words2": "耳朵直立，尾巴短小",
                 "explaination2": "耳朵呈三角形直立，尾巴通常短小或断尾，毛发浓密，颜色多样，常见有红色、黑白色、黄褐色等。"
             }
         },
         {
             "title": "性格特点",
             "description": {
                 "summary_words": "聪明机警，性格活泼",
                 "explaination": "柯基犬聪明、学习能力强，对主人忠诚，性格活泼好动，喜欢玩耍，需要主人投入足够的时间陪伴。",
                 "summary_words2": "勇敢自信，友善温和",
                 "explaination2": "它们勇敢自信，对陌生人保持警惕，但对家人非常友善温和，是优秀的家庭伴侣犬。"
             }
         },
         {
             "title": "适养建议",
             "description": {
                 "summary_words": "需要充足的运动",
                 "explaination": "柯基犬虽然腿短，但精力旺盛，需要每天进行适量的运动，如散步、跑步或玩耍，以保持身心健康。",
                 "summary_words2": "注意控制体重",
                 "explaination2": "由于体型原因，柯基犬容易发胖，应控制饮食，避免过度喂食，以预防关节疾病等问题。"
             }
         },
         {
             "title": "基因缺陷",
             "description": {
                 "summary_words": "易患椎间盘疾病",
                 "explaination": "柯基犬由于身体结构特点，容易患椎间盘突出等脊椎疾病，应注意避免剧烈运动和高处跳跃。",
                 "summary_words2": "髋关节发育不良",
                 "explaination2": "柯基犬也可能出现髋关节发育不良，这是一种遗传性疾病，会导致关节疼痛和活动受限，应定期进行健康检查。"
             }
         }
     ],
     "result": {
         "prob": [
             {
                 "categories": "犬类",
                 "breed": "拉布拉多寻回犬",
                 "hair_color": "白色和浅棕色",
                 "pct": "98",
                 "reason": "毛色为白色和浅棕色，浅棕色主要分布在头部和耳朵周围。眼睛颜色为深棕色。耳朵呈下垂状，耳根部略微抬起，耳尖向下。体型中等偏大，肌肉发达。整体体态健壮，线条流畅。腿部长度适中，与身体比例协调。毛发短而平滑，质地较硬。侧面站立，姿态平静。头部呈楔形，口吻较长，额头平坦。这些特征都与拉布拉多寻回犬的品种特征相符。"
             },
             {
                 "breed": "金毛寻回犬",
                 "pct": "1",
                 "reason": "金毛寻回犬幼年时期也可能呈现相似的毛色和体型，但其鼻子通常为棕色，且毛发较为蓬松。此犬毛发较短，更接近拉布拉多。"
             },
             {
                 "breed": "中华田园犬",
                 "pct": "1",
                 "reason": "中华田园犬的毛色和体型具有多样性，但通常不会像拉布拉多寻回犬那样具有明显的品种特征，且中华田园犬的头部形状和耳朵形态与此犬略有不同。"
             }
         ],
         "tip": ""
     }
 }
```
| 名称     | 类型   | 说明                                                                                                                               |
| -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| recg     | object | 识别结果信息                                                                                                                       |
| recg.photo | string | 图片解释                                                                                                                           |
| recg.report | array  | 图片特征报告列表                                                                                                                   |
| recg.report[].name | string | 特征名称 (如 "毛色和图案", "眼睛颜色" 等)                                                                                            |
| recg.report[].feature | string | 特征解释                                                                                                                     |
| advice   | array  | 建议列表                                                                                                                           |
| advice[].title | string | 建议标题 (如 "品种特征")                                                                                                           |
| advice[].description | object | 建议描述                                                                                                                           |
| advice[].description.summary_words | string | 总结词                                                                                                             |
| advice[].description.explaination | string | 解释                                                                                                               |
| advice[].description.summary_words2 | string | 总结词2 (可选)                                                                                                     |
| advice[].description.explaination2 | string | 解释2 (可选)                                                                                                       |
| result   | object | 结果信息                                                                                                                           |
| result.prob | array  | 概率列表                                                                                                                           |
| result.prob[].categories | string | 类别 (如 "犬类")                                                                                                           |
| result.prob[].breed | string | 品种                                                                                                                               |
| result.prob[].hair_color | string | 毛发颜色 (可选)                                                                                                            |
| result.prob[].pct | string | 概率百分比 (字符串形式)                                                                                                            |
| result.prob[].reason | string | 识别理由                                                                                                                           |
| result.tip | string | 提示信息                                                                                                                           |


#### 当 `sub_module_type` 对应 `2 (表情识别)` 时：
`data` 字段结构遵循定义。
```
// 示例 JSON 结构
{
 "recg": {
     "photo": "【图片解释】",
     "is_target": "【如果是宠物的图片，请输出'1'；如果不是，请输出'0'】",
     "report": [
       {
         "name": "位置和角度",
         "feature": "【位置和角度解释】，【理由】"
       },
       {
         "name": "对称性",
         "feature": "【对称性解释】，【理由】"
       },
       {
         "name": "瞳孔大小",
         "feature": "【瞳孔大小解释】，【理由】"
       },
       {
         "name": "眼睑状态",
         "feature": "【眼睑状态解释】，【理由】"
       },
       {
         "name": "眼神",
         "feature": "【眼神解释】，【理由】"
       },
       {
         "name": "嘴巴",
         "feature": "【嘴巴解释】，【理由】"
       },
       {
         "name": "嘴角",
         "feature": "【嘴角解释】，【理由】"
       },
       {
         "name": "舌头",
         "feature": "【舌头解释】，【理由】"
       },
       {
         "name": "胡须",
         "feature": "【胡须解释】，【理由】"
       },
       {
         "name": "尾巴状态",
         "feature": "【尾巴状态解释】，【理由】"
       },
       {
         "name": "身体姿势",
         "feature": "【身体姿势解释】，【理由】"
       },
       {
         "name": "毛发状态",
         "feature": "【毛发状态解释】，【理由】"
       },
       {
         "name": "尾巴毛发状态",
         "feature": "【尾巴毛发状态解释】，【理由】"
       },
       {
         "name": "爪子位置",
         "feature": "【爪子位置解释】，【理由】"
       },
       {
         "name": "所处场景",
         "feature": "【所处场景解释】"
       }
     ]
   },
     "result": {
         "breed": "小猫",
         "prob": [
             {
                 "part": "眼睛",
                 "pct": "70",
                 "reason": "瞳孔明显增大，眼睛睁得很大，表示惊讶"
             },
             {
                 "part": "胡须",
                 "pct": "30",
                 "reason": "胡须向前伸展，表示警惕和好奇"
             },
             {
                 "part": "嘴巴",
                 "pct": "0",
                 "reason": "嘴巴紧闭，无明显变化"
             },
             {
                 "part": "耳朵",
                 "pct": "0",
                 "reason": "未能清晰识别，无法判断耳朵的状态"
             }
         ],
         "emotion": "惊讶",
         "advice": "给小猫一些温柔的言语安抚，并注意观察它的行为。"
     },
  "advice": {
         "options": [
             {
                 "title": "定期梳理",
                 "description": "根据宠物的毛发类型，每周使用合适的梳子梳理两次，有助于去除死毛，防止毛团形成。"
             },
             {
                 "title": "适当洗澡",
                 "description": "宠物通常每月洗澡一次，使用宠物专用洗发水，避免频繁洗澡导致皮肤干燥。"
             },
             {
                 "title": "皮肤检查",
                 "description": "每周检查宠物的皮肤，注意是否有红肿、脱毛或寄生虫，及时处理异常情况。"
             }
         ]
     }
 }
```
| 名称     | 类型   | 说明                                                                                                                               |
| -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| recg     | object | 识别结果信息                                                                                                                       |
| recg.photo | string | 图片解释                                                                                                                           |
| recg.is_target | string | 是否是宠物的图片 ('1' 表示是，'0' 表示否)                                                                                          |
| recg.report | array  | 图片特征报告列表                                                                                                                   |
| recg.report[].name | string | 特征名称 (如 "位置和角度", "对称性" 等)                                                                                            |
| recg.report[].feature | string | 特征解释和理由                                                                                                                     |
| result   | object | 结果信息                                                                                                                           |
| result.breed | string | 识别出的品种 (示例中为 "小猫")                                                                                                     |
| result.prob | array  | 各部位识别概率列表                                                                                                                 |
| result.prob[].part | string | 部位名称 (如 "眼睛", "胡须" 等)                                                                                                  |
| result.prob[].pct | string | 概率百分比 (字符串形式)                                                                                                            |
| result.prob[].reason | string | 识别理由                                                                                                                           |
| result.emotion | string | 识别出的情绪 (示例中为 "惊讶")                                                                                                     |
| result.advice | string | 针对识别结果的建议                                                                                                                 |
| advice   | object | 建议信息                                                                                                                           |
| advice.options | array  | 建议选项列表                                                                                                                       |
| advice.options[].title | string | 建议标题 (如 "定期梳理")                                                                                                           |
| advice.options[].description | string | 建议描述                                                                                                                           |


#### 当 `sub_module_type` 对应 `3-8` 时：
`data` 字段结构遵循定义。
```
// 示例 JSON 结构 for sub_module_type corresponding to body parts
{
     "recg": {
         "photo": "皮肤图",
         "is_healthy": "0",
         "is_target":"1",
         "report_abnormal": [
             {
                 "name": "颜色",
                 "feature": "色素减退，皮肤出现多处不规则的白色斑块，可能与色素细胞功能障碍有关。"
             },
             {
                 "name": "皮肤质地",
                 "feature": "干燥脱屑，可见白色鳞屑附着在皮肤表面，提示皮肤可能存在干燥或角化异常。"
             },
             {
                 "name": "损伤",
                 "feature": "无损伤，皮肤表面无破损和溃疡。"
             },
             {
                 "name": "毛发状况",
                 "feature": "局部脱毛，斑块区域毛发稀疏，毛发分布不均，可能与皮肤病变有关。"
             }
         ],
         "report_normal": [
             {
                 "name": "抓挠程度",
                 "feature": "未能清晰识别，无法判断是否存在抓挠痕迹。"
             },
             {
                 "name": "分泌物",
                 "feature": "无异常，皮肤表面无渗出物、结痂等异常分泌物。"
             },
             {
                 "name": "肿胀",
                 "feature": "无肿胀，皮肤轮廓平整，未见异常隆起。"
             }
         ]
     },
     "report_risk": [
         {
             "name": "【最高风险的疾病】",
             "risk": "60"
         },
         {
             "name": "【风险第二高的疾病】",
             "risk": "30"
         },
         {
             "name": "风险第三高的疾病",
             "risk": "10"
         }
     ],
     "disease": {
         "symptom": {
             "title": "过敏反应",
             "content": "由于宠物（德文）有西瓜过敏史，可能会出现皮肤瘙痒、红肿、荨麻疹等过敏反应，严重时可能出现呼吸困难、呕吐或腹泻等症状。",
             "title2": "其他潜在过敏原",
             "content2": "除了西瓜，其他食物或环境中的物质也可能导致过敏，表现为打喷嚏、流鼻涕、眼睛发红等，具体症状因个体差异而异。"
         },
         "reason": {
             "title": "西瓜过敏",
             "content": "西瓜过敏主要是由于机体免疫系统对西瓜中的特定蛋白质产生了过度反应，导致释放组织胺等物质，引发过敏症状。这是个体差异，有的猫咪天生就对某些食物或物质敏感。",
             "title2": "其他过敏原",
             "content2": "其他过敏原可能包括但不限于：某些食物（如奶制品、海鲜）、花粉、尘螨、跳蚤叮咬、清洁剂等。猫咪的免疫系统可能对这些物质产生异常反应，导致过敏症状。"
         },
         "precautions": {
             "title": "避免接触西瓜",
             "content": "对于已知西瓜过敏的德文，应严格避免喂食任何形式的西瓜，包括西瓜果肉、西瓜汁等。同时，确保家中其他成员也知晓并避免喂食。",
             "title2": "排查其他过敏原",
             "content2": "观察猫咪的生活环境和饮食，逐步排除可能引起过敏的物质。如有必要，可以考虑进行过敏原测试，以确定具体的过敏原并避免接触。"
         },
         "attention": {
             "title": "密切观察",
             "content": "一旦发现宠物出现任何过敏症状，如皮肤瘙痒、呼吸困难等，应立即就医。及时就医可以避免过敏反应进一步恶化。",
             "title2": "就医治疗",
             "content2": "对于严重的过敏反应，可能需要使用抗组织胺药物、糖皮质激素等进行治疗。请务必遵循兽医的建议，按时按量给药，并定期复诊。"
         }
     },
     "suggest": {
         "summary": "猫咪皮肤出现色素减退、干燥脱屑、局部脱毛，可能与色素细胞功能障碍或皮肤干燥、角化异常等问题有关，需要进一步诊断。",
         "medicine_info": [
             {
                 "name": "鱼油软胶囊",
                 "form": "口服",
                 "dosage": "根据产品说明，一般为每日每公斤体重10-20mg",
                 "frequency": "每天一次",
                 "duration": "长期",
                 "additional_info": "可混入食物中喂食，注意观察是否有过敏反应"
             },
             {
                 "name": "宠物专用皮肤保湿喷雾",
                 "form": "外用",
                 "dosage": "适量",
                 "frequency": "每天两次",
                 "duration": "根据需要长期使用",
                 "additional_info": "喷在患处，避免接触眼睛和嘴巴"
             }
         ],
         "health_guide": [
             {
                 "name": "温和清洁",
                 "desc": "使用宠物专用、温和的洗浴产品，避免刺激皮肤，洗后及时吹干。"
             },
             {
                 "name": "保持环境湿度",
                 "desc": "使用加湿器等设备，保持室内环境湿度适宜，避免皮肤过于干燥。"
             },
             {
                 "name": "避免刺激",
                 "desc": "避免使用刺激性清洁剂或接触过敏原，减少对皮肤的刺激。"
             },
             {
                 "name": "定期检查",
                 "desc": "定期检查皮肤状况，关注是否有新的病变出现或原有症状加重，及时就医。"
             }
         ],
         "monitoring_essentials": "注意观察用药后皮肤变化，是否有好转或出现其他不适症状。若症状持续或加重，请及时就医。"
     }
 }
```
| 名称     | 类型   | 说明                                                                                                                               |
| -------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| recg     | object | 识别结果信息                                                                                                                       |
| recg.photo | string | 图片解释                                                                                                                           |
| recg.is_healthy | string | 是否健康 ('1' 表示健康，'0' 表示不健康)                                                                                             |
| recg.is_target | string | 是否是目标图片 ('1' 表示是，'0' 表示否)                                                                                             |
| recg.report_abnormal | array  | 异常特征报告列表                                                                                                                   |
| recg.report_abnormal[].name | string | 异常特征名称 (如 "颜色", "皮肤质地" 等)                                                                                            |
| recg.report_abnormal[].feature | string | 异常特征解释                                                                                                                     |
| recg.report_normal | array  | 正常特征报告列表                                                                                                                   |
| recg.report_normal[].name | string | 正常特征名称 (如 "抓挠程度", "分泌物" 等)                                                                                            |
| recg.report_normal[].feature | string | 正常特征解释                                                                                                                     |
| report_risk | array  | 疾病风险列表                                                                                                                       |
| report_risk[].name | string | 疾病名称                                                                                                                           |
| report_risk[].risk | string | 风险百分比 (字符串形式)                                                                                                            |
| disease  | object | 疾病信息                                                                                                                           |
| disease.symptom | object | 症状信息                                                                                                                           |
| disease.symptom.title | string | 症状标题                                                                                                                           |
| disease.symptom.content | string | 症状内容                                                                                                                           |
| disease.symptom.title2 | string | 症状标题2 (可选)                                                                                                     |
| disease.symptom.content2 | string | 症状内容2 (可选)                                                                                                     |
| disease.reason | object | 原因信息                                                                                                                           |
| disease.reason.title | string | 原因标题                                                                                                                           |
| disease.reason.content | string | 原因内容                                                                                                                           |
| disease.reason.title2 | string | 原因标题2 (可选)                                                                                                     |
| disease.reason.content2 | string | 原因内容2 (可选)                                                                                                     |
| disease.precautions | object | 注意事项信息                                                                                                                       |
| disease.precautions.title | string | 注意事项标题                                                                                                                       |
| disease.precautions.content | string | 注意事项内容                                                                                                                       |
| disease.precautions.title2 | string | 注意事项标题2 (可选)                                                                                                     |
| disease.precautions.content2 | string | 注意事项内容2 (可选)                                                                                                     |
| disease.attention | object | 关注信息                                                                                                                           |
| disease.attention.title | string | 关注标题                                                                                                                           |
| disease.attention.content | string | 关注内容                                                                                                                           |
| disease.attention.title2 | string | 关注标题2 (可选)                                                                                                     |
| disease.attention.content2 | string | 关注内容2 (可选)                                                                                                     |
| suggest  | object | 建议信息                                                                                                                           |
| suggest.summary | string | 建议总结                                                                                                                           |
| suggest.medicine_info | array  | 药物信息列表                                                                                                                       |
| suggest.medicine_info[].name | string | 药物名称                                                                                                                           |
| suggest.medicine_info[].form | string | 药物形式 (如 "口服", "外用")                                                                                                       |
| suggest.medicine_info[].dosage | string | 药物剂量                                                                                                                           |
| suggest.medicine_info[].frequency | string | 用药频率                                                                                                                           |
| suggest.medicine_info[].duration | string | 用药时长                                                                                                                           |
| suggest.medicine_info[].additional_info | string | 附加信息                                                                                                                           |
| suggest.health_guide | array  | 健康指南列表                                                                                                                       |
| suggest.health_guide[].name | string | 指南名称 (如 "温和清洁")                                                                                                           |
| suggest.health_guide[].desc | string | 指南描述                                                                                                                           |
| suggest.monitoring_essentials | string | 监测要点                                                                                                                           |


## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    type="post"
    path="/report/pic"
  />
</ClientOnly>
