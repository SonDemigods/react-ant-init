import React, { Component } from 'react';

import { Layout } from 'antd';

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
      <Layout.Header>Header</Layout.Header>
    );
  }
}
export default EsintLayout;
