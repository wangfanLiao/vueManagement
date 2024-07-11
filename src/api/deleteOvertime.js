import request from './request'

const deleteOvertime = async (data) => {
  const res = await request({
    url: '/delete',
    method: 'POST',
    data
  })
  return res
}

export default deleteOvertime
