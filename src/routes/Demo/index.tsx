import * as React from 'react';
import { connect } from 'dva';

const NAMESPACE = 'demo';

@connect((state) => ({
	name: state[NAMESPACE].name
}))
class Demo extends React.Component<any, any>{
	render(){
		console.log(this.props);
		return (
			<div>
				我是demo: {this.props.name}
      </div>
		)
	}
}

export default Demo;
