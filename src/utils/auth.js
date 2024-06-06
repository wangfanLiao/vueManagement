import { TOKEN_TIME, TOKEN_TIME_VALUE } from './constants'

export const setTime = () => {
  localStorage.setItem(TOKEN_TIME, Date.now())
}

export const authTime = () => {
  console.log(Date.now())
  console.log(localStorage.getItem(TOKEN_TIME))
  console.log(`TOKEN_TIME_VALUE${TOKEN_TIME_VALUE}`)
  console.log(Date.now() - localStorage.getItem(TOKEN_TIME) > TOKEN_TIME_VALUE)
  return Date.now() - localStorage.getItem(TOKEN_TIME) > TOKEN_TIME_VALUE
}
