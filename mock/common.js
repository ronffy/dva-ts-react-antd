const Mock = require('mockjs').default;

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
  Mock,
  devApiPrefix,
  apis,
}
