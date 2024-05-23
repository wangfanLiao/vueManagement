import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/index.scss'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
console.log(app.$store)
console.log(app)
console.log(app._props)
