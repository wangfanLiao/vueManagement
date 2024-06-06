import axios from 'axios'
import { ElMessage } from 'element-plus'
import { authTime } from '@/utils/auth.js'
// import { useStore } from 'vuex' 只能在setup中使用
import store from '@/store'

const service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    console.log('service.interceptors')
    if (localStorage.getItem('token')) {
      console.log('authTime()')
      console.log(authTime())
      if (authTime()) {
        console.log(`store${store}`)
        store.dispatch('app/outLogin')
        ElMessage.error('token 失效')
      }
    }
    config.headers.Authorization = localStorage.getItem('token')
    return config
  },
  (error) => {
    return Promise.reject(new Error(error))
  }
)

service.interceptors.response.use(
  (response) => {
    console.log(response)
    const { data, status } = response
    if (status === 200 || status === 201) {
      return data
    } else {
      ElMessage.error('Oops, this is a error message.')
      return Promise.reject(new Error(`登录错误。status:${status}`))
    }
  },
  (error) => {
    if (error.response) {
      ElMessage.error(
        `登录错误. status: ${error.response.status}, ` +
          'message :' +
          error.response.message
      )
    } else {
      ElMessage.error('登录错误')
    }
  }
)

export default service
