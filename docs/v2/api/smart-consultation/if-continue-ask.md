# 10、是否继续问答【流式】 - 智能问诊模块

## 接口描述
---
该接口用于判断当前智能问诊流程是否需要继续提问。系统会根据已收集的信息评估是否还需要进一步交互以完善诊断依据。

## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/api/v2.0/ai-b/aidoc/if-continue-ask?token=[ACCESS_TOKEN][&is_sse=true]`

> ⚠️ 注意：当 `is_sse=true` 时，接口使用标准的SSE事件类型返回；否则使用传统的 `$` 结尾格式返回。

## 请求参数
```json
{
    "pet_profile_id": 3147,
    "session_id": "c139a49a-ca34-472d-9749-6cd976cbb937"
}
```

## 参数列表
### Query 参数
| 名称            | 类型    | 必填 | 说明                                    |
| --------------- | ------- | ---- | --------------------------------------- |
| token           | string  | 是   | 登录凭证，用于身份验证                  |
| is_sse          | boolean | 否   | 是否使用SSE格式返回，默认false          |

### Body 参数（`application/json`）
| 名称            | 类型   | 必填 | 说明                  |
| --------------- | ------ | ---- | --------------------- |
| pet_profile_id  | number | 是   | 宠物档案 ID，用于识别宠物信息            |
| session_id      | string | 是   | 会话唯一标识，用于维持上下文状态 

## 返回结果

### SSE格式返回（当 is_sse=true 时）

SSE事件类型说明：

```
event: start_stream
data: {"type":"content","data": None}

event: stream
data: {"type":"content","data": "[True]"}

event: end_stream
data: {"type":"content","data": None}

event: error
data: {"type":"content","data": None}
```

| 事件类型     | 说明           | 数据格式 |
|--------------|----------------|----------|
| start_stream | 流开始事件     | `{"type":"content","data": None}` |
| stream       | 数据流事件     | `{"type":"content","data": "[True]"}` 或 `{"type":"content","data": "[False]"}` |
| end_stream   | 流结束事件     | `{"type":"content","data": None}` |
| error        | 错误事件       | `{"type":"content","data": 错误信息}` |

### 传统格式返回（当 is_sse=false 或不传时）
```plaintext
"[True]\n$"
```

#### 返回值说明

| 返回值           | 含义                                                         |
|------------------|--------------------------------------------------------------|
| `[True]\n$`      | 表示需继续问诊，系统尚未收集足够信息完成诊断                |
| `[False]\n$`     | 表示已有足够信息，可以结束问诊并生成诊断总结                |
| `$`              | 流式响应结束标志，表示本次数据流传输已完成                  |

---

## 使用场景说明

该接口通常在每次用户回答后调用一次，用于判断是否需要：
- 继续引导用户输入更多信息；
- 结束当前问诊流程并进入报告生成阶段。

---

## 注意事项

1. **连接管理**：客户端应正确处理连接建立、数据接收和连接关闭流程
2. **错误处理**：需要监听error事件并适当处理错误情况
3. **字符编码**：确保正确处理UTF-8编码的中文内容
4. **超时设置**：设置合理的超时时间，避免长时间等待无响应
5. **重试机制**：网络中断时应实现自动重连机制
6. **安全性要求**：所有请求必须携带有效的 `token` 进行身份认证。

---

## 错误码说明

| error_code | 含义                             |
|------------|----------------------------------|
| 401        | token 鉴权失败                    |
| 400        | 请求参数缺失或格式错误            |
| 500        | 系统内部错误                      |


## 接口调试
---
<script setup>  
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'  
</script>  

<ClientOnly>  
  <SwaggerUI   
    tag="if-continue-ask"   
    type="post"   
    path="/aidoc-exotic/if-continue-ask"
    version="v2"   
  />  
</ClientOnly>  



