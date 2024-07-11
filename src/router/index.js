import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    // redirect: (to) => {
    //   return {
    //     path: '/login'
    //   }
    // },
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "about" */ '../layout/index.vue'),
    redirect: '/users',
    children: [
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/users/index.vue')
      },

      {
        path: 'overtimeList',
        name: 'overtimeList',
        component: () => import('@/views/overtimeList/index.vue')
      },
      {
        path: 'addOvertime',
        name: 'addOvertime',
        component: () => import('@/views/addOvertime/index.vue')
      }
    ]
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
