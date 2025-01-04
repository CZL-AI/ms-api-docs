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
        "sub_module_type": "3",
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
| report          | object | 报告内容，格式为 JSON 字符串，当前为空 JSON 对象 |
| report_time     | string | 报告时间，格式为 ISO 8601               |
| session_id      | string | 会话ID，用于管理会话上下文               |
| stage           | null   | 当前阶段，当前为 null                    |
| status          | number | 状态值，2 表示某个特定状态               |
| sub_module_type | string | 子模块类型，值为 "3"                     |
| summary         | string | 文字总结内容，包含图文信息，报告内容及注意事项 |
| updated_at      | string | 更新时间，格式为 ISO 8601               |


## 接口调试：
---
<script setup>
import SwaggerUI from '../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    tag="medical-record"
    type="get"
    path="/medical-record" 
  />
</ClientOnly>

