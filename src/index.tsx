import dva from 'dva'
import router from './router'
import createLoading from 'dva-loading'
import createLastEffectTime from 'utils/dvaLastEffectTime'
import createHistory from 'history/createBrowserHistory'
import * as tools from 'utils/tools'
import MainWrapperModel from 'modules/MainWrapper/Model'
import LayoutModel from 'models/layout'
import './themes/common.less'

const modelList = [
  MainWrapperModel,
  LayoutModel
]

const app = dva({
  history: createHistory()
});

// 2. Plugins
app.use(createLoading({ effects: true }));
app.use(createLastEffectTime());
// 3. Model

modelList.forEach(app.model)

// 4. Router
app.router(router);

// 5. Start
app.start('#root');

