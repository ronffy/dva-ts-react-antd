import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import App from './routes/app'
import { defaultPageInfo } from './config';
import { DvaApp, History } from './ts-types';

const { ConnectedRouter } = routerRedux

type Props = {
  history: History
  app: DvaApp
}

const Routers = function ({ history, app }: Props) {
  const error = dynamic({
    app,
    component: () => import('./routes/error'),
  })
  const routes = [
    {
      path: '/home',
      models: () => [import('./models/home')],
      component: () => import('./routes/home'),
    }, {
      path: '/login',
      models: () => [import('./models/login')],
      component: () => import('./routes/login'),
    }
  ]

  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to={defaultPageInfo.router} />)} />
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
    </ConnectedRouter>
  )
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
