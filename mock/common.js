const Mock = require('mockjs');
const { Apis } = require('../src/configs');

const NOTFOUND = {
  message: 'Not Found',
}

module.exports = {
  NOTFOUND,
  Mock,
  devApiPrefix: Apis.devApiPrefix,
  apis: Apis.apis,
}
