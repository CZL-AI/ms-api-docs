<template>
    <div class="swagger-container">
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">{{ error }}</div>
        <div v-else>
            <div id="swagger-ui"></div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import SwaggerUIBundle from 'swagger-ui-dist/swagger-ui-bundle'
import 'swagger-ui-dist/swagger-ui.css'

const props = defineProps({
    tag: String,
    path: String,
    version: {
        type: String,
        default: 'v1'
    },
    type: {
        type: String,
        default: 'get',
        validator: value => ['get', 'post', 'put', 'delete'].includes(value.toLowerCase())
    }
})

const loading = ref(true)
const error = ref(null)

onMounted(async () => {
    try {
        const response = await fetch(`/${props.version}/swagger.json`)
        const swaggerConfig = await response.json()
        console.log(swaggerConfig)

        if (!swaggerConfig.paths?.[props.path]) {
            throw new Error(`Path ${props.path} not found`)
        }

        const spec = {
            openapi: swaggerConfig.openapi,
            info: swaggerConfig.info,
            servers: swaggerConfig.servers,
            paths: {
                [props.path]: {
                    [props.type]: swaggerConfig.paths[props.path][props.type]
                }
            },
            components: swaggerConfig.components
        }

        setTimeout(() => {
            SwaggerUIBundle({
                dom_id: '#swagger-ui',
                spec: spec,
                deepLinking: true,
                presets: [
                    SwaggerUIBundle.presets.apis
                ],
                plugins: [
                    SwaggerUIBundle.plugins.DownloadUrl
                ],
                layout: "BaseLayout",
                defaultModelsExpandDepth: -1
            })
        }, 0)

        loading.value = false
    } catch (err) {
        console.error('SwaggerUI Error:', err)
        error.value = err.message
        loading.value = false
    }
})
</script>

<style>
.swagger-container {
    height: 500px;
    width: 100%;
    padding: 1rem;
}

#swagger-ui {
    height: 100%;
    margin: 0;
}

.swagger-ui .wrapper {
    padding: 5px;
}

.responses-inner {
    padding: 5px;
}
</style>