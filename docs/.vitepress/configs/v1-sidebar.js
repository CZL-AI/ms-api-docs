

export default function getV1Sidebar() {
  return [
    {
      text: '起步',
      collapsible: true,
      items: [
        {
          items: [
            { text: '大模型简介', link: '/v1/api/beginning/llm' },
            { text: '登录凭证', link: '/v1/api/beginning/login-token' },
            { text: '错误码', link: '/v1/api/beginning/error-code' },
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
            { text: '微信小程序', link: '/v1/api/h5-embedded/wechat-app' },
            { text: 'APP', link: '/v1/api/h5-embedded/native-app' },
            { text: 'Web', link: '/v1/api/h5-embedded/web' },
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
            { text: '新增档案', link: '/v1/api/pet-profile/add' },
            { text: '删除档案', link: '/v1/api/pet-profile/delete' },
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
            { text: '开始会话流程', link: '/v1/api/pet-identification/session-start' },
            { text: '获取识别结果', link: '/v1/api/pet-identification/summary' },
            { text: '生成识别报告', link: '/v1/api/pet-identification/report' },
            { text: '获取识别报告', link: '/v1/api/pet-identification/medical-record' },
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
            { text: '开始会话流程', link: '/v1/api/pet-emotional-recognition/session-start' },
            { text: '获取识别结果', link: '/v1/api/pet-emotional-recognition/summary' },
            { text: '生成识别报告', link: '/v1/api/pet-emotional-recognition/report' },
            { text: '获取识别报告', link: '/v1/api/pet-emotional-recognition/medical-record' },
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
            { text: '开始会话流程', link: '/v1/api/skin-detection/session-start' },
            { text: '获取识别结果', link: '/v1/api/skin-detection/summary' },
            { text: '生成识别报告', link: '/v1/api/skin-detection/report' },
            { text: '获取识别报告', link: '/v1/api/skin-detection/medical-record' },
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
            { text: '开始会话流程', link: '/v1/api/ear-canal-detection/session-start' },
            { text: '获取识别结果', link: '/v1/api/ear-canal-detection/summary' },
            { text: '生成识别报告', link: '/v1/api/ear-canal-detection/report' },
            { text: '获取识别报告', link: '/v1/api/ear-canal-detection/medical-record' },
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
            { text: '开始会话流程', link: '/v1/api/eye-examination/session-start' },
            { text: '获取识别结果', link: '/v1/api/eye-examination/summary' },
            { text: '生成识别报告', link: '/v1/api/eye-examination/report' },
            { text: '获取识别报告', link: '/v1/api/eye-examination/medical-record' },
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
            { text: '开始会话流程', link: '/v1/api/oral-examination/session-start' },
            { text: '获取识别结果', link: '/v1/api/oral-examination/summary' },
            { text: '生成识别报告', link: '/v1/api/oral-examination/report' },
            { text: '获取识别报告', link: '/v1/api/oral-examination/medical-record' },
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
            { text: '开始会话流程', link: '/v1/api/excrement/session-start' },
            { text: '获取识别结果', link: '/v1/api/excrement/summary' },
            { text: '生成识别报告', link: '/v1/api/excrement/report' },
            { text: '获取识别报告', link: '/v1/api/excrement/medical-record' },
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
            { text: '开始会话流程', link: '/v1/api/vomit/session-start' },
            { text: '获取识别结果', link: '/v1/api/vomit/summary' },
            { text: '生成识别报告', link: '/v1/api/vomit/report' },
            { text: '获取识别报告', link: '/v1/api/vomit/medical-record' },
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
            { text: '流程开始', link: '/v1/api/ai-meme/session-start' },
            { text: '生成表情包', link: '/v1/api/ai-meme/ai-meme' },
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
            { text: '品种识别', link: '/v1/api/identifying_birds/index' },
          ]
        }
      ]
    },
    {
      text: '智能问诊',
      link: '/v1/api/smart-consultation/index',
      collapsible: true,
      items: [
        {
          text: '流程开始',
          items: [
            { text: 'SessionStart', link: '/v1/api/smart-consultation/session-start' }
          ]
        },
        {
          text: '两轮问答',
          items: [
            { text: '获取问题 [流式]', link: '/v1/api/smart-consultation/question' },
            { text: '获取问题联想', link: '/v1/api/smart-consultation/options' },
            { text: '保存用户回答', link: '/v1/api/smart-consultation/history' }
          ]
        },
        {
          text: '判断是否需要传图',
          
          items: [
            { text: '是否需要上传图片', link: '/v1/api/smart-consultation/if-need-image' },
            {
              text: '需要传图',
              items: [
                { text: '上传文件', link: '/v1/api/smart-consultation/upload-image-oss' },
                { text: '获取图片结果', link: '/v1/api/smart-consultation/pic-result' }
              ]
            }
          ]
        },
        {
          text: '判断是否需要继续提问',
          items: [
            { text: '是否继续问答【流式】', link: '/v1/api/smart-consultation/if-continue-ask' },
            {
              text: '继续提问',
              items: [
                { text: '获取问题【流式】', link: '/v1/api/smart-consultation/question' },
                { text: '获取问题联想', link: '/v1/api/smart-consultation/options' },
                { text: '保存用户回答', link: '/v1/api/smart-consultation/history' }
              ]
            }
          ]
        },
        {
          text: '发布生成报告',
          collapsible: true,
          items: [
            { text: '生成小结', link: '/v1/api/smart-consultation/summary' },
            { text: '发布生成报告任务', link: '/v1/api/smart-consultation/report' }
          ]
        },
        {
          text: '获取报告',
          items: [
            { text: '获取报告', link: '/v1/api/smart-consultation/medical-record' }
          ]
        }
      ]
    },
    {
      text: '视频分析',
      collapsible: true,
      items: [
        {
          items: [
            { text: '发送任务', link: '/v1/api/video-analysis/post-task.md' },
            { text: '获取任务结果', link: '/v1/api/video-analysis/get-status.md' },
          ]
        }
      ]
    },
  ]
}
