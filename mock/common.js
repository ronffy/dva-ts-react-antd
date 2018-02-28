/**
 * mock公共的配置文件
 * author: whr
 * time: 2018.2.20
 */
const Mock = require('mockjs')
const { devApiPrefix, apis } = require('./src/configs/apis');

const NOTFOUND = {
  message: 'Not Found',
}

module.exports = {
  NOTFOUND,
  Mock,
  devApiPrefix,
  apis,
}
