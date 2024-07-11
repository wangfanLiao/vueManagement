import request from './request'

const editOvertime = (data) => {
  const res = request({
    url: '/edit',
    method: 'POST',
    data
  })
  return res
}

export default editOvertime
