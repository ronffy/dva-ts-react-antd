/* global window */
import axios from 'axios'
import qs from 'qs'
import jsonp from 'jsonp'
import lodash from 'lodash'
import pathToRegexp from 'path-to-regexp'
import { Apis } from 'configs'
const { CORS } = Apis;

const timeout = 3000;

const fetch = (options) => {
  let {
    method = 'get',
    data,
    fetchType,
    url,
  } = options
  let cloneData = lodash.cloneDeep(data) || {}; //eslint-disable-line

  try {
    let domin = ''
    if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
      domin = url.match(/[a-zA-z]+:\/\/[^/]*/)[0]
      url = url.slice(domin.length)
    }
    const match: any[] = pathToRegexp.parse(url)
    url = pathToRegexp.compile(url)(data)
    for (let item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name]
      }
    }
    url = domin + url
  } catch (e) {
    return Promise.reject(e);
  }

  if (fetchType === 'JSONP') {
    return new Promise((resolve, reject) => {
      jsonp(url, {
        param: `${qs.stringify(data)}&callback`,
        name: `jsonp_${new Date().getTime()}`,
        timeout,
      },    (error, result) => {
        if (error) {
          reject(error)
        }
        resolve({ statusText: 'OK', status: 200, data: result })
      })
    })
  }

  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: cloneData,
        timeout,
      })
    case 'delete':
      return axios.delete(url, {
        data: cloneData,
      })
    case 'post':
      return axios.post(url, cloneData)
    case 'put':
      return axios.put(url, cloneData)
    case 'patch':
      return axios.patch(url, cloneData)
    default:
      return axios({
        timeout,
        ...options,
      })
  }
}

export default function request(options: any) {
  if (options.url && options.url.indexOf('//') > -1) {
    const origin = `${options.url.split('//')[0]}//${options.url.split('//')[1].split('/')[0]}`
    if (window.location.origin !== origin) {
      if (CORS && CORS.indexOf(origin) > -1) {
        options.fetchType = 'CORS'
      } else {
        options.fetchType = 'JSONP'
      }
    }
  }

  return fetch(options).then((response: any) => {
    let { statusText, status, data } = response
    return Promise.resolve({ //eslint-disable-line
      success: true,
      message: statusText,
      statusCode: status,
      ...data,
    })
  }).catch((error) => {
    const { response, config = {} } = error
    let msg
    let statusCode
    if (response && lodash.isPlainObject(response)) {
      const { data, statusText } = response
      statusCode = response.status
      msg = data.message || statusText
    } else {
      statusCode = 600
      msg = error.message || 'Network Error'
    }
    return Promise.reject({ success: false, statusCode, message: msg, url: config.url })
  })
}
