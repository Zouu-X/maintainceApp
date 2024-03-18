import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from "../store/Auth.store.js";
import Login from "../views/login/index.vue";
import Home from "../views/Mainpage/index.vue";
import Equipment from "../views/equipment/index.vue";
import Todo from "../views/Mainpage/components/Todo.vue";


export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: Home},
    { path: '/login', component: Login},
    { path: '/equipment', component: Equipment},
    { path: '/:pathMatch(.*)*', redirect: '/' },
    { path: '/test', component: Todo}
  ]
});

router.beforeEach(async (to) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();
  console.log(authStore.user, 'AUTHSTOREUSER')

  if (authRequired && authStore.user.data === 'false') {
    authStore.returnUrl = to.fullPath;
    return '/login';
  }
})


// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: Login
//   },
// ]
//
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes
// })
//
// export default router
