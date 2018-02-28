/**
 * demo 的services
 * 2018.2.26
 * author: whr
 */
import request from 'utils/request';
import { Apis } from 'configs';
const apis = Apis.apis;

console.log('apis - ', apis);


export function queryDemo() {
  return request({
    url: apis.demo.demoapi1,
  });
}
