<template>
  <header id="header">
    <div class="header-container">
      <div class="header-container__name">
        Привет, <b>{{ username }}</b>
      </div>

      <div class="header-container__logout">
        <VButton type="inline" @click="logout">Выйти</VButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import VButton from './VButton.vue'

const userStore = useUserStore()
const router = useRouter()

const username = computed(() => {
  return userStore.user ? userStore.user.login : ''
})

async function logout() {
  userStore.setUser(null)
  localStorage.removeItem('user')
  await router.push({ name: 'login' })
}
</script>

<style scoped lang="scss">
.header {
  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
  }
}
</style>
