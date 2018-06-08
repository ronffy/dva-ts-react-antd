/**
 * test 测试代码，一些demo可以写在这里面，非上线页面
 * by whr
 * 2017.12.9
 */
import React from 'react'
import { Button } from 'antd'
import styles from './index.less'

class TestView extends React.Component<any, any>{
  render(){
    return (
      <div className={styles.textbox}>
        <Button>我是test文件</Button>
      </div>
    )
  }
}

export default TestView;
