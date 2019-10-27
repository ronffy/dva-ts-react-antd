export { History } from 'history';

export interface ReduxAction {
	type: string,
	[propName: string]: any,
}

export interface Dispatch {
	<A extends ReduxAction>(action: A): A;
}

export type ReduxSagaEffects = {
	call?: (p: (arg: any) => Promise<any>, arg?: any) => Promise<any>
	put?: (action: ReduxAction) => void
	select?: (state: any) => any
}

export interface DvaModelReducer {
	(preState: object, action: ReduxAction): object
}

export interface DvaModelReducers {
	[reducerName: string]: DvaModelReducer
}

export interface DvaModelEffectFn {
	(action: ReduxAction, sagaEffects: ReduxSagaEffects): any
}

export interface ReduxSagaTaker {
	type: string,
	[propsName: string]: any
}
// problem
export interface DvaModelEffectWithTaker extends Array<ReduxSagaTaker | DvaModelEffectFn> {
	[index: number]: ReduxSagaTaker | DvaModelEffectFn,
}

export type DvaModelEffect = DvaModelEffectFn | DvaModelEffectWithTaker

export interface DvaModelEffects {
	[effectName: string]: DvaModelEffect
}

export interface DvaModel<T> {
	namespace: string,
	state?: T,
	reducers?: DvaModelReducers,
	effects?: DvaModelEffects,
	subscriptions?: object
}

export type DvaApp = {
	_models: any
	_store: any
	_plugin: any
	use: (...args: any[]) => any
	model: any
	start: any
}


export type DvaSetupParams = {
	dispatch: Dispatch
	history: History
}



