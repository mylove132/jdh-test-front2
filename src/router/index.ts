import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/components/Home/index.vue'
import User from '@/components/User/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
