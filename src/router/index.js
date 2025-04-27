import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import UserDashboard from '../views/UserDashboard.vue'
import AdminDashboard from '../views/AdminDashboard.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/user', component: UserDashboard },
  { path: '/admin', component: AdminDashboard },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
