import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Loader from '../Loader/Loader'
import styles from './Page.less'

type Props = {
  className?: string
  loading?: boolean
  inner?: boolean
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

export default class Page extends Component<Props> {
  render () {
    const { className, children, loading = false, inner = false } = this.props
    const loadingStyle = {
      height: 'calc(100vh - 184px)',
      overflow: 'hidden',
    }
    return (
      <div
        className={classnames(className, {
          [styles.contentInner]: inner,
        })}
        style={loading ? loadingStyle : null}
      >
        {loading ? <Loader spinning /> : ''}
        {children}
      </div>
    )
  }

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    loading: PropTypes.bool,
    inner: PropTypes.bool,
  }
}
