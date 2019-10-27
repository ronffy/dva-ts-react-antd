import { request } from '../utils'
import { apis } from '../config'

/**
 * 登录请求
 */
type LoginParams = {
  password: string | number
  username: string | number
}
export async function login({ username, password }: LoginParams) {
  return request(apis.login, {
    method: 'post',
    data: {
      username,
      password,
    }
  })
}

/**
 * 退出请求
 */
export async function logout() {
  return request(apis.logout)
}
