export default {
  '/': getApiSidebar(),
  // '/components/': getComponentsSidebar(),
  // '/guide/': getGuideSidebar()
}

function getApiSidebar() {
  return [
    {
      text: '起步',
      link: '/api/beginning/llm', // 使用第一个子菜单的链接
      collapsible: true
    },
    {
      text: 'H5嵌入式',
      link: '/api/h5-embedded/wechat-app', // 使用第一个子菜单的链接
      collapsible: true
    },
    {
      text: '宠物档案',
      link: '/api/pet-profile/add', // 使用第一个子菜单的链接
      collapsible: true
    },
    {
      text: '文件上传',
      link: '/api/file/image', // 使用第一个子菜单的链接
      collapsible: true
    },
    {
      text: '宠物品种识别',
      link: '/api/pet-identification/session-start', // 使用第一个子菜单的链接
      collapsible: true
    },
    {
      text: '宠物情绪识别',
      link: '/api/pet-emotional-recognition/session-start', // 使用第一个子菜单的链接
      collapsible: true
    },
    {
      text: '皮肤检测',
      link: '/api/skin-detection/session-start', // 使用第一个子菜单的链接
      collapsible: true
    },
    {
      text: '耳道检测',
      link: '/api/ear-canal-detection/session-start', // 使用第一个子菜单的链接
      collapsible: true
    },
    {
      text: '眼睛检查',
      link: '/api/eye-examination/session-start', // 使用第一个子菜单的链接
      collapsible: true
    },
    {
      text: '口腔检查',
      link: '/api/oral-examination/session-start', // 使用第一个子菜单的链接
      collapsible: true
    },
    {
      text: '排泄物',
      link: '/api/excrement/session-start', // 使用第一个子菜单的链接
      collapsible: true
    },
    {
      text: '呕吐物',
      link: '/api/vomit/session-start', // 使用第一个子菜单的链接
      collapsible: true
    },
    {
      text: '表情包生成',
      link: '/api/ai-meme/session-start', // 使用第一个子菜单的链接
      collapsible: true
    },
    {
      text: '鸟类鉴别',
      link: '/api/identifying_birds/v2', // 使用第一个子菜单的链接
      collapsible: true
    },
    {
      text: '智能问诊',
      link: '/api/smart-consultation/session-start', // 使用第一个子菜单的链接
      collapsible: true
    }
  ];
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

