import { modelExtend } from './common'
import { defaultPageInfo } from '../config';
import { ReduxSagaEffects, Dispatch, DvaSetupParams, ReduxAction } from '../ts-types';

export default modelExtend({
  namespace: 'home',
  state: {

  },
  subscriptions: {
    setup({ dispatch, history }: DvaSetupParams) {
      history.listen(({ pathname }) => {
        if (pathname === defaultPageInfo.router || pathname === '/') {
        }
      })
    },
  },
})
