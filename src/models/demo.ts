/**
 * demo 
 * 2018.2.20
 * author: whr
 */
import modelExtend from 'dva-model-extend'
import { commonModel } from 'models/common'
import { DvaModel } from 'interfaces/index'

const NAMESPACE = 'demo';

interface I{
  name: string
}

const model: DvaModel<I> = {
  namespace: NAMESPACE,
  state: {
    name: 'whr'
  },
}
export default modelExtend(commonModel, model)
