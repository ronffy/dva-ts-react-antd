/**
 * demo
 * author: whr
 * time: 2018.2.20
 */

const { apis, Mock } = require('./common');

const getData = (ROLE) => {
  return Mock.mock({
    'data|11': [
      {
        'id|+1': 1,
        name: '@CNAME',
      }
    ]
  })
}

module.exports = {

  [`GET ${apis.demo.demoapi1}`] (req, res) {
    setTimeout(() => {
      res.status(200).json(getData())
    }, 100);
  },

}
