import { createRouter, createWebHistory } from 'vue-router'
import User from '../views/User.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/user',
    name: 'user',
    component: User
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
