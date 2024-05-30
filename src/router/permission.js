import router from './index'
import getters from '@/store/getters'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  if (getters.token && getters.token !== undefined) {
    console.log(getters.token)
    console.log('you token')
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
