

const NAMESPACE = 'layout';
export default {
  namespace: NAMESPACE,
  state: {
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