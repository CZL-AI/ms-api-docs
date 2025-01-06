# MS-API-DOCS

宠智灵接口文档

# 用户登录接口

## 接口说明
用于系统用户登录认证，获取访问令牌


## 请求参数

| 参数名   | 类型   | 必填 | 说明   |
|----------|--------|------|--------|
| username | string | 是   | 用户名 |
| password | string | 是   | 密码   |

## 返回示例

```json
{
  "code": 200,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expires_in": 7200
  },
  "message": "登录成功"
}
```

## 接口调试

<script setup>
import SwaggerUI from '../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    tag="用户管理" 
    path="/user/login" 
  />
</ClientOnly>





