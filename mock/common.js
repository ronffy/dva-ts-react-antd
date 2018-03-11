const Mock = require('mockjs');

const NOTFOUND = {
  message: 'Not Found',
}

const devApiPrefix = '/devApi';

let apis = {
  demo: {
    demoapi1: `${devApiPrefix}/demo/api1`,
    demoapi2: `${devApiPrefix}/demo/api2`,
  },
}

module.exports = {
  NOTFOUND,
  devApiPrefix,
  apis,
}
