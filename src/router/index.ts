import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from "@/components/Home/index.vue"
import Jmeter from '@/components/Jmeter/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/jmeter',
        name: 'jmeter',
        component: Jmeter,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
