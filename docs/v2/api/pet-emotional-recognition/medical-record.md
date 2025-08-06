# 获取识别报告说明文档
---
开发者需要按照如下步骤完成：
生成识别报告成功后，开发者即可调用获取识别报告。默认返回JSON格式的详细报告数据，也可通过参数指定返回HTML格式的报告内容或报告链接。

## 调用接口：
**请求方式：** `GET（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/medical-record?report_id=[MEDICAL_RECORD_ID]&token=[ACCESS_TOKEN]`

## 参数列表：
### Query 参数
| 名称      | 类型   | 必填 | 说明                                                                                  |
| --------- | ------ | ---- | ------------------------------------------------------------------------------------- |
| report_id | string | 是   | medical_record_id【通过 [/session-record/session-start](./session-start.md)接口获取】 |
| token     | string | 是   | 登录凭证                                                                              |
| format    | string | 否   | 返回格式，可选值：`json`（默认值，返回详细JSON数据）、`html`（返回HTML内容或链接）     |
| html_type | string | 否   | 当format=html时生效，可选值：`content`（返回HTML字符串）或`link`（返回HTML报告链接）   |

## 返回结果：

### 默认或format=json时（返回详细JSON数据）
```json
{
    "data": {
        "created_at": "xxxx-xx-xxT10:14:41",
        "id": 123,
        "is_paid": 123,
        "module_type": 123,
        "pet_profile_id": 123,
        "report": "{}",
        "report_status": 2,
        "report_time": "xxxx-xx-xxT10:15:04",
        "session_id": "780db10210-21dc-247c4-938d-5928d5fd21a6e",
        "stage": null,
        "status": 2,
        "sub_module_type": "2",
        "summary": "",
        "updated_at": "xxx-xx-xxT10:15:04"
    },
    "message": "Get successfully.",
    "success": true // 返回成功状态
}
```

### 当format=html且html_type=content时（返回HTML字符串）
```json
{
    "data": {
        "created_at": "xxxx-xx-xxT10:14:41",
        "id": 123,
        "is_paid": 123,
        "module_type": 123,
        "pet_profile_id": 123,
        "report": "<!DOCTYPE html><html><head><meta charset=\"UTF-8\"><title>宠物情绪识别报告</title><style>body{font-family: Arial, sans-serif; margin: 20px;} .header{background-color: #f0f8ff; padding: 20px; border-radius: 5px; margin-bottom: 20px;} .section{margin-bottom: 30px; padding: 15px; border-left: 4px solid #4CAF50;} h1, h2, h3{color: #333;} ul{line-height: 1.6;}</style></head><body><div class=\"header\"><h1>宠物情绪识别报告</h1><p>报告ID: 123</p><p>生成时间: xxxx-xx-xx 10:14:41</p></div><div class=\"section\"><h2>识别结果</h2><p>经过分析，该宠物当前情绪状态为开心。识别依据：尾巴上翘摆动，耳朵向前，眼神明亮，嘴角微微上扬。</p></div><div class=\"section\"><h2>情绪解读</h2><ul><li>状态：开心</li><li>表现：活跃、友好、放松</li><li>建议：保持当前环境和互动方式，有助于宠物心理健康</li></ul></div></body></html>",
        "report_status": 2,
        "report_time": "xxxx-xx-xxT10:15:04",
        "session_id": "780db10210-21dc-247c4-938d-5928d5fd21a6e",
        "stage": null,
        "status": 2,
        "sub_module_type": "2",
        "summary": "",
        "updated_at": "xxx-xx-xxT10:15:04"
    },
    "message": "Get successfully.",
    "success": true
}
```

### 当format=html且html_type=link时（返回HTML报告链接）
```json
{
    "data": {
        "created_at": "xxxx-xx-xxT10:14:41",
        "id": 123,
        "is_paid": 123,
        "module_type": 123,
        "pet_profile_id": 123,
        "report": "https://ms-ai.chongzhiling.com/report/view/123.html",
        "report_status": 2,
        "report_time": "xxxx-xx-xxT10:15:04",
        "session_id": "780db10210-21dc-247c4-938d-5928d5fd21a6e",
        "stage": null,
        "status": 2,
        "sub_module_type": "2",
        "summary": "",
        "updated_at": "xxx-xx-xxT10:15:04"
    },
    "message": "Get successfully.",
    "success": true
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
| report          | object | 报告内容，根据format参数返回不同格式的数据 |
| report_status       | string | 报告状态 0-未生成 1-生成中 2-已完成 3-生成失败                 |
| report_time     | string | 报告时间，格式为 ISO 8601               |
| session_id      | string | 会话ID，用于管理会话上下文               |
| stage           | null   | 当前阶段，当前为 null                    |
| status          | number | 状态值，2 表示某个特定状态               |
| sub_module_type | string | 子模块类型，值为 "2"                     |
| summary         | string | 文字总结内容，包含图文信息，报告内容及注意事项 |
| updated_at      | string | 更新时间，格式为 ISO 8601               |

## 使用说明

### 返回详细JSON数据（默认方式）
当`format`参数未指定或设置为`json`时，接口将返回完整的JSON格式报告数据，包含所有详细信息。

### 返回HTML字符串
当`format`参数设置为`html`且`html_type`参数设置为`content`时，接口将直接返回完整的HTML格式报告内容。客户端可以直接将该内容渲染到网页中展示。

### 返回报告链接
当`format`参数设置为`html`且`html_type`参数设置为`link`时，接口将返回一个可访问的HTML报告链接。客户端可以引导用户在浏览器中打开该链接查看报告。

## 注意事项
1. **默认行为**：接口默认返回详细JSON数据，保持与原有接口的兼容性。
2. **格式选择**：通过`format`和`html_type`参数组合可以灵活选择返回格式。
3. **安全性**：通过链接方式访问报告时，链接中包含了访问令牌以确保安全性。
4. **报告内容**：完整的识别报告内容包括识别结果和相关说明信息，供用户参考。
5. **报告保存**：用户可以保存或分享报告，以便后续查阅。

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