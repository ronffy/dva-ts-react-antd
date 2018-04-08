import dva from 'dva'
import router from './router'
import createLoading from 'dva-loading'
import createLastEffectTime from 'utils/dvaLastEffectTime'
import createHistory from 'history/createBrowserHistory'
import * as tools from 'utils/tools'
import LayoutModel from 'models/layout'
import { createLogger } from 'redux-logger';
import './themes/common.less'
import { message } from 'antd';

const app = dva({
  // onAction: createLogger(),
  history: createHistory(),
  onStateChange(state: any){
    window.__state__ = state;
  },
  onError(error: any) {
    console.error(`全局error: ${error}`);
    message.error(`出错了: ${error}`);
  },
});

// 2. Plugins
app.use(createLoading({ effects: true }));
app.use(createLastEffectTime());

// 3. Model
// app.model(require('./models/app'))

// 4. Router
app.router(router);

// 5. Start
app.start('#root');

