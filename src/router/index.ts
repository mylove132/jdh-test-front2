import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/components/Home/index.vue'
import User from '@/components/common/Content/User/index.vue'
import Index from '@/components/common/Content/Init/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "/index",
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index,
      },
      {
        path: '/user',
        name: 'user',
        component: User,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
