<template>
    <div class="swagger-container">
      <div id="swagger-ui"></div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { swaggerConfig } from '../../docs/.vitepress/swagger'
  
  onMounted(() => {
    if (typeof window !== 'undefined') {
      window.SwaggerUIBundle({
        spec: swaggerConfig,
        dom_id: '#swagger-ui',
        presets: [SwaggerUIBundle.presets.apis]
      })
    }
  })
  </script>