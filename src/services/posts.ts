import { request } from '@utils'
import { apis } from '@config'

type QueryParams = {
  status: number
}
export async function query({ status }: QueryParams) {
  return request(apis.posts, {
    data: {
      status,
    },
  })
}
