import request from 'utils/request';
import { Apis } from 'configs';
const apis = Apis.apis;

console.log('apis - ', apis);


export function queryDemo() {
  return request({
    url: apis.demo.demoapi1,
  });
}
