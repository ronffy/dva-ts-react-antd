
const APIV1 = '/api/v1'
const APIV2 = '/api/v2'
const apiPrefix = APIV1;

module.exports = {
  APIV1,
  APIV2,
  apiPrefix,
  CORS: [],
  login: `${APIV1}/user/login`,
  logout: `${APIV1}/user/logout`,
  userInfo: `${APIV1}/userInfo`,
  posts: `${APIV1}/posts`,
  user: `${APIV1}/user`,
  home: `${APIV1}/home`,
  menus: `${APIV1}/menus`,
}
