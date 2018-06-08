import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Loader } from 'components'
import { Helmet } from 'react-helmet'
import { withRouter } from 'dva/router'
import 'themes/default.less'
import Error from './Error'
import styles from './app.less'

@withRouter
@connect(({ app, loading }) => ({ app, loading }))
class App extends React.Component<any, any>{
	static propTypes = {
		children: PropTypes.element.isRequired,
		location: PropTypes.object,
		dispatch: PropTypes.func,
		app: PropTypes.object,
		loading: PropTypes.object,
	}
	render(){
		const { children, loading } = this.props;
		return (
			<div>
				<Loader
					fullScreen
					spinning={loading.effects['app/queryMenu']}
					style={{ transition: 'opacity 1s' }}
				/>
				<Helmet>
					<title>海盗系统</title>
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Helmet>
				<div>
					<div id="mainBoxDOM" >
						<div className={styles.container} >
							<div className={styles.content}>
								{true ? children : <Error />}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App
