import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router'
import Root from './../views/Root.vue'
import Sandbox from './../views/Sandbox.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    component: Root
  }
]
const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

if (import.meta.env.MODE === 'development') {
  router.addRoute({
    path: '/sandbox',
    name: 'sandbox',
    component: Sandbox
  })
}

export default router