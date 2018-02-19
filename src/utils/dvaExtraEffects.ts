import {
    DvaModel,
    DvaModelEffect,
    DvaModelEffectWithTaker,
    DvaModelEffectFn,
    DvaModelEffects,
    ReduxAction,
    ReduxSagaEffects
} from 'interfaces'

export interface CombineExtraEffects<T> {
    (model: DvaModel<T>, options?: ExtraOptions): DvaModel<T>
}

export interface AddExtraSagaEffects {
    (effect: DvaModelEffect, options?: ExtraOptions): DvaModelEffect
}

export interface ExtraOptions {
    [propsName: string]: any
}

export interface CallConfig {
    withStatusHandle?: boolean
}

export interface CreateExtraCall {
    (action: ReduxAction, sagaEffects: ReduxSagaEffects, config: CallConfig, options: ExtraOptions): any
}

export interface GetWrappedSagaEffects {
    (action: ReduxAction, sagaEffects: ReduxSagaEffects, options: ExtraOptions): ReduxSagaEffects
}

// problem
export const combineExtraEffects: CombineExtraEffects<any> = (
    model,
    options = {},
): DvaModel<any> => {

    const { effects = {} } = model,

        wrappedEffects: DvaModelEffects = {};

    Object.keys(effects).forEach(key => wrappedEffects[key] = addExtraSagaEffects(effects[key], options))

    return {
        ...model,
        effects: wrappedEffects
    };
}



const addExtraSagaEffects: AddExtraSagaEffects = (effect, options) => {

    const isEffectWithTaker = effect instanceof Array,
        takerList = isEffectWithTaker
            ?
            (effect as DvaModelEffectWithTaker).slice(1)
            :
            []

    const wrappedEffect: DvaModelEffect = function* (action, sagaEffects) {
        const wrappedSagaEffects: ReduxSagaEffects = getWrappedSagaEffects(action, sagaEffects, options);
        // if (isEffectWithTaker) {
        //     yield effect[0](action, wrappedSagaEffects)
        // }
    }

    return wrappedEffect
}

const defaultConfig = {
    withStatusHandle: false,
}

const createExtraCall: CreateExtraCall = (
    action,
    sagaEffects,
    config = defaultConfig,
    options = {}
) => function* (serviceFn, args = {}) {

    let result = null;
    const { withStatusHandle } = config,
        { statusHandle } = options,
        { call } = sagaEffects

    try {

        result = yield call(serviceFn, args)

        if (withStatusHandle) {
            yield statusHandle(action, sagaEffects, result);

        }

    } catch (e) {

        console.warn(e);

    }

    return result;

}



const getWrappedSagaEffects: GetWrappedSagaEffects = (action, sagaEffects, options) => {
    return {
        ...sagaEffects,
        callWithExtra: (serviceFn, args, config) => createExtraCall(action, sagaEffects, config, options)(serviceFn, args)
    }
}