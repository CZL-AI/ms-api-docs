<template>
  <Layout>
    <template #nav-bar-content-before>
      <select v-model="selectedVersion" @change="onChange">
        <option value="/v1/">V1</option>
        <option value="/v2/">V2</option>
      </select>
    </template>
  </Layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()
const selectedVersion = ref('/v1/')

function onChange(e) {
  const path = e.target.value + 'index'
  router.go(path)
}
</script>

<style scoped>
select {
  margin-right: 1rem;
  padding: 0.5em;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>