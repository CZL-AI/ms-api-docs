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
   - `report_status = 0`：报告任务已创建，等待处理
   - `report_status = 1`：报告正在生成中，继续轮询
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

### 报告生成完成（report_status = 2）
```json
{
    "data": {
        "created_at": "2025-11-25T09:11:08",
        "id": 122729,
        "image_recognition_status": 0,
        "is_paid": 1,
        "lang": "zh",
        "module_type": 18,
        "pet_info": {
            "avatar": null,
            "id": 3810,
            "name": "汤圆"
        },
        "pet_profile_id": 3810,
        "report": "{\"report_6\": [{\"id\": 1, \"category\": \"diet\", \"question\": \"吃完饭后，TA会经常打嗝或排气（放屁）吗？\", \"options\": [{\"option_id\": 1, \"text\": \"几乎不会，消化系统很棒\"}, ...], \"answer\": {\"option_id\": 1, \"text\": \"几乎不会，消化系统很棒\"}}, ...], \"scores\": {\"diet_management\": 87.5, \"daily_activity\": 81.25, \"living_habits\": 81.25, \"cleaning_care\": 81.25, \"health_status\": 81.25}, \"review_conclusion\": {\"conclusion\": \"汤圆整体状态良好，体重偏高是主要问题。日常运动得分较低，运动不足导致能量消耗减少，进而引发体重增加。\", \"maintenance_advice\": \"您的宠物体重偏高，请考虑减少每日饮食量或增加适当运动。这与【日常运动】得分较低密切相关，当前的运动量不足以消耗饮食摄入的能量...\", \"health_alert\": \"1\", \"intelligent_diagnosis_push\": false}, \"comprehensive_score\": 82, \"health_percentage\": 74.0, \"improvement_suggestions\": {\"diet_nutrition\": \"汤圆体重9公斤，饮食以主粮为主，建议每日干粮摄入量控制在60-80克...\", \"living_environment\": \"汤圆为室内猫，建议每日安排15分钟窗台观景时间...\", \"daily_care\": \"为预防毛发打结和皮肤问题，建议每日梳理毛发5分钟...\", \"exercise_advice\": \"汤圆活动较单一，建议每周带户外散步2次，每次30分钟...\", \"health_advice\": \"为预防牙周病，建议建立每周刷牙3-4次习惯；每6个月进行一次体内外驱虫...\"}}",
        "report_info": {
            "content": "无",
            "img_url": null,
            "report_url": null,
            "title": "无"
        },
        "report_status": 2,
        "report_time": "2025-11-25T09:11:12",
        "report_type": "v2",
        "session_id": "df123cd1-d743-4318-8059-2f34c5f563e4",
        "stage": null,
        "status": 2,
        "sub_module_type": null,
        "summary": null,
        "updated_at": "2025-11-25T09:26:56"
    },
    "message": "Get successfully.",
    "success": true
}
```

### 报告生成中（report_status = 1）
当报告正在生成时，返回的数据中 `report` 字段只包含问题和答案记录，不包含评分和建议：
```json
{
    "data": {
        "created_at": "2025-11-25T06:00:10",
        "id": 122659,
        "image_recognition_status": 0,
        "is_paid": 1,
        "lang": "zh",
        "module_type": 18,
        "pet_info": {},
        "pet_profile_id": 0,
        "report": "{\"report_6\": [{\"id\": 1, \"category\": \"diet\", \"question\": \"TA的饮食中会搭配湿粮（罐头、湿粮包等）吗？\", \"options\": [...], \"answer\": {\"option_id\": 1, \"text\": \"每天都有，科学搭配，水分营养双补充\"}}, ...]}",
        "report_info": {
            "content": "无",
            "img_url": null,
            "report_url": null,
            "title": "无"
        },
        "report_status": 1,
        "report_time": "2025-11-25T06:19:15",
        "report_type": "v2",
        "session_id": "0156bcde-ff28-4097-9da9-42773f79b2ed",
        "stage": null,
        "status": 2,
        "sub_module_type": null,
        "summary": null,
        "updated_at": "2025-11-25T09:26:56"
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
| report_status           | number  | 报告状态：0=等待处理，1=生成中，2=已完成  |
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
- **`diet_management`**：饮食管理评分（0-100分，number类型）
- **`daily_activity`**：日常活动评分（0-100分，number类型）
- **`living_habits`**：生活习惯评分（0-100分，number类型）
- **`cleaning_care`**：清洁护理评分（0-100分，number类型）
- **`health_status`**：健康状态评分（0-100分，number类型）

示例：
```json
{
  "diet_management": 87.5,
  "daily_activity": 81.25,
  "living_habits": 81.25,
  "cleaning_care": 81.25,
  "health_status": 81.25
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
  "conclusion": "汤圆整体状态良好，体重偏高是主要问题。日常运动得分稍低，运动量不足导致能量消耗不够，进而引发体重增加。",
  "maintenance_advice": "您的宠物体重偏高，请考虑减少每日饮食量或增加适当运动。这与【日常运动】得分较低密切相关，当前的运动量不足以消耗饮食摄入的能量，是导致体重问题的核心原因。因此，建议您每周增加户外活动次数和时长，至少每次30分钟以上，并在室内增加互动游戏时间。其次，饮食管理得分较高，但仍需严格控制零食摄入，避免额外热量积累。建议保持饮食结构稳定，避免分享人类食物，确保饮食均衡。",
  "health_alert": "1",
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
  "diet_nutrition": "汤圆体重9公斤，食欲极佳，建议每日干粮摄入量控制在60-80克，零食不超过总热量的10%，分3-4次投喂，保障营养均衡。",
  "living_environment": "为满足英短银渐层的好奇心，建议每日安排15分钟嗅闻垫寻宝游戏，保持环境清洁，每周清洗窝垫至少1次，提升生活趣味与舒适度。",
  "daily_care": "汤圆毛发浓密，建议每日梳理毛发5分钟，防止毛球形成；每1-2周修剪一次指甲，保持爪部健康，避免抓伤和不适。",
  "exercise_advice": "汤圆活动时间不足，建议每周至少带户外散步2次，每次30分钟，室内每日用逗猫棒互动游戏30分钟，促进身心健康发展。",
  "health_advice": "为预防寄生虫和保持健康，建议每6个月进行一次体内外驱虫，每年安排1次全面体检，按时更新疫苗，保障汤圆健康成长。"
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
9. **专业建议**：报告仅供参考，不能替代专业兽医的诊断和治疗
10. **数据安全**：报告包含宠物的敏感健康信息，请妥善保管

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
