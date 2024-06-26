import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login/index.vue'

const routes = [
  {
    path: '/',
    redirect: (to) => {
      return {
        path: '/login'
      }
    },
    name: 'homeLogin',
    component: Login
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
