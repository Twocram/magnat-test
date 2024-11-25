import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/auth/login',
      name: 'login',
      component: LoginView,
    },
  ],
})

router.beforeEach((to) => {
  if (to.name === 'login' && localStorage.getItem('user')) {
    return { name: 'home' }
  }

  if (to.name !== 'login' && !localStorage.getItem('user')) {
    return { name: 'login' }
  }
})

export default router
