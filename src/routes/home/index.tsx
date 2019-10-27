import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col } from 'antd'
import { Page } from '@components'
import styles from './index.less'

function Home ({ home, loading }) {
  const {
    sales
  } = home


  return (
    <Page loading={loading.models.home && sales.length === 0} className={styles.home}>
      <Row gutter={24}>
        <Col lg={6} md={12}>
          hahah
        </Col>
        <Col lg={6} md={12}>
          aaa
        </Col>
        <Col lg={6} md={12}>
          ggg
        </Col>
      </Row>
    </Page>
  )
}

Home.propTypes = {
  home: PropTypes.object,
  loading: PropTypes.object,
}

export default connect(({ home, loading }) => ({ home, loading }))(Home)
