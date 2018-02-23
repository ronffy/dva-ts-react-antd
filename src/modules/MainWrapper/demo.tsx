import React from 'react'
import { Button } from 'antd'

interface G{
  n: number
}

class Comp extends React.Component {
  render(){
    return (
      <Button>点我</Button>
    )
  }
}

export default Comp
