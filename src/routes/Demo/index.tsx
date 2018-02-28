import * as React from 'react';
import { connect } from 'dva';
import { Button, Card } from 'antd';
import { ListItem } from 'interfaces/demo';

const NAMESPACE = 'demo';

interface DemoProps {
	dispatch: any;
	name: string;
	list: ListItem[];
}

@connect((state) => ({
	name: state[NAMESPACE].name,
	list: state[NAMESPACE].list,
}))
class Demo extends React.Component<DemoProps, any>{
	/**
	 * getData
	 */
	public getData = (): void => {
		this.props.dispatch({
			type: `${NAMESPACE}/queryDemo`,
			payload: {

			}
		})
	}
	render(){
		console.log(this.props);
		return (
			<Card title={this.props.name}>
				<Button onClick={this.getData}>点我请求数据</Button>
				<ul>
					{
						this.props.list.map(({ id, name }: ListItem): JSX.Element => {
							return (<li key={id}>{name}</li>)
						})
					}
				</ul>
			</Card>
		)
	}
}

export default Demo;
