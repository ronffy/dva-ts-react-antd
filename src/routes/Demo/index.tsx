import * as React from 'react';
import { connect } from 'dva';

@connect((state) => ({
	name: state.demo.name
}))
class Demo extends React.Component<any, any>{
	render(){
		console.log(this.props);
		return (
			<div>
				好的{this.props.name}
      </div>
		)
	}
}

export default Demo;
