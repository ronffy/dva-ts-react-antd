import { request } from '@utils'
import { apis } from '@config'

export async function query () {
  return request(apis.user)
}
