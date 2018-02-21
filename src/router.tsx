import * as React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';
import MainWrapper from 'modules/MainWrapper/Page';
import getLoginPage from 'routes/User';
import NProgress from 'nprogress'

function RouterConfig({ history, app }) {
  // return <ba />
  return (
    <Router history={history}>
      <MainWrapper>
        <Switch>
          
          <Route path="/login" exact component={getLoginPage(app)} />
        </Switch>
      </MainWrapper>
    </Router>
  );
}

export default RouterConfig;
