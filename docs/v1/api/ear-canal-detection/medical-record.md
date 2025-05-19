# 获取识别报告说明文档
---
开发者需要按照如下步骤完成：
生成识别报告成功后，开发者即可调用获取识别报告。

## 调用接口：
**请求方式：** `GET（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/medical-record?report_id=[MEDICAL_RECORD_ID]&token=[ACCESS_TOKEN]`

## 参数列表：

| 名称      | 类型   | 必填 | 说明                                                                                  |
| --------- | ------ | ---- | ------------------------------------------------------------------------------------- |
| report_id | string | 是   | medical_record_id【通过 [/session-record/session-start](./session-start.md)接口获取】 |
| token     | string | 是   | 登录凭证                                                                              |

## 返回结果：
```json
{
    "data": {
        "created_at": "xxxx-xx-xxT10:14:41",
        "id": 123,
        "is_paid": 123,
        "module_type": 123,
        "pet_profile_id": 123,
        "report": "{}",
        "report_time": "xxxx-xx-xxT10:15:04",
        "session_id": "780db10210-21dc-247c4-938d-5928d5fd21a6e",
        "stage": null,
        "status": 2,
        "sub_module_type": "7",
        "summary": "",
        "updated_at": "xxx-xx-xxT10:15:04"
    },
    "message": "Get successfully.",
    "success": true // 返回成功状态
}
```

## 返回参数说明：
| 名称            | 类型   | 说明                                      |
|-----------------|--------|-------------------------------------------|
| created_at      | string | 创建时间，格式为 ISO 8601                |
| id              | number | 唯一标识符，ID                            |
| is_paid         | number | 是否已支付（1：已支付，0：未支付）       |
| module_type     | number | 模块类型，表示该数据属于哪个模块         |
| pet_profile_id  | number | 宠物资料ID，当前为 0，表示没有关联宠物   |
| report          | object | 报告内容，格式为 JSON 字符串 |
| report_time     | string | 报告时间，格式为 ISO 8601               |
| session_id      | string | 会话ID，用于管理会话上下文               |
| stage           | null   | 当前阶段，当前为 null                    |
| status          | number | 状态值，2 表示某个特定状态               |
| sub_module_type | string | 子模块类型，值为 "7"                     |
| summary         | string | 文字总结内容，包含图文信息，报告内容及注意事项 |
| updated_at      | string | 更新时间，格式为 ISO 8601               |

### report 字段说明：

| 字段名                        | 类型     | 说明 |
|------------------------------|----------|------|
| img_url                      | string   | 图片地址，展示耳道检测的原始图像。可用于查看具体的检测对象和分析区域。 |
| sub_module_type              | number   | 子模块类型，值为 `7`，表示该报告属于耳道检测模块。 |
| recg                         | object   | 检测识别结果对象，包含图片描述、详细检测报告、风险评估和护理建议等信息。 |
| recg.photo                   | string   | 图片描述信息，如“耳朵图”，表明当前分析的是哪种类型的图像内容。 |
| recg.report                  | array    | 报告内容列表，由多个检测项组成，每个检测项包含名称（name）和特征描述（feature）。 |
| recg.report.name             | string   | 检测项名称，如“外耳道”、“耳垢”、“耳廓”等，表示耳部的不同部位或观察点。 |
| recg.report.feature          | string   | 特征描述，详细说明该检测项的具体情况，包括是否存在异常及可能的问题。 |
| recg.report_risk             | array    | 风险评估列表，用于列出可能存在健康问题的风险项。 |
| recg.report_risk.name        | string   | 风险项名称，如“外耳道炎”、“耳螨”、“耳廓湿疹”等，表示宠物可能存在的疾病风险。 |
| recg.report_risk.risk        | string   | 风险等级，`"1"` 表示高风险，需要引起注意；`"0"` 表示低风险，当前未见明显问题。 |
| recg.report_risk.cause       | string   | 诊断依据，仅在 `"name": "诊断依据"` 的情况下出现，说明综合判断得出的结论原因。 |
| recg.suggest                 | object   | 建议内容对象，提供护理方案、具体建议和总结性指导。 |
| recg.suggest.content         | string   | 护理方案标题，如“🐶 炎症护理方案”，表明建议的主题方向。 |
| recg.suggest.description     | string   | 护理方案描述，解释当前耳部状况及处理建议。 |
| recg.suggest.options         | array    | 具体护理建议选项列表，每个条目包含标题（title）和描述（description）。 |
| recg.suggest.options.title   | string   | 建议标题，如“💧 清洁耳道”、“💊 局部用药”、“⚠️ 注意事项”等，明确建议的操作方向。 |
| recg.suggest.options.description | string | 建议描述，详细说明操作方法和注意事项。 |
| recg.suggest.summary         | string   | 总结性建议，简要概括整体护理流程和应对措施，便于快速理解主要操作。 |


## 接口调试：
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    tag="medical-record"
    type="get"
    path="/medical-record" 
  />
</ClientOnly>

