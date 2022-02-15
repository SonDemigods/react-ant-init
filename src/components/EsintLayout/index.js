import React, { Component } from 'react';

import { Layout, Card } from 'antd';

import EsintHeader from './components/EsintHeader';
import EsintSider from './components/EsintSider';

import BasicRoute from '../../routes'

import './index.less'

class EsintLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * @functionName init
   * @description 页面初始化
   * @author 张航
   * @date 2022-01-11 11:15:44
   * @version V1.0.0
   */
  init () {
  }

  componentDidMount () {
    this.init();
  }

  render () {
    return (
      <Layout>
        <EsintHeader />
        <Layout>
          <EsintSider />
          <Layout.Content className="layout-main">
          <Card 
            hoverable
          >
            <BasicRoute />
            </Card>
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}
export default EsintLayout;
