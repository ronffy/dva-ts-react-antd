import * as React from 'react';
import dynamic from 'dva/dynamic';

export default (app: any): React.Component => {
    return dynamic({
        app,
        models: () => [
            System.import(/* webpackChunkName: "UserModel" */ 'modules/User/Model'),
        ],
        component: () => System.import(/* webpackChunkName: "UserPage" */'modules/User/Page'),
    });
}