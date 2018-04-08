const Mock = require('mockjs');
const { apis } = require('./common');

const data = Mock.mock({
  'data|11': [
    {
      'id|+1': 1,
      name: '@CNAME',
    }
  ]
});

module.exports = {

  [`GET ${apis.demo.demoapi1}`]: data.data,

}
