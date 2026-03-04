<template>
  <div class="layout-wrapper">
    <!-- 检查认证状态时显示加载状态 -->
    <div v-if="isChecking" class="loading-screen">
      <div class="loading-spinner"></div>
      <p>加载中...</p>
    </div>

    <!-- 已认证时显示默认布局 -->
    <DefaultTheme.Layout v-else>
      <template #nav-bar-content-after>
        <UserProfile />
      </template>
    </DefaultTheme.Layout>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import UserProfile from './components/UserProfile.vue'
import { useAuth } from './composables/useAuth'

const { checkAuth, getAccessToken } = useAuth()

const isChecking = ref(true)

/**
 * 向后端验证 token 有效性
 */
async function validateTokenWithBackend(token) {
  if (!token) return false

  try {
    const API_BASE = import.meta.env.VITE_API_BASE || 'https://platform-api.chongzhiling.com/platform'
    const response = await fetch(`${API_BASE}/user/info`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })

    return response.ok
  } catch (err) {
    console.error('Token validation error:', err)
    return false
  }
}

onMounted(async () => {
  // 从 URL 参数中读取 token（来自登录页重定向）
  const params = new URLSearchParams(window.location.search)
  const tokenFromUrl = params.get('token')

  if (tokenFromUrl) {
    // 保存 token 到 localStorage
    localStorage.setItem('auth_access_token', tokenFromUrl)
    // 清除 URL 参数，避免暴露 token
    window.history.replaceState({}, document.title, window.location.pathname)
  }

  // 检查本地 token 有效性
  if (!checkAuth()) {
    // 未认证则跳转到登录页
    const redirectUrl = encodeURIComponent('https://docs.gjpet.com')
    window.location.href = `https://platform.chongzhiling.com/login?redirect=${redirectUrl}`
    return
  }

  // 向后端验证 token
  const token = getAccessToken()
  if (token) {
    const isValid = await validateTokenWithBackend(token)
    if (!isValid) {
      console.warn('Token validation failed on backend')
      // 清除无效 token，跳转到登录页
      localStorage.removeItem('auth_access_token')
      localStorage.removeItem('auth_refresh_token')
      localStorage.removeItem('auth_user_info')
      const redirectUrl = encodeURIComponent('https://docs.gjpet.com')
      window.location.href = `https://platform.chongzhiling.com/login?redirect=${redirectUrl}`
      return
    }
  }

  isChecking.value = false
})
</script>

<style scoped>
.layout-wrapper {
  width: 100%;
  height: 100%;
}

.loading-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-screen p {
  font-size: 16px;
  margin: 0;
}
</style>
