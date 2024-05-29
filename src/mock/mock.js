import Mock from 'mockjs'

Mock.mock('/login', 'post', (params) => {
  const { username, password } = JSON.parse(params.body)
  console.log(params)
  console.log(username, password)
  if (username === 'wly' && password === '123') {
    return {
      code: 200,
      message: 'success',
      data: {
        token: 'fake_token'
      }
    }
  } else {
    console.log('认证失败')
    return {
      code: 400,
      message: '认证失败',
      data: {
        token: 'bad fake_token'
      }
    }
  }
})
