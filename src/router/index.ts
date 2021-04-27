import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router'
import Root from './../views/Root.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    component: Root
  }
]
const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router