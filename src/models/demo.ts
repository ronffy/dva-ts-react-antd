/**
 * demo 
 * 2018.2.20
 * author: whr
 */
import modelExtend from 'dva-model-extend'
import { commonModel } from 'models/common'
import { DvaModel, ReduxAction, ReduxSagaEffects } from 'interfaces/index'
import { queryDemo } from 'services/demo';

const NAMESPACE = 'demo';

interface ListItem {
  id: number;
  name: string;
}

interface I{
  name: string;
  list: ListItem[];
}

const model: DvaModel<I> = {
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
      console.log(data);
      
    }
  }
}
export default modelExtend(commonModel, model)
