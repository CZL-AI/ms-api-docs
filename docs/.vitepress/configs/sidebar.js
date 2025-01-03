export default {
  '/api/': getApiSidebar(),
  '/components/': getComponentsSidebar(),
  '/guide/': getGuideSidebar()
}

function getApiSidebar() {
  return [
    {
      text: '用户接口',
      collapsible: true,
      items: [
        {
          items: [
            { text: '登录', link: '/api/user/login' },
            { text: '注册', link: '/api/user/register' },
          ]
        }
      ]
    },
    {
      text: '产品接口',
      collapsible: true,
      items: [
        {
          items: [
            { text: '产品列表', link: '/api/product/list' },
            { text: '产品详情', link: '/api/product/detail' }
          ]
        }
      ]
    }
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

