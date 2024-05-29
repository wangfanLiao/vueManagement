import request from './request'

const login = async (data) => {
  const res = await request({
    url: '/login',
    method: 'POST',
    data
  })
  return res
}

export default login
