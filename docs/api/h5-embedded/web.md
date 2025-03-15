# Web 移动端嵌入 H5 页面说明文档
---
接入Web移动端，开发者需要按照如下步骤完成：

### 第一步：获取服务嵌入链接地址
1. 获取商户登录凭证：`access_token` 来鉴权调用者身份。（已有忽略）

2. 登录[商家后台](https://platform.chongzhiling.com/)，获取服务嵌入链接地址。

### 第二步：进入开发阶段
**链接地址参数说明：**
| 名称         | 类型   | 必填 | 说明     |
| ------------ | ------ | ---- | -------- |
| access_token | string | 是   | 登录凭证 |
| petId        | number | 否   | 宠物ID   |

1. 在web项目中新增一个页面，并在页面中使用如下代码：
```javascript
const baseUrl = "https://platform.chongzhiling.com"; // 登录商家后台，获取服务嵌入链接地址。
const access_token = "access_token"; // 登录凭证
const putId = "petId"; // 宠物Id

// 构造带参数的 URL
const urlWithParams = [baseUrl]?access_token={encodeURIComponent(access_token)}&petId={encodeURIComponent(petId)};

// 将 URL 设置为 iframe 的 src
document.write(<iframe src="[urlWithParams]" title="H5 页面"></iframe>);
```

1. 如果不做iframe嵌入，您还可以直接跳转到我们的H5页面。
```javascript
window.location.href = 'https://h5.chongzhiling.com?access_token=[登录凭证]&petId=[宠物ID]' // 登录商家后台，获取服务嵌入链接地址。
```

**注意:**

- petId不传入该字段时，如果用户没有新建过宠物档案，我们将会在嵌入页面中先跳转新建宠物档案的入口。

- 如果商家需要自带用户的宠物信息，可以通过putId该字段进行传入。但请注意，前提是必须先调用宠物档案API的接口。用户在商户小程序中新建宠物档案时，顺带将宠物部分信息存入我们的数据库，我们才能获取传入的宠物ID的信息。