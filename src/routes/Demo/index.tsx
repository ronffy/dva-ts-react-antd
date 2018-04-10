import React from 'react';
import { connect } from 'dva';
import { Button, Card } from 'antd';
import { ListItem } from 'interfaces/demo';

const getDisplayName = (WarpedComponent) => WarpedComponent.displayName || WarpedComponent.name || 'Component';

const MyContainer = (WarpedComponent): any => class extends WarpedComponent {
	static displayName = `HOC${getDisplayName(WarpedComponent)}`
	render() {
		const tree = super.render();
		const oldStyle = tree.props.style || {};
		const newProps = {
			style: {
				...oldStyle,
				fontSize: '30px',
			}
		}
		const props = {
			...tree.props,
			...newProps,
		}
		const element = React.cloneElement(tree, props, tree.props.children)
		return element
	}
}

@MyContainer
class MyComponent extends React.Component {
	render() {
		return (
			<div style={{ background: 'blue' }}>
				我是组件内容
			</div>
		)
	}
}




const NAMESPACE = 'demo';

interface DemoProps {
	dispatch?: any;
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
		return (
			<Card title={'恭喜：项目成功跑起来了！'}>
				<MyComponent />
				<Button type="primary" onClick={this.getData}>点我请求数据</Button>
				<ul>
					{
						this.props.list.map(({ id, title }: ListItem): JSX.Element => {
							return (<li key={id}>{title}</li>)
						})
					}
				</ul>
			</Card>
		)
	}
}

export default Demo;
