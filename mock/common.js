const Mock = require('mockjs')
const { apiPrefix } = require('./src/configs/apis');

const NOTFOUND = {
  message: 'Not Found',
}

module.exports = {
  NOTFOUND,
  Mock,
  apiPrefix,
}
