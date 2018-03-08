/**
 * demo 的models
 * 2018.2.20
 * author: whr
 */
import modelExtend from 'dva-model-extend'
import { commonModel } from 'models/common'
import { DvaModel, ReduxAction, ReduxSagaEffects } from 'interfaces/index'
import { queryDemo } from 'services/demo';
import { DemoState } from 'interfaces/demo';

const NAMESPACE = 'demo';

const model: DvaModel<DemoState> = {
  namespace: NAMESPACE,
  state: {
    name: 'whr',
    list: [],
  },
  effects: {
    *queryDemo({ payload }: ReduxAction, { call, put }: ReduxSagaEffects): any {
      let { data } = yield call(queryDemo);
      yield put({
        type: 'updateState',
        payload: {
          list: data
        }
      })
    }
  }
}
export default modelExtend(commonModel, model)
