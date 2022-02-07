import React, { Component } from 'react';

import { Table } from 'antd';

import './index.less'

class EsintList extends Component {
	constructor(props) {
		super(props);
		this.state = {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: '30%',
          render: (text, record) => <a onClick={() => this.toPage(record)}>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
          width: '20%',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ],
      data: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Joe Black',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Jim Green',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        },
        {
          key: '4',
          name: 'Jim Red',
          age: 32,
          address: 'London No. 2 Lake Park',
        },
      ]
    };
	}

  /**
   * @functionName toPage
   * @param {Object} row 行数据
   * @description 跳转页面
   * @author 张航
   * @date 2022-02-07 15:27:22
   * @version V1.0.0
   */
  toPage (row) {
    this.props.history.push({
      pathname: 'details',
      state: row
    })
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

	componentDidMount() {
		this.init();
	}

	render() {
		const {
			columns = [],
			data = {},
		} = this.state;
		return (
				<div>
					<Table columns={columns} dataSource={data} />
				</div>
		);
	}
}
export default EsintList;
