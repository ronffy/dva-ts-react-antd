const LAST_REQ_TIME = '@@DVA_LAST_EFFECT_TIME';

const defaultOpts = {
    namespace: "lastEffectTime"
}

const defaultPayload = {
    namespace: "",
    actionType: ""
}

function createLastEffectTime(opts = defaultOpts) {
    const { namespace } = opts;
    const initialState = {
        global: 0,
        models: {},
        effects: {},
    };

    const extraReducers = {
        [namespace]: (state = initialState, { type, payload = defaultPayload }) => {
            const { namespace, actionType } = payload;
            let ret;
            switch (type) {
                case LAST_REQ_TIME:
                    let lastEffectTime = new Date().getTime();
                    ret = {
                        ...state,
                        global: lastEffectTime,
                        models: { ...state.models, [namespace]: lastEffectTime },
                        effects: { ...state.effects, [actionType]: lastEffectTime },
                    };
                    break;
                default:
                    ret = state;
                    break;
            }
            return ret;
        },
    };

    function onEffect(effect, { put }, model, actionType) {
        const { namespace } = model;
        return function* (...args) {
            yield effect(...args);
            yield put({ type: LAST_REQ_TIME, payload: { namespace, actionType } });
        };
    }

    return {
        extraReducers,
        onEffect,
    };
}

export default createLastEffectTime;