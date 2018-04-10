import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CSSModules from 'react-css-modules'
import styles from './index.less'

interface LoaderProps{
  spinning: boolean;
  fullScreen: boolean;
  style?: object;
}

@CSSModules(styles, { allowMultiple: true })
class Loader extends React.Component<LoaderProps, any>{
  static propTypes = {
    spinning: PropTypes.bool,
    fullScreen: PropTypes.bool,
  }
  render(){
    const { spinning, fullScreen, style } = this.props;
    return (
      <div
        styleName={classNames('loader', {
          hidden: !spinning,
          fullScreen: fullScreen,
        })}
        style={style}
      >
        <div styleName="warpper" >
          <div styleName="inner" />
          <div styleName="text" >加载中...</div>
        </div>
      </div>)
  }
}

export default Loader
