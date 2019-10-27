import React, { FC } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './iconfont.less'

type Props = {
  type: string
  colorful?: boolean
  className?: string
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Iconfont: FC<Props> = ({ type, colorful = false, className }) => {
  if (colorful) {
    return (
      <svg className={classnames('colorful-icon', className)} aria-hidden="true">
        <use xlinkHref={`#${type.startsWith('#') ? type.replace(/#/, '') : type}`} />
      </svg>
    )
  }

  return <i className={classnames('antdadmin', [`icon-${type}`], className)} />
}

Iconfont.propTypes = {
  type: PropTypes.string.isRequired,
  colorful: PropTypes.bool,
  className: PropTypes.string,
}

export default Iconfont
