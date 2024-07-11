const nameMap = {
  wly: '王立宇',
  xiaowang: '小王'
}

const name = (username) => {
  let res
  for (const key in nameMap) {
    if (key === username) {
      res = nameMap[key]

      return res
    } else {
      res = username
    }
  }
  return res
}
export default name
