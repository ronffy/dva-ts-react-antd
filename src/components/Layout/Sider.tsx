import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { Icon, Switch } from 'antd'
import config from '@config'
import styles from './Layout.less'
import Menus from './Menu'

type MenuItem = {
  id: number
  icon: string
  name: string
  router: string
}

type Props = {
  darkTheme: boolean
  siderFold: boolean
  location: Location
  changeTheme: any
  changeOpenKeys: any
  navOpenKeys: string[]
  menu: MenuItem[]
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Sider: FC<Props> = ({
  siderFold, darkTheme, location, changeTheme, navOpenKeys, changeOpenKeys, menu,
}) => {
  const menusProps = {
    menu,
    siderFold,
    darkTheme,
    location,
    navOpenKeys,
    changeOpenKeys,
  }
  return (
    <div>
      <div className={styles.logo}>
        <img alt="logo" src={config.logo} />
        {siderFold ? '' : <span>{config.name}</span>}
      </div>
      <Menus {...menusProps} />
      {!siderFold ? <div className={styles.switchtheme}>
        <span><Icon type="bulb" />Switch Theme</span>
        <Switch onChange={changeTheme} defaultChecked={darkTheme} checkedChildren="Dark" unCheckedChildren="Light" />
      </div> : ''}
    </div>
  )
}

Sider.propTypes = {
  menu: PropTypes.array,
  siderFold: PropTypes.bool,
  darkTheme: PropTypes.bool,
  changeTheme: PropTypes.func,
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func,
}

export default Sider
