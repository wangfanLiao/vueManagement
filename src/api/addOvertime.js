import request from './request'

const addOvertime = (data) => {
  const res = request({
    url: '/addOt',
    method: 'POST',
    data
  })
  return res
}

export default addOvertime
