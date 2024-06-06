import loginAPI from '@/api/login'
import router from '@/router'
import { setTime } from '@/utils/auth'
export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || '',
    humburgerIcon: true
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.clear()
      localStorage.setItem('token', token)
    },
    changeHumberger(state) {
      state.humburgerIcon = !state.humburgerIcon
    }
  },
  actions: {
    async login({ commit }, userInfo) {
      try {
        const response = await loginAPI(userInfo)
        console.log(response.data.token)
        commit('setToken', response.data.token)
        setTime()
        router.replace('/')
      } catch (err) {
        console.log(err)
      }
    },
    outLogin({ commit }) {
      commit('setToken', undefined)
      localStorage.clear()
      router.replace('/login')
    }
  }
}
