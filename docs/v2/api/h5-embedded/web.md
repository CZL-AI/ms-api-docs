# Web 移动端嵌入 H5 页面说明文档

## 功能介绍
---
本文档介绍如何在Web移动端网站或应用中嵌入宠物智灵提供的H5页面服务。通过嵌入H5页面，用户的Web应用可以快速集成宠物智灵提供的各种宠物健康服务，如宠物品种识别、宠物情绪识别、宠物健康检测等功能，无需自行开发这些复杂功能，大大节省开发时间和成本。

## 实现方式
---
实现方式有两种：一是通过iframe标签嵌入宠物智灵提供的H5页面，二是直接通过URL跳转到宠物智灵的H5页面。两种方式都需要传递必要的参数（如access_token和宠物ID）。文档提供了详细的代码示例和参数说明，帮助开发者快速完成集成。

## 使用场景
---
- **宠物相关网站功能扩展**：为您的宠物网站增加专业的宠物健康服务功能
- **宠物电商网站增值**：在宠物电商网站中提供宠物健康服务，提升用户体验
- **宠物社区网站互动增强**：为宠物社区网站增加更多互动功能和专业服务
- **宠物医疗网站功能补充**：为宠物医疗网站提供更多AI辅助诊断功能

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
const baseUrl = "https://h5.chongzhiling.com"; // 登录商家后台，获取服务嵌入链接地址。
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