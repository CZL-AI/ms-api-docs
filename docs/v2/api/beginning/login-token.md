# access_token登录凭证

## 功能介绍
---
本文档介绍了如何获取和使用宠智灵API的登录凭证（access_token）。access_token是调用宠智灵所有API接口和嵌入式H5页面的必要凭证，用于验证开发者的身份和权限。通过本文档提供的接口，开发者可以获取有效的access_token，并在后续的API调用中使用。

## 使用方法
---
开发者需要通过HTTP GET请求获取access_token，请求时需要提供企业ID（corp_id）和用户ID（user_id）两个参数。获取到的access_token有效期为两天（172800秒），开发者需要在过期前重新获取，以确保API调用的连续性。建议实现access_token的缓存和自动刷新机制，避免频繁请求影响性能。

## 适用场景
---
- **API接口调用**：所有宠智灵API接口调用都需要使用access_token进行身份验证
- **H5页面嵌入**：在APP、Web或小程序中嵌入宠智灵H5页面时需要提供access_token
- **第三方应用集成**：第三方应用与宠智灵平台集成时的身份认证
- **企业应用开发**：企业内部应用开发时的用户身份验证和权限管理

---
`access_token`是宠智灵API的唯一凭证，用于验证调用者的身份。无论是调用API接口还是嵌入式H5页面，都需要使用`access_token`。因此，开发者需要妥善保存这个凭证，并定期更新，以防止它失效。

## 调用接口
**请求方式：** `GET（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/auth/token/accessToken?corp_id=[CORP_ID]&user_id=[USER_ID]`

**参数列表：**

| 参数    | 含义                                                                                                                                                                                 |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| corp_id | 企业ID: 每个企业都拥有唯一的corpid，获取此信息可在管理后台查看                                                                                                                       |
| user_id | 用户ID: 接入方系统的用户唯一标识，用于在SaaS平台中唯一标识和关联用户数据。该ID由接入方系统提供，作为用户数据在SaaS平台中的主键标识。若不考虑多用户场景，接入方可使用任意唯一标识符。 |

**返回结果：**
```json
{
    "code": 200, // 200表示成功，其他值表示失败
    "message": "success",
    "data": {
        "access_token": "string",
        "expires_in": 172800
    }
}
```
**返回参数说明：**
| 参数         | 类型   | 含义                 |
| ------------ | ------ | -------------------- |
| access_token | string | 获取到的凭证         |
| expires_in   | number | 凭证的有效时间（秒） |


## 接口调试
---
<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI 
    type="get"
    tag="Token 认证服务"
    path="/token/accessToken" 
  />
</ClientOnly>