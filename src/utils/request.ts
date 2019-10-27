
import axios, { AxiosRequestConfig, AxiosResponse, AxiosPromise } from 'axios'
import cloneDeep from 'lodash/cloneDeep'
import { message } from 'antd'
import md5 from 'md5'
import qs from 'qs'
import storage from './storage'
import sortByKey from './sortByKey'

export default function request(url: string, options: AxiosRequestConfig = {}): AxiosPromise {
  let { data } = options

  options.url = url
  if (data) {
    options.params = cloneDeep(data)
  }

  return axios(options)
    .then(response => {
      const { status, statusText } = response
      const successed = checkRspStatus(status)
      if (successed) {
        return Promise.resolve({
          ...response,
          success: true,
          message: statusText,
          statusCode: status,
          data: response.data || {},
        })
      }

      // 错误提示
      tipError(response)

      const error = {
        name: 'http error',
        message: 'http response status error',
        config: options,
        code: `${status}`,
        response,
        isAxiosError: false,
      }
      return Promise.reject(error)
    })
    .catch(error => {
      const { response } = error

      // 错误提示
      tipError(response || {
        ...error,
        status: 600
      })

      let msg
      let statusCode

      if (response && response instanceof Object) {
        const { statusText } = response
        statusCode = response.status
        msg = response.data.message || statusText
      } else {
        statusCode = 600
        msg = error.message || 'Network Error'
      }

      /* eslint-disable */
      return Promise.resolve({
        ...response,
        success: false,
        status: statusCode,
        message: msg,
      })
    })
}

export function checkRspStatus(status: number) {
  if (status >= 200 && status < 300) {
    return true;
  }

  return false;
}

function tipError(response: AxiosResponse) {
  const status = response.status;

  switch (status) {
    case 401:
      storage.clear();
      message.error('登录过期，请重新登录');
      break;

    case 400:
      message.error('请求错误，请刷新重试');
      break;

    default:
      if (status >= 500) {
        message.error('网络错误，请刷新重试');
      }
      // 注意：其他错误的错误提示需要在业务内自行处理
      break;
  }
  console.error('http返回结果的 status 码错误，错误信息是:', response);
}

export const encryptMD5 = (value, apiKey = 'apikey=sunlandzlcx') => {
  if (qs.stringify(sortByKey(value))) {
    return md5(`${apiKey}&${qs.stringify(sortByKey(value), { encode: false })}`)
  } else {
    return md5(apiKey);
  }
};
