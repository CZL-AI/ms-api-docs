# 养宠百科-会话记录

## 接口说明
---
开发者可调用本接口获取指定会话的历史消息记录，包含用户提问与 AI 回答的完整对话内容，适用于会话回放、历史查看等场景。

## 调用接口：
**请求方式：** `GET（HTTPS）`
**请求地址：** `https://ms-ai.chongzhiling.com/api/v1.0/ai-b/session-record?token=[ACCESS_TOKEN]&session_id=[SESSION_ID]`

## 参数列表：

| 名称       | 类型   | 必填 | 说明                               |
| ---------- | ------ | ---- | ---------------------------------- |
| token      | string | 是   | 登录凭证，用于身份验证             |
| session_id | string | 是   | 会话ID，通过开始会话接口获取       |

## 返回结果：
```json
{
    "data": {
        "history": [
            {
                "content": null,
                "image": null,
                "role": "user"
            },
            {
                "content": "夏天宠物总是趴在地上不动，是中枢了嘛 ？",
                "image": null,
                "role": "user"
            },
            {
                "content": "### 🌡️ 宠物夏季趴地行为分析与中暑辨别\n\n1. **🌡️ 测量直肠温度判断核心体温**：正常犬猫的体温范围在38.0°C至39.2°C。如果体温超过40°C（104°F），则极高概率是Heatstroke（中暑）。请使用电子体温计涂抹润滑剂插入直肠2-3厘米，测量约60秒。若体温正常且精神尚可，趴在地上通常只是利用传导散热的正常行为。\n\n-\n\n2. **👅 观察呼吸频率与粘膜颜色**：正常静息呼吸频率为每分钟15-30次。中暑时会出现剧烈的Panting（喘息），频率可达每分钟200次以上。请检查牙龈粘膜，若由粉红变为深红、砖红甚至紫绀色，说明循环系统已受压。此时应立即用20°C左右的常温水打湿宠物腹部和肉垫，并开启风扇物理降温，严禁使用冰水以免血管收缩阻碍散热。\n\n-\n\n3. **🧠 理解中暑对身体系统的损害**：中暑会引发全身炎症反应综合征（SIRS）。高温直接破坏细胞蛋白，导致多器官功能障碍（MODS），特别是脑水肿、急性肾衰竭和胃肠道粘膜脱落。热应激还会诱发弥散性血管内凝血（DIC），这是一种严重的凝血功能障碍，会导致全身性出血，危及生命。\n\n-\n\n4. **💧 环境干预与水分补充**：确保室内环境温度低于27°C，并提供24小时充足的常温饮水。如果宠物意识清醒，可少量多次诱导饮水。若已出现呕吐或神志不清，切勿强行灌水，以防引起Aspiration pneumonia（吸入性肺炎）。作为您的AI医生，我会持续监测这些量化指标来帮您判断病情。",
                "image": null,
                "role": "assistant"
            }
        ]
    },
    "message": "Get successfully.",
    "success": true // 成功返回true，失败返回false
}
```

## 返回参数说明：
| 名称    | 类型     | 说明                                         |
| ------- | -------- | -------------------------------------------- |
| history | object[] | 会话历史消息列表                             |
| &nbsp;&nbsp;role    | string   | 消息角色，`user` 表示用户，`assistant` 表示 AI |
| &nbsp;&nbsp;content | string \| null | 消息文本内容，首条消息可能为 null    |
| &nbsp;&nbsp;image   | string \| null | 消息图片内容，暂未使用，固定为 null  |

## 注意事项：
1. **会话有效性**：`session_id` 须通过开始会话接口获取，传入无效 ID 将返回空历史列表
2. **消息顺序**：history 数组按对话时间顺序排列，奇数索引为用户消息，偶数索引为 AI 回复
3. **空内容处理**：首条 user 消息的 `content` 可能为 null，客户端渲染时需做空值判断

## 接口调试：

<script setup>
import SwaggerUI from '../../../../src/components/SwaggerUI.vue'
</script>

<ClientOnly>
  <SwaggerUI
    tag="session"
    type="get"
    path="/session-record"
  />
</ClientOnly>
