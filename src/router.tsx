import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import App from 'routes/App';
import moment from 'moment';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const { ConnectedRouter } = routerRedux;

interface RoutersProps{
  history: object;
  app: object;
}

const Routers = function ({ history, app }: RoutersProps) {
  const error = dynamic({
    app,
    component: () => System.import('./routes/Error'),
  })

  const routes = [
    { //一些demo可以写在这个页面上，
      path: '/home',
      models: () => [System.import('./models/demo')],
      component: () => System.import('./routes/Demo/'),
    },
    { //一些demo可以写在这个页面上，
      path: '/_test',
      // models: () => [System.import('./models/_test')],
      component: () => System.import('./routes/_test/'),
    },
  ];
  return (
    <ConnectedRouter history={history}>
      <LocaleProvider locale={zhCN}>
        <App>
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/home" />)} />
            {
              routes.map(({ path, ...dynamics }, key) => (
                <Route 
                  key={key}
                  exact
                  path={path}
                  component={dynamic({
                    app,
                    ...dynamics,
                  })}
                />
              ))
            }
            <Route component={error} />
          </Switch>
        </App>
      </LocaleProvider>
    </ConnectedRouter>
  )
}

export default Routers
