import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './index.less'

interface LoaderProps{
  spinning: boolean;
  fullScreen: boolean;
  style?: object;
}

class Loader extends React.Component<LoaderProps, any>{
  static propTypes = {
    spinning: PropTypes.bool,
    fullScreen: PropTypes.bool,
  }
  render(){
    const { spinning, fullScreen, style } = this.props;
    return (
      <div
        className={classNames(styles.loader, {
          [styles.hidden]: !spinning,
          [styles.fullScreen]: fullScreen,
        })}
        style={style}
      >
        <div className={styles.warpper} >
          <div className={styles.inner} />
          <div className={styles.text} >加载中...</div>
        </div>
      </div>)
  }
}

export default Loader
