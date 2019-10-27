/* global window */
/* global document */
import { routerRedux } from 'dva/router'
import config from '../config'
import { storage } from '../utils'
import { EnumRoleType } from '../utils/enums'
import * as appService from '../services/app'
import * as menusService from '../services/menus'
import queryString from 'query-string'
import { modelExtend } from './common';
import { ReduxSagaEffects, DvaSetupParams, ReduxAction } from '../ts-types';

const { prefix, defaultPageInfo, loginRouter } = config;

type MenuItem = {
  id: number
  icon: string
  name: string
  router: string
}
type State = {
  user: Object
  permissions: {
    visit: any[]
  }
  menu: MenuItem[]
  menuPopoverVisible: boolean
  siderFold: boolean
  darkTheme: boolean
  isNavbar: boolean
  navOpenKeys: string[]
  locationPathname: string
  locationQuery: Object
}

const namespace = 'app';

export default modelExtend<State>({
  namespace,
  state: {
    user: {},
    permissions: {
      visit: [],
    },
    menu: [
      {
        id: defaultPageInfo.id,
        icon: defaultPageInfo.icon,
        name: defaultPageInfo.name,
        router: defaultPageInfo.router,
      },
    ],
    menuPopoverVisible: false,
    siderFold: storage.getItem(`${prefix}siderFold`) === 'true',
    darkTheme: storage.getItem(`${prefix}darkTheme`) === 'true',
    isNavbar: document.body.clientWidth < 769,
    navOpenKeys: JSON.parse(storage.getItem(`${prefix}navOpenKeys`)) || [],
    locationPathname: '',
    locationQuery: {},
  },
  subscriptions: {

    setupHistory({ dispatch, history }: DvaSetupParams) {
      history.listen((location) => {
        dispatch({
          type: 'updateState',
          payload: {
            locationPathname: location.pathname,
            locationQuery: queryString.parse(location.search),
          },
        })
      })
    },

    setup({ dispatch }: DvaSetupParams) {
      dispatch({ type: 'query' })
      let tid
      window.onresize = () => {
        clearTimeout(tid)
        tid = setTimeout(() => {
          dispatch({ type: 'changeNavbar' })
        }, 300)
      }
    },

  },
  effects: {

    * query(_action: never, { call, put, select }: ReduxSagaEffects) {
      const { success, data: { user } } = yield call(appService.query)
      const { locationPathname } = yield select(_ => _.app)

      if (success && user) {
        const { data: menuList } = yield call(menusService.query)
        const { permissions } = user
        let menu = menuList
        if (permissions.role === EnumRoleType.ADMIN || permissions.role === EnumRoleType.DEVELOPER) {
          permissions.visit = menuList.map(item => item.id)
        } else {
          menu = menuList.filter((item) => {
            const cases = [
              permissions.visit.includes(item.id),
              item.mpid ? permissions.visit.includes(item.mpid) || item.mpid === '-1' : true,
              item.bpid ? permissions.visit.includes(item.bpid) : true,
            ]
            return cases.every(_ => _)
          })
        }
        yield put({
          type: 'updateState',
          payload: {
            user,
            permissions,
            menu,
          },
        })
        if (window.location.pathname === loginRouter) {
          yield put(routerRedux.push({
            pathname: defaultPageInfo.router,
          }))
        }
      } else if (config.openPages && config.openPages.indexOf(locationPathname) < 0) {
        yield put(routerRedux.push({
          pathname: loginRouter,
          search: queryString.stringify({
            from: locationPathname,
          }),
        }))
      }
    },

    * changeNavbar({ payload }: ReduxAction, { put, select }: ReduxSagaEffects) {
      const { app } = yield (select(_ => _))
      const isNavbar = document.body.clientWidth < 769
      if (isNavbar !== app.isNavbar) {
        yield put({ type: 'handleNavbar', payload: isNavbar })
      }
    },

  },
  reducers: {
    updateState(state: State, { payload }: ReduxAction) {
      return {
        ...state,
        ...payload,
      }
    },

    switchSider(state: State) {
      storage.setItem(`${prefix}siderFold`, !state.siderFold)
      return {
        ...state,
        siderFold: !state.siderFold,
      }
    },

    switchTheme(state: State) {
      storage.setItem(`${prefix}darkTheme`, !state.darkTheme)
      return {
        ...state,
        darkTheme: !state.darkTheme,
      }
    },

    switchMenuPopver(state: State) {
      return {
        ...state,
        menuPopoverVisible: !state.menuPopoverVisible,
      }
    },

    handleNavbar(state: State, { payload }: ReduxAction) {
      return {
        ...state,
        isNavbar: payload,
      }
    },

    handleNavOpenKeys(state: State, { payload: navOpenKeys }: ReduxAction) {
      return {
        ...state,
        ...navOpenKeys,
      }
    },
  },
})
