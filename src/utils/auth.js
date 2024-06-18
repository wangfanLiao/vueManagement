import { TOKEN_TIME, TOKEN_TIME_VALUE } from './constants'

export const setTime = () => {
  localStorage.setItem(TOKEN_TIME, Date.now())
}

export const authTime = () => {
  return Date.now() - localStorage.getItem(TOKEN_TIME) > TOKEN_TIME_VALUE
}
