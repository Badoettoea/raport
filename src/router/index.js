import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import UserView from '@/views/UserView.vue'
import AdminView from '@/views/AdminView.vue'

const routes = [
  { path: '/', name: 'Login', component: LoginView },
  { path: '/user', name: 'UserDashboard', component: UserView },
  { path: '/admin', name: 'AdminDashboard', component: AdminView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
