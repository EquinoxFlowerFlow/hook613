import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Model from '@/components/Model'
import { Table, Space, Button, Form } from 'antd';
import { getName, getdel, status } from '@/action/home'


function Home (props) {
  const { getName, getdel, data, status } = props
  const [List, setDat] = useState(data)
  const [obj, setObj] = useState({})
  const [selectedRowKeys, setSele] = useState([])
  const [selename, setNam] = useState([])

  const [form] = Form.useForm();

  const onSelectChange = selectedRowKeys => {
    setSele( [...selectedRowKeys] )
    const setnam = data.filter(item => {
      return selectedRowKeys == item.id
    })
    setNam(setnam)
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  useEffect(() => {
    getName()
  }, [List])

  const del = (val) =>{
    getdel(val)
    setDat(data)
  }

  const upd = (val) => {
    setObj(val)
    status(true)
  }

  const show = () => {
    status(true)
  }

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'namg',
      key: 'namg',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => upd(record) } >修改</Button>
          <Button onClick={() => del(record) } >删除</Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Model obj={obj} />
      <Button onClick={show}>添加</Button>
      {
        selename.map(item => {
          return <span key={item.id} > {item.name} </span>
        })
      }
      <Table 
        columns={columns} 
        dataSource={data}
        rowKey={v => v.id }
        rowSelection={rowSelection}
      />
    </div>
  )
}
export default connect(state => {
  return {
    data: state.home.data
  }
},{
  getName,
  getdel,
  status
})(Home)
