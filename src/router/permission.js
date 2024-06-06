import router from './index'
import store from '@/store'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  if (store.getters.token && store.getters.token !== 'undefined') {
    console.log(store.getters.token)
    console.log(store.getters.token === 'undefined')
    console.log(to.path)
    if (to.path === '/login') {
      console.log('tologin!')
      next('/')
    } else {
      next()
    }
  } else {
    console.log('no token')
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
