import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb, Icon } from 'antd'
import { Link } from 'react-router-dom'
import pathToRegexp from 'path-to-regexp'
import { queryArray } from '../../utils'
import styles from './Layout.less'

type MenuItem = {
  id: number
  icon: string
  name: string
  route: string
  bpid?: number
  mpid?: number
}

type Props = {
  location: Location
  menu: MenuItem[]
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Bread: FC<Props> = ({ menu, location }) => {
  // 匹配当前路由
  let pathArray = []
  let current
  for (let index in menu) {
    if (menu[index].route && pathToRegexp(menu[index].route).exec(location.pathname)) {
      current = menu[index]
      break
    }
  }

  const getPathArray = (item) => {
    pathArray.unshift(item)
    if (item.bpid || item.mpid) {
      getPathArray(queryArray(menu, item.bpid || item.mpid, 'id'))
    }
  }

  let paramMap = {}
  if (!current) {
    pathArray.push(menu[0] || {
      id: 1,
      icon: 'laptop',
      name: '首页',
    })
    pathArray.push({
      id: 404,
      name: 'Not Found',
    })
  } else {
    getPathArray(current)

    let keys = []
    let values = pathToRegexp(current.route, keys).exec(location.pathname.replace('#', ''))
    if (keys.length) {
      keys.forEach((currentValue, index) => {
        if (typeof currentValue.name !== 'string') {
          return
        }
        paramMap[currentValue.name] = values[index + 1]
      })
    }
  }

  // 递归查找父级
  const breads = pathArray.map((item, key) => {
    const content = (
      <span>{item.icon
        ? <Icon type={item.icon} style={{ marginRight: 4 }} />
        : ''}{item.name}</span>
    )
    return (
      <Breadcrumb.Item key={key}>
        {((pathArray.length - 1) !== key)
          ? <Link to={pathToRegexp.compile(item.route || '')(paramMap) || '#'}>
            {content}
          </Link>
          : content}
      </Breadcrumb.Item>
    )
  })

  return (
    <div className={styles.bread}>
      <Breadcrumb>
        {breads}
      </Breadcrumb>
    </div>
  )
}

Bread.propTypes = {
  menu: PropTypes.array,
}

export default Bread
