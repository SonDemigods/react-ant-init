import React, { Component } from 'react';

import { Table } from 'antd';

import './index.less'

class EsintDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {}
  }

	/**
   * @functionName init
   * @description 页面初始化
   * @author 张航
   * @date 2022-01-11 11:15:44
   * @version V1.0.0
   */
	init () {
    console.log(this.props);
	}

	componentDidMount() {
		this.init();
	}

	render() {
    const {
      userName = '',
      userAge = '',
      userSex = '',
      userPhone = '',
      userMail = '',
      userAddress = ''
    } = this.props.location.state
		return (
				<div className="esint-details">
					<div>
            <div className="label">姓名：</div>
            <div className="text">{userName}</div>
          </div>
          <div>
            <div className="label">年龄：</div>
            <div className="text">{userAge}</div>
          </div>
          <div>
            <div className="label">性别：</div>
            <div className="text">{userSex}</div>
          </div>
          <div>
            <div className="label">电话：</div>
            <div className="text">{userPhone}</div>
          </div>
          <div>
            <div className="label">邮箱：</div>
            <div className="text">{userMail}</div>
          </div>
          <div>
            <div className="label">地址：</div>
            <div className="text">{userAddress}</div>
          </div>
				</div>
		);
	}
}
export default EsintDetails;
