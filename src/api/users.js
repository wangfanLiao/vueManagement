import request from './request'

const users = () => {
  return request({
    url: '/users'
  })
}

export default users
