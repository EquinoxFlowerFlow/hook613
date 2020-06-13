import React, { useState, useEffect, useContext} from 'react';
import { connect } from 'react-redux'
import { Modal, Button, Form, Input, Select  } from 'antd';
import { status, getAdd, getUpd } from '@/action/home'

function Model (props) {
  const { obj, visible, status, getAdd, getUpd } = props

  const hiden = () => {
    status(false)
  }

  const { Option } = Select;

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const [form] = Form.useForm();

  const onFinish = values => {
    console.log(values);
    getAdd(values)
    status(false)
  };

  const onReset = () => {
    form.resetFields();
  };

  const upd = () => {
    getUpd(obj)
    status(false)
  }

  const onFill = () => {
    form.setFieldsValue(obj);
  };

  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={visible}
        footer={null}
        onCancel={hiden}
      >
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="age" label="Age" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="id" label="Id">
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              添加
            </Button>
            <Button htmlType="button" onClick={onReset}>
              重置
            </Button>
            <Button htmlType="button" onClick={upd}>
              修改
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              回填
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default connect(state => {
  return {
    visible: state.home.visible
  }
},{
  status,
  getAdd,
  getUpd
})(Model)
