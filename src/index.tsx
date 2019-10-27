import { message } from 'antd'
import dva from 'dva'
import createLoading from 'dva-loading'
import { createBrowserHistory } from 'history'
import 'babel-polyfill'

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  history: createBrowserHistory(),
  onError (error: Error) {
    message.error(`dva报错: ${error.message}`)
  },
})

// 2. Model
app.model(require('./models/app'))

// 3. Router
app.router(require('./router'))

// 4. Start
app.start('#root')
