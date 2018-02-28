import request from 'utils/request';
import { apis } from 'apis';

export function queryDemo() {
  return request(apis.demo.demoapi1);
}
