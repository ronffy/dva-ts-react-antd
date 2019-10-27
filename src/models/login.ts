import { routerRedux } from 'dva/router'
import * as loginService from '../services/login'
import { modelExtend } from './common'
import { defaultPageInfo, loginRouter } from '../config';
import { ReduxSagaEffects, ReduxAction } from '../ts-types';

export default modelExtend({
  namespace: 'login',

  state: {},

  effects: {
    * login({ payload }: ReduxAction, { put, call, select }: ReduxSagaEffects) {
      const data = yield call(loginService.login, payload)
      const { locationQuery } = yield select(_ => _.app)
      if (data.success) {
        const { from } = locationQuery
        yield put({ type: 'app/query' })
        if (from && from !== loginRouter) {
          yield put(routerRedux.push(from))
        } else {
          yield put(routerRedux.push(defaultPageInfo.router))
        }
      } else {
        console.warn('login-login 报错');
      }
    },

    * logout({ payload }: ReduxAction, { call, put }: ReduxSagaEffects) {
      const data = yield call(loginService.logout)
      if (data.success) {
        yield put({ type: 'app/query' })
      } else {
        console.warn('app-logout 报错');
      }
    },
  },

})
