/**
 * apis 接口文件
 * author: whr
 * time: 2018.2.26
 */
/* global process */
const devApiPrefix = 'http://www.xxx.com';
const prodApiPrefix = 'http://www.yyy.com';

let apis: any = {
  devApiPrefix,
  prodApiPrefix,
};

if (process.env.NODE_ENV === 'development') {
  apis = {
    ...apis,
    demo: {
      demoapi1: `${devApiPrefix}/demo/api1`,
      demoapi2: `${devApiPrefix}/demo/api2`,
    },
  }
}

apis = {
  demo: {
    demoapi1: `${prodApiPrefix}/demo/api1`,
    demoapi2: `${prodApiPrefix}/demo/api2`,
  },
  ...apis,
}

export {
  devApiPrefix,
  prodApiPrefix,
  apis
}