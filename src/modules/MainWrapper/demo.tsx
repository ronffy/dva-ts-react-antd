import React from 'react';
import { Button } from 'antd';
import request from '../../utils/request';

interface G {
  readonly n: number;
  m: string[];
}

let a: G;

class Comp extends React.Component {
  /**
   * method
   * @param 
   */
  public method() {
    request('');
  }
  render() {
    return (
      <Button>点我</Button>
    );
  }
}

export default Comp;
