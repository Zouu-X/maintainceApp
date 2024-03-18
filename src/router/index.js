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
    { path: '/login',
      component: Login,
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        const logStatus = authStore.user.data
      if (logStatus === 'true') {
        next({ path: '/'})
      } else {
        next()
      }
      }
    },
    { path: '/equipment', component: Equipment},
    { path: '/:pathMatch(.*)*', redirect: '/' },
    { path: '/test', component: Todo}
  ]
});

router.beforeEach(async (to) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const authStore = useAuthStore();
  const logStatus = authStore.user.data
  console.log(authStore.user, 'AUTHSTOREUSER')

  if (authRequired && logStatus === 'false') {
    authStore.returnUrl = to.fullPath;
    return '/login';
  }
})

router.afterEach((to, from) => {
  const authStore = useAuthStore();
  const logStatus = authStore.user.data
  if (logStatus === 'true' && to.path === '/login' && from.path !== '/login') {
    history.pushState(null, '', from.path)
  }
})
