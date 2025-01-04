import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import vueJsx from '@vitejs/plugin-vue-jsx'
import nav from './configs/nav'
import sidebar from './configs/sidebar'
import path from 'path'

export default defineConfig({
  title: '宠智灵 API 文档',
  description: '宠智灵 API 文档',
  base: process.env.BASE || '/',
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
    search: {
      provider: 'local',
    },
    nav,
    sidebar
  },

  vite: {
    plugins: [vueJsx(), demoblockVitePlugin()],
    resolve: {
      alias: {
        '@alias': path.resolve(__dirname, '../')
      }
    },
    server: {
      host: '0.0.0.0'
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     css: {
  //       additionalData: `@import "./docs/.vitepress/theme/style.css";`
  //     }
  //   }
  // }
})