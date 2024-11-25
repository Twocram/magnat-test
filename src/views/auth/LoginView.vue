<template>
  <div class="container">
    <div class="wrapper">
      <div class="wrapper-caption">Войти в панель</div>
      <VInput class="wrapper-input" placeholder="Введите логин" type="text" v-model="form.login" />
      <VInput
        class="wrapper-input"
        placeholder="Введите пароль"
        type="password"
        v-model="form.password"
      />

      <VButton @click="login" class="wrapper-button" type="block"> Войти </VButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import VButton from '@/components/VButton.vue'
import VInput from '@/components/VInput.vue'
import { useUserStore } from '@/stores/user'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const form = reactive<{ login: string; password: string }>({
  login: '',
  password: '',
})

const userStore = useUserStore()
const router = useRouter()

async function login() {
  if (form.login.length > 0 && form.password.length > 0) {
    userStore.setUser({ login: form.login })
    localStorage.setItem('user', JSON.stringify({ login: form.login }))

    await router.push({ name: 'home' })
  }
}
</script>

<style scoped lang="scss">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.wrapper {
  max-width: 230px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-caption {
    font-weight: 500;
    font-size: 16px;
    line-height: 19.36px;
    color: #000000;
    margin-bottom: 32px;
  }

  &-input {
    margin-bottom: 12px;
  }

  &-button {
    max-width: 68px;
  }
}
</style>
