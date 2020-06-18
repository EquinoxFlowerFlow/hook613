import React, { useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd';
import { TEACH_TABLE_ONE, TEACH_TAG_ONE } from '@/constants/actionTypes'
import labelAction from '@/action/label'
import str from '@/utils/string'

export default connect(state =>{
  return {
    dataTag: state.label.data,
    selectedRowKeys: state.label.check
  }
},{
  getTag: labelAction[str(TEACH_TABLE_ONE)],
  getSele: labelAction[str(TEACH_TAG_ONE)]
})(Tabl)
function Tabl (props) {
  const {selectedRowKeys, getTag, getSele } = props

  // console.log(dataTag, getTag)

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  
  const data = [
    {
      key: '1',
      name: '张学友',
      age: 40,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '刘德华',
      age: 41,
      address: '西湖区湖底公园1号',
    },
    {
      key: '3',
      name: '黎明',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '4',
      name: '郭富城',
      age: 43,
      address: '西湖区湖底公园1号',
    },
  ];

  const onSelectChange = (check, data) => {
    console.log(check)
    getSele(check)
    getTag(data)
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  }

  return (
    <Table 
      rowSelection={rowSelection} 
      columns={columns} 
      dataSource={data} 
    />
  )
}







