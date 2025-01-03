export const swaggerConfig = {
    // OpenAPI 版本号
    openapi: '3.0.0',
  
    // API文档信息
    info: {
      title: '组件库文档',     // 文档标题
      version: '1.0.0',       // API版本
      description: '详细说明'   // 文档描述
    },
  
    // API分组标签
    tags: [
      {
        name: '按钮组件',      // 标签名称
        description: '按钮相关API' // 标签描述
      }
    ],
  
    // API路径
    paths: {
      '/components/button': {  // API路径
        get: {                // 请求方法
          summary: '按钮组件',  // API摘要
          tags: ['按钮组件'],   // 所属标签
          responses: {         // 响应定义
            200: {
              description: '成功',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/Button' // 引用组件schema
                  }
                }
              }
            }
          }
        }
      }
    },
  
    // 组件定义
    components: {
      schemas: {
        Button: {
          type: 'object',
          properties: {
            props: {          // 属性定义
              type: 'object',
              properties: {
                type: {
                  type: 'string',
                  enum: ['primary', 'success'], // 枚举值
                  description: '按钮类型'        // 描述说明
                }
              }
            },
            events: {         // 事件定义
              type: 'object',
              properties: {
                click: {
                  description: '点击事件'
                }
              }
            },
            slots: {          // 插槽定义
              type: 'object',
              properties: {
                default: {
                  description: '默认插槽'
                }
              }
            }
          }
        }
      }
    }
  }