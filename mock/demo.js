/**
 * 左侧菜单栏
 * by whr
 * 2017.10.12
 */

const { apiPrefix, Mock } = require('./common');

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

  [`GET ${apiPrefix}/demo/api1`] (req, res) {
    setTimeout(() => {
      res.status(200).json(getData())
    }, 100);
  },

}
