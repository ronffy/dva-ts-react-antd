const { apis } = require('./common')

const { apiPrefix } = apis
let database = [
  {
    id: '1',
    icon: 'home',
    name: '首页',
    route: '/home',
  },
  // {
  //   id: '7',
  //   bpid: '1',
  //   mpid: '1',
  //   name: '用户列表',
  //   icon: 'shopping-cart',
  //   route: '/post',
  // }
]

module.exports = {

  [`GET ${apiPrefix}/menus`] (req, res) {
    res.status(200).json(database)
  },
}
