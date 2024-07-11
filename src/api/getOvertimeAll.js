import request from './request'

const getOvertimeAll = () => {
  return request({
    method: 'GET',
    url: '/otAll'
  })
}

export default getOvertimeAll
