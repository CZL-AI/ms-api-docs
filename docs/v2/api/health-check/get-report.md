# 6、获取健康检查报告详情 - 健康检查模块

## 接口描述
---
该接口用于获取完整的健康检查报告内容。用户可以通过此接口查询已生成的健康检查报告的详细信息，包括健康评分、分项评估、风险提示和改善建议等，以便更好地管理和回顾宠物的健康状况。

**重要提示**：报告生成是异步过程，需要通过轮询此接口来查询报告状态。

## 轮询说明
调用 `/ai-health-check/report` 接口提交报告生成请求后，需要通过轮询本接口来查询报告状态：

1. **调用间隔**：建议每隔 3-5 秒调用一次
2. **超时设置**：建议设置 2 分钟超时时间
3. **状态判断**：检查返回的 `report_status` 字段
   - `report_status = 0`：报告生成中，继续轮询
   - `report_status = 2`：报告生成完成，可以使用报告数据
4. **错误处理**：如果超过超时时间仍未完成，提示用户稍后重试

## 调用接口
**请求方式：** `GET（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/medical-record?token=[ACCESS_TOKEN]`

## 请求参数
### Query 参数
| 名称      | 类型   | 必填 | 说明                                                     |
| --------- | ------ | ---- | -------------------------------------------------------- |
| report_id | number | 是   | 健康检查报告ID，通过 `generate-report` 接口生成后获取     |

**请求示例：**
```
GET https://ms-ai.chongzhiling.com/api/v2.0/ai-b/medical-record?token=xxx&report_id=122472
```

或使用 curl 命令：
```bash
curl -X 'GET' \
  'https://ms-ai.chongzhiling.com/api/v2.0/ai-b/medical-record?report_id=122472' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer [ACCESS_TOKEN]'
```

## 返回结果
```json
{
    "data": {
        "created_at": "2025-11-24T08:17:04",
        "id": 122472,
        "image_recognition_status": 0,
        "is_paid": 1,
        "lang": "zh",
        "module_type": 18,
        "pet_info": {
            "avatar": null,
            "id": 36327,
            "name": "德文"
        },
        "pet_profile_id": 36327,
        "report": "{\"report_6\": [{\"id\": 1, \"category\": \"diet\", \"question\": \"零食主要是用来做什么的？\", \"options\": [{\"option_id\": 1, \"text\": \"作为训练奖励或益智玩具填充，目的明确\"}, {\"option_id\": 2, \"text\": \"作为日常互动的小奖励，增进感情\"}, {\"option_id\": 3, \"text\": \"只要TA乞食就给，作为安抚手段\"}, {\"option_id\": 4, \"text\": \"随时随地都给，没有节制\"}], \"answer\": {\"option_id\": 1, \"text\": \"作为训练奖励或益智玩具填充，目的明确\"}}, {\"id\": 2, \"category\": \"diet\", \"question\": \"当您靠近TA正在进食的饭碗时，TA会作何反应？\", \"options\": [{\"option_id\": 1, \"text\": \"毫无反应，或友好地抬头看您一眼\"}, {\"option_id\": 2, \"text\": \"会暂时停下进食，观察您的动作\"}, {\"option_id\": 3, \"text\": \"进食速度加快，表现出护食的倾向\"}, {\"option_id\": 4, \"text\": \"发出低吼、龇牙等明显的护食攻击行为\"}]}], \"scores\": {\"diet_management\": \"100\", \"daily_activity\": \"75\", \"living_habits\": \"88\", \"cleaning_care\": \"92\", \"health_status\": \"85\"}, \"review_conclusion\": {\"conclusion\": \"您的宠物整体健康状况良好，在饮食管理、清洁护理等方面表现优秀，但在日常活动方面还有提升空间。\", \"maintenance_advice\": \"建议保持当前的饮食管理和清洁护理习惯，适当增加日常运动量，定期进行健康检查。\", \"health_alert\": \"0\", \"intelligent_diagnosis_push\": false}, \"comprehensive_score\": 88, \"health_percentage\": 88.0, \"improvement_suggestions\": {\"diet_nutrition\": \"建议每日定时定点喂食2-3餐，零食控制在每日总热量的10%以内，避免过度投喂导致体重异常。\", \"living_environment\": \"建议每日安排15分钟嗅闻游戏，丰富环境刺激，促进精神活跃，减少因单调导致的行为问题。\", \"daily_care\": \"建议每日梳毛5分钟，保持皮毛清洁，预防皮肤问题，每1-2周修剪一次指甲，避免抓伤和行走不适。\", \"exercise_advice\": \"建议每日额外增加20分钟散步，促进体重管理和心肺功能，避免因运动不足导致的肥胖风险。\", \"health_advice\": \"建议每周刷牙3-4次，预防牙菌斑和牙周病，每年进行1次全面体检，及时发现潜在健康问题。\"}}",
        "report_info": {
            "content": "综合评分88分",
            "img_url": null,
            "report_url": null,
            "title": "健康检查报告"
        },
        "report_status": 2,
        "report_time": "2025-11-24T08:18:59",
        "report_type": "v2",
        "session_id": "b40e4434-0046-445f-8495-8f8d3379240d",
        "stage": null,
        "status": 2,
        "sub_module_type": null,
        "summary": null,
        "updated_at": "2025-11-24T16:18:22"
    },
    "message": "Get successfully.",
    "success": true
}
```

