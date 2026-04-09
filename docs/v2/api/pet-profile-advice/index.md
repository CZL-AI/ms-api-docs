# 宠物档案建议

## 接口说明
---
宠物档案建议模块用于基于已有宠物档案，直接生成并查询两类独立建议：

- 喂养建议：返回每日喂食量、蛋白质、碳水、纤维、脂肪、营养补充和喂食推荐。
- 养成建议：返回适合移动端展示的分栏建议，通常包含健康状况、行为表现、训练效果、饮食建议等模块。

这组接口采用独立的外部接口设计，不与原有宠物档案 CRUD 接口混用。

## 接口调用流程
---
1. 调用 `POST /pet-profile/feeding-advice` 或 `POST /pet-profile/growth-advice` 生成建议。
2. 首页概览场景，调用 `GET /pet-profile/advice-overview` 获取当前宠物档案下两类建议的最新摘要。
3. 历史列表场景，调用 `GET /pet-profile/advice-records` 按宠物档案分页查询建议记录。
4. 详情页场景，调用 `GET /pet-profile/advice-record` 根据 `medical_record_id` 获取单条建议完整内容。

## 接口列表
---
- 生成喂养建议：`POST /pet-profile/feeding-advice`
- 生成养成建议：`POST /pet-profile/growth-advice`
- 获取建议概览：`GET /pet-profile/advice-overview`
- 获取建议历史列表：`GET /pet-profile/advice-records`
- 获取建议历史详情：`GET /pet-profile/advice-record`
