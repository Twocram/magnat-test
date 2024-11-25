import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null,
  )

  function setUser(newUser: User | null) {
    user.value = newUser
  }

  return { user, setUser }
})
