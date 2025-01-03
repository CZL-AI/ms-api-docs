import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'

import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import nav from './configs/nav'
import sidebar from './configs/sidebar'

export default defineConfig({
  title: 'Vitepress',
  description: '使用 Vitepress 搭建组件库文档站点。',

  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui-bundle.js' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@5/swagger-ui.css' }]
  ],

  markdown: {
    config: (md) => {
      md.use(demoblockPlugin)
    }
  },

  themeConfig: {
    nav,
    sidebar
  },

  vite: {
    plugins: [vueJsx(), demoblockVitePlugin()]
  }
})