import DefaultTheme from 'vitepress/theme'
import SwaggerUI from '../../../src/components/SwaggerUI.vue'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import './style.css'
import '../../../src/styles/index.css'

// 导入 Swagger UI 样式
import 'swagger-ui-dist/swagger-ui.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    useComponents(ctx.app)
    
    // 注册 SwaggerUI 组件
    ctx.app.component('SwaggerUI', SwaggerUI)
  }
}