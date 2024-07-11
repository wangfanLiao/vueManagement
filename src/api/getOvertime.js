import request from './request'

// by username
const getOvertime = async (data) => {
  const res = await request({
    url: '/otList',
    method: 'POST',
    data
  })
  return res
}

export default getOvertime
