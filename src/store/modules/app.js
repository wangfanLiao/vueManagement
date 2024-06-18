import loginAPI from '@/api/login'
import router from '@/router'
import { setTime } from '@/utils/auth'
export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || '',
    humburgerIcon: false,
    lang: localStorage.getItem('lang') || 'en'
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.clear()
      localStorage.setItem('token', token)
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
