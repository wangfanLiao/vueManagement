import { createStore } from 'vuex'

export default createStore({
  state: {
    user: 'admin'
  },
  getters: {
    getState(state) {
      return state.user
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})
