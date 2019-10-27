/**
 * 公共 model
 * @author ronffy
 */
import _modelExtend from 'dva-model-extend'
import { DvaModel } from '../ts-types';

const commonModel = {
  reducers: {
    updateState (state: any, { payload }: any) {
      return {
        ...state,
        ...payload,
      }
    },
    error(state: any, { payload }: any) {
      return {
        ...state,
        error: payload,
      }
    },
  },
}

const modelExtend = <T>(model: DvaModel<T>): DvaModel<T> => _modelExtend(commonModel, model);

const pageModel = {
  state: {
    list: [],
    pagination: {
      showTotal: total => `共 ${total} 条`,
      current: 1,
      total: 0,
    },
  },

  reducers: {
    querySuccess (state: any, { payload }: any) {
      const { list, pagination } = payload
      return {
        ...state,
        list,
        pagination: {
          ...state.pagination,
          ...pagination,
        },
      }
    },
    updateState(state: any, { payload }: any) {
      return {
        ...state,
        ...payload,
      }
    },
    error(state: any, { payload }: any) {
      return {
        ...state,
        error: payload,
      }
    },
  },

}

const pageModelExtend = <T>(model: DvaModel<T>): DvaModel<T> => _modelExtend(pageModel, model);

export {
  modelExtend,
  pageModelExtend,
  
  commonModel,
  pageModel,
}