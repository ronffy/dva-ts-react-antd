import * as React from 'react';
import { connect } from 'dva';
import { DatePicker, Button, Card } from 'antd';
import classnames from 'classnames';

function IndexPage({ dispatch }) {
  return (
    <div >
      this is Login
    </div>
  );
}

const mapStateToProps = state => {
  // console.info(state.lastEffectTime)
  return {

  }
}

export default connect(mapStateToProps)(IndexPage);
