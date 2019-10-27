import React, { FC } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Loader.less'

type Props = {
  fullScreen?: boolean
  spinning: boolean
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Loader: FC<Props> = ({ spinning, fullScreen }) => {
  const classes = classNames(styles.loader, {
    [styles.hidden]: !spinning,
    [styles.fullScreen]: fullScreen,
  });

  return (
    <div className={classes}>
      <div className={styles.warpper}>
        <div className={styles.inner} />
        <div className={styles.text} >LOADING</div>
      </div>
    </div>
  )
}


Loader.propTypes = {
  spinning: PropTypes.bool,
  fullScreen: PropTypes.bool,
}

export default Loader
