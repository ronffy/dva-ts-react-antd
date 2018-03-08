import dva from 'dva'
import router from './router'
import createLoading from 'dva-loading'
import createLastEffectTime from 'utils/dvaLastEffectTime'
import createHistory from 'history/createBrowserHistory'
import * as tools from 'utils/tools'
import LayoutModel from 'models/layout'
import './themes/common.less'

const app = dva({
  history: createHistory(),
  onStateChange(state: any){
    // window.__state__ = state;
    
  }
});

// 2. Plugins
app.use(createLoading({ effects: true }));
app.use(createLastEffectTime());
// 3. Model

// 4. Router
app.router(router);

// 5. Start
app.start('#root');

