import * as React from 'react'
import { connect } from 'dva'
import { LAYOUT_NAMESPACE } from 'configs/ConstConfig'


const mapStateToProps = state => (
  {
    theme: state[LAYOUT_NAMESPACE].theme
  }
)

export default WrappedComponent => connect(mapStateToProps)(WrappedComponent)