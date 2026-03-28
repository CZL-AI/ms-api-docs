# 多宠识别

请求方法：  
- POST

请求地址：  
- /pet-breed/detect  
- 完整前缀示例（视部署）：/ai/api/v1.0/ai/pet-breed/detect 或 /api/v2.0/ai-b/pet-breed/detect

入参：  
- 请求头（必需）
  - Authorization: Bearer <JWT_TOKEN>
  - Content-Type: multipart/form-data
  - Accept: application/json（可选）
- multipart/form-data 表单字段
  - image (file, 必需)：图片文件，字段名必须为 "image"
  - session_id (string, 可选)：用于将识别结果关联到会话/病历

返回（主要字段说明）：  
- detected: boolean — 是否识别到猫/狗及品种  
- message: string — 结果提示信息  
- result: object 或 null（detected=true 时通常有）
  - session_id: string  
  - class_name: string — 模型返回的品种标识（英文或特殊标识）  
  - cn_name: string — 中文品种名（若有）  
  - confidence: float — 置信度  
  - probability: int — 概率百分比  
  - image_url: string — 图片 OSS 地址  
- 特殊 class_name
  - "no_cat_dog"：未检测到猫或狗 → detected=false  
  - "no_recg"：未识别到品种 → detected=false

备注：  
- 若传入有效 session_id，服务会将报告保存到对应 MedicalRecord.report，并将 report_status 置为 2（已完成）。