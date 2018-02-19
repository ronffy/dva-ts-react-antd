

import { NAMESPACE } from './ConstConfig'
import { DvaModel } from 'interfaces/index';



const model: DvaModel<any> = {

    namespace: NAMESPACE,

    state: {},

    subscriptions: {
        setup({ dispatch, history }) {
        },
    },

    effects: {
        * fetch(action, sagaEffects) {

        }
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};


export default model;