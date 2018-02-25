import { ReduxAction, DvaModelReducers } from 'interfaces/index'

interface CommonModel{
  reducers: DvaModelReducers
}

const commonModel: CommonModel = {
  reducers: {
    updateState(state: object, { payload }: ReduxAction) {
      return {
        ...state,
        ...payload,
      }
    },
    error (state: object, { payload }: ReduxAction) {
      return {
        ...state,
        error: payload,
      }
    },
  },
}

export {
  commonModel,
}
