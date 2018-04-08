/**
 * demo 的services
 * 2018.2.26
 * @author: whr
 */
import request from 'utils/request';
import { Apis } from 'configs';
const apis = Apis.apis;

export async function queryDemo(data: any): Promise<any> {
  return request({
    url: apis.demo.demoapi1,
    method: 'GET',
    data,
  });
}
