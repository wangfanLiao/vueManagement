import request from '@/api/request'

const menu = () => {
  return request({
    url: '/menu'
  })
}

export default menu
