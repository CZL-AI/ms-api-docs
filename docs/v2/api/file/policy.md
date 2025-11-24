# 图片上传接口
---
获取OSS上传凭证，用于客户端直传文件到OSS存储


## 调用接口
**请求方式：** `POST（HTTPS）`  
**请求地址：** `https://ms-ai.chongzhiling.com/file/upload-policy?token=[TOKEN]`


## **返回结果：**
```json
{
    "code": 200,
    "message": "success",
    "data": {
        "accessKeyId": "STS.xxxxxxx",
        "accessKeySecret": "8i1isYxxxxx",
        "securityToken": "CAISxxxxxxx",
        "expiration": "2025-09-11T06:20:10Z",
        "bucket": "czl-xxx",
        "endpoint": "oss-xxxx.aliyuncs.com"
    }
}
```
## **返回参数说明：**
| 参数 | 类型   | 含义           |
| ---- | ------ | -------------- |
| accessKeyId | string | 临时访问密钥ID |
| accessKeySecret | string | 临时访问密钥 |
| securityToken | string | 安全令牌 |
| expiration | string | 凭证过期时间 |
| bucket | string | OSS存储桶名称 |
| endpoint | string | OSS接入点 |

打开[直连测试页面](https://ms-ai.chongzhiling.com/test-oss-upload.html)

https://ms-ai.chongzhiling.com/test-oss-upload.html?token=TOKEN

## **客户端示例代码：**
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OSS直传测试页面</title>
    <script src="https://gosspublic.alicdn.com/aliyun-oss-sdk-6.17.1.min.js"></script>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        
        .container {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        h1 {
            color: #333;
            text-align: center;
            margin-bottom: 30px;
        }
        
        .upload-section {
            margin-bottom: 30px;
            padding: 20px;
            border: 2px dashed #ddd;
            border-radius: 8px;
            text-align: center;
        }
        
        .file-input {
            margin: 15px 0;
        }
        
        .file-input input[type="file"] {
            margin: 10px 0;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            width: 100%;
        }
        
        .btn {
            background: #007bff;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin: 5px;
            font-size: 14px;
        }
        
        .btn:hover {
            background: #0056b3;
        }
        
        .btn:disabled {
            background: #ccc;
            cursor: not-allowed;
        }
        
        .progress {
            width: 100%;
            height: 20px;
            background: #f0f0f0;
            border-radius: 10px;
            overflow: hidden;
            margin: 15px 0;
            display: none;
        }
        
        .progress-bar {
            height: 100%;
            background: #28a745;
            width: 0%;
            transition: width 0.3s ease;
        }
        
        .log {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            font-family: monospace;
            font-size: 12px;
            max-height: 300px;
            overflow-y: auto;
            border: 1px solid #ddd;
        }
        
        .success {
            color: #28a745;
        }
        
        .error {
            color: #dc3545;
        }
        
        .info {
            color: #17a2b8;
        }
        
        .credential-info {
            background: #e9ecef;
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            font-size: 12px;
            word-break: break-all;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>OSS 直传测试页面</h1>
        
        <div class="upload-section">
            <h3>选择文件上传</h3>
            <div class="file-input">
                <input type="file" id="fileInput" multiple>
                <div>
                    <button class="btn" onclick="getCredentials()">获取上传凭证</button>
                    <button class="btn" onclick="uploadFiles()" id="uploadBtn" disabled>开始上传</button>
                    <button class="btn" onclick="clearLog()">清空日志</button>
                </div>
            </div>
            
            <div class="progress" id="progressContainer">
                <div class="progress-bar" id="progressBar"></div>
            </div>
            
            <div id="uploadStatus"></div>
        </div>
        
        <div class="credential-info" id="credentialInfo" style="display: none;">
            <h4>OSS凭证信息:</h4>
            <div id="credentialDetails"></div>
        </div>
        
        <div class="log" id="logContainer">
            <div class="info">等待操作...</div>
        </div>
    </div>

    <script>
        let ossCredentials = null;
        let selectedFiles = [];
        
        // 从URL参数获取token
        function getTokenFromURL() {
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');
            if (!token) {
                log('❌ URL中未找到token参数，请在URL中添加?token=xxx', 'error');
                return null;
            }
            return token;
        }
        
        // 获取OSS上传凭证
        async function getCredentials() {
            log('正在获取OSS上传凭证...', 'info');
            
            const token = getTokenFromURL();
            if (!token) {
                return;
            }
            
            try {
                const response = await fetch(`https://ms-ai.chongzhiling.com/file/upload-policy?token=${token}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: {}
                });
                
                const result = await response.json();
                
                if (result.code === 200) {
                    ossCredentials = result.data;
                    log('✅ OSS凭证获取成功', 'success');
                    
                    // 显示凭证信息
                    document.getElementById('credentialInfo').style.display = 'block';
                    document.getElementById('credentialDetails').innerHTML = `
                        <strong>Bucket:</strong> ${ossCredentials.bucket}<br>
                        <strong>Endpoint:</strong> ${ossCredentials.endpoint}<br>
                        <strong>AccessKeyId:</strong> ${ossCredentials.accessKeyId}<br>
                        <strong>到期时间:</strong> ${ossCredentials.expiration}
                    `;
                    
                    // 启用上传按钮
                    document.getElementById('uploadBtn').disabled = false;
                } else {
                    log(`❌ 获取凭证失败: ${result.msg}`, 'error');
                }
            } catch (error) {
                log(`❌ 网络错误: ${error.message}`, 'error');
            }
        }
        
        // 上传文件到OSS
        async function uploadFiles() {
            const fileInput = document.getElementById('fileInput');
            const files = fileInput.files;
            
            if (!files.length) {
                log('❌ 请先选择文件', 'error');
                return;
            }
            
            if (!ossCredentials) {
                log('❌ 请先获取OSS凭证', 'error');
                return;
            }
            
            const progressContainer = document.getElementById('progressContainer');
            const progressBar = document.getElementById('progressBar');
            
            progressContainer.style.display = 'block';
            
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                const progress = ((i + 1) / files.length) * 100;
                
                log(`📤 正在上传文件 ${i + 1}/${files.length}: ${file.name}`, 'info');
                
                try {
                    const fileUrl = await uploadSingleFile(file);
                    log(`✅ 文件上传成功: ${file.name}`, 'success');
                    log(`🔗 文件链接: ${fileUrl}`, 'success');
                } catch (error) {
                    log(`❌ 文件上传失败 ${file.name}: ${error.message}`, 'error');
                }
                
                progressBar.style.width = `${progress}%`;
            }
            
            log('🎉 所有文件上传完成!', 'success');
        }
        
        // 上传单个文件
        async function uploadSingleFile(file) {
            const timestamp = Date.now();
            const objectKey = `ms-ai-b/${timestamp}_${file.name}`;
            
            try {
                // 使用OSS SDK方式上传（需要引入OSS SDK）
                const client = new OSS({
                    accessKeyId: ossCredentials.accessKeyId,
                    accessKeySecret: ossCredentials.accessKeySecret,
                    stsToken: ossCredentials.securityToken,
                    bucket: ossCredentials.bucket,
                    endpoint: ossCredentials.endpoint
                });
                
                const result = await client.put(objectKey, file);
                return result.url;
                
            } catch (sdkError) {
                log('OSS SDK方式失败，尝试表单上传...', 'info');
                
                // 备用方案：表单上传
                const ossUrl = `https://${ossCredentials.bucket}.${ossCredentials.endpoint}`;
                
                const formData = new FormData();
                formData.append('key', objectKey);
                formData.append('OSSAccessKeyId', ossCredentials.accessKeyId);
                formData.append('x-oss-security-token', ossCredentials.securityToken);
                formData.append('file', file);
                
                const response = await fetch(ossUrl, {
                    method: 'POST',
                    body: formData,
                    mode: 'cors'
                });
                
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`HTTP ${response.status}: ${errorText}`);
                }
                
                return `https://${ossCredentials.bucket}.${ossCredentials.endpoint}/${objectKey}`;
            }
        }
        
        // 日志函数
        function log(message, type = 'info') {
            const logContainer = document.getElementById('logContainer');
            const timestamp = new Date().toLocaleTimeString();
            const logEntry = document.createElement('div');
            logEntry.className = type;
            logEntry.innerHTML = `[${timestamp}] ${message}`;
            logContainer.appendChild(logEntry);
            logContainer.scrollTop = logContainer.scrollHeight;
        }
        
        // 清空日志
        function clearLog() {
            document.getElementById('logContainer').innerHTML = '<div class="info">日志已清空...</div>';
        }
        
        // 文件选择事件
        document.getElementById('fileInput').addEventListener('change', function(e) {
            const files = e.target.files;
            if (files.length > 0) {
                log(`📁 已选择 ${files.length} 个文件:`, 'info');
                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    const sizeStr = file.size > 1024 * 1024 
                        ? `${(file.size / 1024 / 1024).toFixed(2)} MB`
                        : `${(file.size / 1024).toFixed(2)} KB`;
                    log(`  - ${file.name} (${sizeStr})`, 'info');
                }
            }
        });
    </script>
</body>
</html>
```