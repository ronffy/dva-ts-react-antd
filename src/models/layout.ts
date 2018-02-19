import {
  LAYOUT_NAMESPACE,
  DARK_THEME,
  LIGHT_THEME
} from 'configs/ConstConfig'  


export default {
  namespace: LAYOUT_NAMESPACE,
  state: {
    theme: LIGHT_THEME
  },
  reducers: {
    changeTheme: (preState, { payload }) => {
      return {
        ...preState,
        theme: payload
      }
    }
  }
}