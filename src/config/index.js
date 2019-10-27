const apis = require('./apis');

module.exports = {
  apis,
  name: '后台管理系统',
  prefix: 'antdAdmin',
  footerText: '',
  logo: '/logo.svg',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',

  // 路由相关
  defaultPageInfo: {
    router: '/home',
    name: '首页',
    icon: 'home',
    id: 1
  },
  loginRouter: '/login',
  openPages: ['/login'],
};