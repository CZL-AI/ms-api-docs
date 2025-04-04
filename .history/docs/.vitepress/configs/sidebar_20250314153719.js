export default {
  '/': getApiSidebar(),
  // '/components/': getComponentsSidebar(),
  // '/guide/': getGuideSidebar()
}

function getApiSidebar() {
  return [
    {
      text: '起步',
      collapsible: true,
      items: [
        {
          items: [
            { text: '大模型简介', link: '/api/beginning/llm' },
            { text: '登录凭证', link: '/api/beginning/login-token' },
            { text: '错误码', link: '/api/beginning/error-code' },
          ]
        }
      ]
    },
    {
      text: 'H5嵌入式',
      collapsible: true,
      items: [
        {
          items: [
            { text: '微信小程序', link: '/api/h5-embedded/wechat-app' },
            { text: 'APP', link: '/api/h5-embedded/native-app' },
            { text: 'Web', link: '/api/h5-embedded/web' },
          ]
        }
      ]
    },
    {
      text: '宠物档案',
      collapsible: true,
      items: [
        {
          items: [
            { text: '新增档案', link: '/api/pet-profile/add' },
            { text: '删除档案', link: '/api/pet-profile/delete' },
          ]
        }
      ]
    },
    {
      text: '宠物品种识别',
      collapsible: true,
      items: [
        {
          items: [
            { text: '开始会话流程', link: '/api/pet-identification/session-start' },
            { text: '获取识别结果', link: '/api/pet-identification/summary' },
            { text: '生成识别报告', link: '/api/pet-identification/report' },
            { text: '获取识别报告', link: '/api/pet-identification/medical-record' },
          ]
        }
      ]
    },
    {
      text: '宠物情绪识别',
      collapsible: true,
      items: [
        {
          items: [
            { text: '开始会话流程', link: '/api/pet-emotional-recognition/session-start' },
            { text: '获取识别结果', link: '/api/pet-emotional-recognition/summary' },
            { text: '生成识别报告', link: '/api/pet-emotional-recognition/report' },
            { text: '获取识别报告', link: '/api/pet-emotional-recognition/medical-record' },
          ]
        }
      ]
    },
    {
      text: '皮肤检测',
      collapsible: true,
      items: [
        {
          items: [
            { text: '开始会话流程', link: '/api/skin-detection/session-start' },
            { text: '获取识别结果', link: '/api/skin-detection/summary' },
            { text: '生成识别报告', link: '/api/skin-detection/report' },
            { text: '获取识别报告', link: '/api/skin-detection/medical-record' },
          ]
        }
      ]
    },
    {
      text: '耳道检测',
      collapsible: true,
      items: [
        {
          items: [
            { text: '开始会话流程', link: '/api/ear-canal-detection/session-start' },
            { text: '获取识别结果', link: '/api/ear-canal-detection/summary' },
            { text: '生成识别报告', link: '/api/ear-canal-detection/report' },
            { text: '获取识别报告', link: '/api/ear-canal-detection/medical-record' },
          ]
        }
      ]
    },
    {
      text: '眼睛检查',
      collapsible: true,
      items: [
        {
          items: [
            { text: '开始会话流程', link: '/api/eye-examination/session-start' },
            { text: '获取识别结果', link: '/api/eye-examination/summary' },
            { text: '生成识别报告', link: '/api/eye-examination/report' },
            { text: '获取识别报告', link: '/api/eye-examination/medical-record' },
          ]
        }
      ]
    },
    {
      text: '口腔检查',
      collapsible: true,
      items: [
        {
          items: [
            { text: '开始会话流程', link: '/api/oral-examination/session-start' },
            { text: '获取识别结果', link: '/api/oral-examination/summary' },
            { text: '生成识别报告', link: '/api/oral-examination/report' },
            { text: '获取识别报告', link: '/api/oral-examination/medical-record' },
          ]
        }
      ]
    },
    {
      text: '排泄物',
      collapsible: true,
      items: [
        {
          items: [
            { text: '开始会话流程', link: '/api/excrement/session-start' },
            { text: '获取识别结果', link: '/api/excrement/summary' },
            { text: '生成识别报告', link: '/api/excrement/report' },
            { text: '获取识别报告', link: '/api/excrement/medical-record' },
          ]
        }
      ]
    },
    {
      text: '呕吐物',
      collapsible: true,
      items: [
        {
          items: [
            { text: '开始会话流程', link: '/api/vomit/session-start' },
            { text: '获取识别结果', link: '/api/vomit/summary' },
            { text: '生成识别报告', link: '/api/vomit/report' },
            { text: '获取识别报告', link: '/api/vomit/medical-record' },
          ]
        }
      ]
    },
    {
      text: '表情包生成',
      collapsible: true,
      items: [
        {
          items: [
            { text: '流程开始', link: '/api/ai-meme/session-start' },
            { text: '生成表情包', link: '/api/ai-meme/ai-meme' },
          ]
        }
      ]
    },
    {
      text: '鸟类鉴别',
      collapsible: true,
      items: [
        {
          items: [
            { text: '品种识别', link: '/api/identifying_birds/index' },
          ]
        }
      ]
    },
    {
  "text": "智能问诊",
  "link": "/api/smart-consultation/index",
  "collapsible": true,
  "items": [
    {
      "text": "流程开始",
      "items": [
        { "text": "SessionStart", "link": "/api/smart-consultation/session-start.md", "method": "POST" }
      ]
    },
    {
      "text": "问答环节",
      "items": [
        { "text": "获取问题 [流式]", "link": "/api/smart-consultation/get-question-stream", "method": "POST" },
        { "text": "获取问题联想", "link": "/api/smart-consultation/get-question-association", "method": "POST" },
        { "text": "保存用户回答", "link": "/api/smart-consultation/save-user-answer", "method": "POST" }
      ]
    },
    {
      "text": "传图环节",
      "items": [
        { "text": "上传文件", "link": "/api/smart-consultation/upload-file", "method": "POST" },
        { "text": "获取图片结果", "link": "/api/smart-consultation/get-image-result", "method": "POST" },
        { "text": "是否需要上传图片", "link": "/api/smart-consultation/is-image-upload-needed", "method": "POST" }
      ]
    },
    {
      "text": "继续提问",
      "collapsible": true,
      "items": [
        { "text": "获取问题 [流式]", "link": "/api/smart-consultation/get-question-stream", "method": "POST" },
        { "text": "获取问题联想", "link": "/api/smart-consultation/get-question-association", "method": "POST" },
        { "text": "保存用户回答", "link": "/api/smart-consultation/save-user-answer", "method": "POST" },
        { "text": "是否继续问答 [流式]", "link": "/api/smart-consultation/is-continue-qa-stream", "method": "POST" }
      ]
    },
    {
      "text": "生成报告",
      "collapsible": true,
      "items": [
        { "text": "生成小结", "link": "/api/smart-consultation/generate-summary", "method": "POST" },
        { "text": "发布生成报告任务", "link": "/api/smart-consultation/publish-report-task", "method": "POST" },
        { "text": "生成健康问答 [流式]", "link": "/api/smart-consultation/generate-health-report-stream", "method": "POST" }
      ]
    },
    {
      "text": "获取报告",
      "items": [
        { "text": "获取报告", "link": "/api/smart-consultation/get-report", "method": "GET" }
      ]
    }
  ]
},
  ]
}



function getComponentsSidebar() {
  return [
    {
      text: '组件',
      items: [
        {
          text: 'Button 按钮',
          link: '/components/button'
        },
        {
          text: 'Tabs 标签页',
          link: '/components/tabs'
        },
        {
          text: 'Modal 对话框',
          link: '/components/modal'
        },
        {
          text: 'Tag 标签',
          link: '/components/tag'
        },
        {
          text: 'Vue 引用组件',
          link: '/components/vue'
        },
        {
          text: 'Vue Script',
          link: '/components/vue-script'
        }
      ]
    }
  ]
}

function getGuideSidebar() {
  return [
    {
      text: '指南',
      items: [
        {
          text: '文档1',
          link: '/guide/'
        },
        {
          text: '文档2',
          link: '/guide/button'
        },
        {
          text: '文档3',
          link: '/guide/modal'
        }
      ]
    }
  ]
}

