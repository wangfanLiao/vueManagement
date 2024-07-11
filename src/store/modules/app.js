import loginAPI from '@/api/login'
import router from '@/router'
import { setTime } from '@/utils/auth'
export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || '',
    humburgerIcon: false,
    lang: localStorage.getItem('lang') || 'en',
    username: localStorage.getItem('username') || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.clear()
      localStorage.setItem('token', token)
    },
    setUsername(state, username) {
      state.username = username
      localStorage.setItem('username', username)
    },
    changeHumberger(state, bool) {
      if (bool) {
        state.humburgerIcon = true
      } else {
        state.humburgerIcon = !state.humburgerIcon
      }
    },
    setLang(state, lang) {
      state.lang = lang
      localStorage.setItem('lang', lang)
    }
  },
  actions: {
    async login({ commit }, userInfo) {
      try {
        const response = await loginAPI(userInfo)
        commit('setToken', response.data.token)
        console.log('userfsgsdgsg')
        console.log(response.data.username)
        commit('setUsername', response.data.username)
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