## 返回参数说明
| 名称                    | 类型    | 说明                                         |
|-------------------------|---------|----------------------------------------------|
| created_at              | string  | 报告创建时间，格式为 ISO 8601                 |
| id                      | number  | 报告ID                                       |
| image_recognition_status| number  | 图像识别状态                                 |
| is_paid                 | number  | 是否已支付，1表示已支付，0表示未支付           |
| lang                    | string  | 语言，如 `zh` 表示中文                       |
| module_type             | number  | 模块类型，18表示健康检查模块                  |
| pet_info                | object  | 宠物信息对象                                 |
| - avatar                | string  | 宠物头像URL（可能为null）                    |
| - id                    | number  | 宠物ID                                       |
| - name                  | string  | 宠物名称                                     |
| pet_profile_id          | number  | 宠物档案ID                                   |
| report                  | string  | 报告详细内容（JSON字符串），包含以下主要部分：  |
| - report_6              | array   | 所有问题、选项和用户答案的完整列表             |
| - scores                | object  | 各维度评分                                   |
| - review_conclusion     | object  | 审查结论（含结论、维护建议、健康警示）        |
| - comprehensive_score   | number  | 综合评分（0-100分）                          |
| - health_percentage     | number  | 健康百分比                                   |
| - improvement_suggestions| object | 改善建议                                     |
| report_info             | object  | 报告摘要信息                                 |
| - content               | string  | 报告内容摘要                                 |
| - img_url               | string  | 报告图片URL（可能为null）                    |
| - report_url            | string  | 报告URL（可能为null）                        |
| - title                 | string  | 报告标题                                     |
| report_status           | number  | 报告状态，2表示已完成                         |
| report_time             | string  | 报告生成时间，格式为 ISO 8601                 |
| report_type             | string  | 报告类型，`v2` 表示V2版本                    |
| session_id              | string  | 会话ID，用于标识本次健康检查                  |
| stage                   | string  | 检查阶段（可能为null）                       |
| status                  | number  | 状态，2表示已完成                             |
| sub_module_type         | string  | 子模块类型                                   |
| summary                 | string  | 健康检查总结（可能为null）                   |
| updated_at              | string  | 报告更新时间，格式为 ISO 8601                 |

## 报告内容详解
`report` 字段是一个 JSON 字符串，需要解析后才能获取详细内容。解析后的主要结构如下：

### 1. 问题答案记录（`report_6`）
包含所有健康检查问题、选项和用户答案的完整记录。
- **数组结构**：每个元素包含一个问题的完整信息
  - **`id`**：问题ID
  - **`category`**：问题类别（diet、activity、environment、lifestyle、health）
  - **`question`**：问题文本
  - **`options`**：选项数组
    - **`option_id`**：选项ID
    - **`text`**：选项文本
  - **`answer`**：用户的答案（可选字段）
    - **`option_id`**：用户选择的选项ID
    - **`text`**：用户选择的选项文本

示例：
```json
{
  "id": 1,
  "category": "diet",
  "question": "零食主要是用来做什么的？",
  "options": [
    {"option_id": 1, "text": "作为训练奖励或益智玩具填充，目的明确"},
    {"option_id": 2, "text": "作为日常互动的小奖励，增进感情"}
  ],
  "answer": {
    "option_id": 1,
    "text": "作为训练奖励或益智玩具填充，目的明确"
  }
}
```

