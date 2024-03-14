import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from "../store/Auth.store.js";
import  Login  from "../views/login/Login.vue";
import Home from "../views/Mainpage/Home.vue";




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
