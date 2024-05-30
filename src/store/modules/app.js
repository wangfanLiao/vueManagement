import loginAPI from '@/api/login'
import router from '@/router'
export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.clear()
      localStorage.setItem('token', token)
    }
  },
  actions: {
    async login({ commit }, userInfo) {
      try {
        const response = await loginAPI(userInfo)
        console.log(response.token)
        commit('setToken', response.token)
        router.replace('/')
      } catch (err) {
        console.log(err)
      }
    },
    outLogin({ commit }) {
      console.log(this.state.token)
      commit('setToken', undefined)
      console.log(this.state.token)
      router.replace('/login')
    }
  }
}
