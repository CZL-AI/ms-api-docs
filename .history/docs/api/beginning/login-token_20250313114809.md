# access_token登录凭证
---
`access_token`是宠智灵API的唯一凭证，用于验证调用者的身份。无论是调用API接口还是嵌入式H5页面，都需要使用`access_token`。因此，开发者需要妥善保存这个凭证，并定期更新，以防止它失效。

## 调用接口
**请求方式：** `GET（HTTPS）`  
**请求地址：** `https://auth.chongzhiling.com/token/accessToken?corp_id=[CORP_ID]&user_id=[USER_ID]`

**参数列表：**

| 参数    | 含义                                                           |
| ------- | -------------------------------------------------------------- |
| corp_id | 企业ID: 每个企业都拥有唯一的corpid，获取此信息可在管理后台查看 |
| user_id | 用户ID: 接入方系统的用户唯一标识                               |

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


