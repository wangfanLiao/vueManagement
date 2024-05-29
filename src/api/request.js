import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})

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
    error.response &&
      ElMessage.error(
        `登录错误. status: ${error.response.status}, ` +
          'message :' +
          error.response.data
      )
    return Promise.reject(new Error(error.response.data))
  }
)

export default service