### 2. 各维度评分（`scores`）
包含五个维度的评分情况。
- **`diet_management`**：饮食管理评分（0-100分，字符串格式）
- **`daily_activity`**：日常活动评分（0-100分，字符串格式）
- **`living_habits`**：生活习惯评分（0-100分，字符串格式）
- **`cleaning_care`**：清洁护理评分（0-100分，字符串格式）
- **`health_status`**：健康状态评分（0-100分，字符串格式）

示例：
```json
{
  "diet_management": "100",
  "daily_activity": "75",
  "living_habits": "88",
  "cleaning_care": "92",
  "health_status": "85"
}
```

### 3. 审查结论（`review_conclusion`）
包含AI对宠物健康状况的综合评价和建议。
- **`conclusion`**：综合结论描述
- **`maintenance_advice`**：日常维护建议
- **`health_alert`**：健康警示等级（"0"表示无警示，"1"表示有警示）
- **`intelligent_diagnosis_push`**：是否推送智能诊断（boolean）

示例：
```json
{
  "conclusion": "您的宠物整体健康状况良好，在饮食管理、清洁护理等方面表现优秀，但在日常活动方面还有提升空间。",
  "maintenance_advice": "建议保持当前的饮食管理和清洁护理习惯，适当增加日常运动量，定期进行健康检查。",
  "health_alert": "0",
  "intelligent_diagnosis_push": false
}
```

### 4. 综合评分（`comprehensive_score`）
宠物的综合健康评分，范围0-100分（number类型）。

### 5. 健康百分比（`health_percentage`）
宠物的健康百分比，范围0-100（number类型）。

### 6. 改善建议（`improvement_suggestions`）
包含针对各个维度的具体改善建议。
- **`diet_nutrition`**：饮食营养建议
- **`living_environment`**：生活环境建议
- **`daily_care`**：日常护理建议
- **`exercise_advice`**：运动建议
- **`health_advice`**：健康保健建议

示例：
```json
{
  "diet_nutrition": "建议每日定时定点喂食2-3餐，零食控制在每日总热量的10%以内，避免过度投喂导致体重异常。",
  "living_environment": "建议每日安排15分钟嗅闻游戏，丰富环境刺激，促进精神活跃，减少因单调导致的行为问题。",
  "daily_care": "建议每日梳毛5分钟，保持皮毛清洁，预防皮肤问题，每1-2周修剪一次指甲，避免抓伤和行走不适。",
  "exercise_advice": "建议每日额外增加20分钟散步，促进体重管理和心肺功能，避免因运动不足导致的肥胖风险。",
  "health_advice": "建议每周刷牙3-4次，预防牙菌斑和牙周病，每年进行1次全面体检，及时发现潜在健康问题。"
}
```

## 使用场景
1. **轮询查询报告状态**：在调用生成报告接口后，轮询此接口检查报告是否生成完成
2. **报告展示**：当 report_status=2 时，在客户端展示完整的健康检查报告
3. **健康管理**：根据报告的改善建议制定宠物日常健康管理计划
4. **历史对比**：对比不同时期的健康检查报告，跟踪健康变化趋势
5. **分享给兽医**：将报告分享给兽医，作为诊断参考，特别是当health_alert为"1"时
6. **健康档案**：将报告保存到宠物健康档案中，建立长期健康记录

## 注意事项
1. **轮询机制**：报告生成是异步的，必须通过轮询此接口来查询状态，不能假设报告立即生成
2. **状态判断**：只有当 `report_status = 2` 时，报告才真正生成完成，才能使用报告数据
3. **轮询间隔**：建议每隔 3-5 秒查询一次，避免过于频繁或过于稀疏
4. **超时处理**：建议设置 2 分钟超时，超时后提示用户稍后重试或联系客服
5. **报告解析**：`report` 字段是 JSON 字符串，需要进行解析（`JSON.parse()`）后才能获取详细内容
6. **报告完整性**：确保 `report_status=2` 且 `status=2` 再使用报告数据
7. **健康警示**：注意检查 `review_conclusion.health_alert` 字段，如果为"1"表示存在健康风险，建议及时就医
8. **智能诊断推送**：如果 `intelligent_diagnosis_push` 为 true，建议引导用户使用智能问诊功能进一步诊断
9. **评分格式**：`scores` 对象中的各项评分是字符串格式，需要转换为数字后再进行计算或展示
10. **专业建议**：报告仅供参考，不能替代专业兽医的诊断和治疗
11. **数据安全**：报告包含宠物的敏感健康信息，请妥善保管

## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    tag="health-check"
    type="get"
    path="/medical-record"
    version="v2"
  />
</ClientOnly>
