import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { PlusOutlined, FileTextFilled, ReconciliationFilled, ArrowLeftOutlined, ArrowRightOutlined, SaveFilled, CloseSquareFilled, HomeFilled } from '@ant-design/icons';
import { Form, Input, Layout, Menu, Steps, theme, Col, Row, Select, Button, Space, Modal, Image } from 'antd';

const config = {
  title: 'ตัวอย่างรถ',
  content: (
    <>
      <Image
        width={300}
        src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"
      />
    </>
  ),
};

const { Header, Content, Footer, Sider } = Layout;

const startData = {
  ID: '',
  customer_type: '',
  product_type: '',
  brand: '',
  model: '',
  year: '',
  img: '',
  type: '',
  customer_name: '',
  balance: '',
  rate: '',
  loan_amount: '',
  installment_amount: '',
  total_interest: '',
  installment_with_interest: '',
}

function Home() {

  const [addUser, setAddUser] = useState(startData);

  const [allUser, setAllUser] = useState([]);

  const [editUser, setEditUser] = useState(null);

  let navigate = useNavigate()

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [modal, contextHolder] = Modal.useModal();

  function onValueChange(event) {
    const { name, value } = event.target;
    setAddUser((prevUser) => {
      return {
        ...prevUser, [name]: value
      }
    })
  }

  function onUserSubmit(event) {
    setAllUser((prevUser) => {
      const newUser = { ...addUser };
      newUser.ID = Date.now().toString();
      console.log(addUser)
      return [newUser, ...prevUser]
    })
    setAddUser(startData);
  }


  return (
    <Layout >
      {/* <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      > */}
        <div className="demo-logo-vertical" />
        {/* <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['2']}
          items={[
            {
              key: "/",
              icon: <FileTextFilled/>,
              label: 'เสนอเคส',
            },
            {
              key: "/about",
              icon: <ReconciliationFilled/>,
              label: 'ตรวจสอบข้อมูล',
            },
          ]}
        />
        
      </Sider> */}
      <Layout style={{ height: "100vh" }}>
        <Header
          style={{
            // padding: 0,
            background: colorBgContainer,
            minHeight: 150,
          }}
        >
          <h2 style={{ textAlign: 'center' }}>บันทึกประวัติลูกค้า</h2>
          <div className='step'>
            <Steps
              size="large"
              current={0}
              items={[
                {
                  title: '',
                },
                {
                  title: '',
                },
              ]}
            />
          </div>
        </Header>
        <Content>
          <div>
            <Row style={{ textAlign: 'center', marginTop: '30px' }} >
              <Col span={8}></Col>
              <Col span={8} style={{ fontSize: '20px' }} >รายละเอียด</Col>
              <Col span={8}><Button type='primary' style={{ float: 'right', marginRight: '20px' }} ><PlusOutlined />เพิ่มรุ่นรถ</Button></Col>
            </Row>
          </div>
        </Content>
        <Content
          style={{
            margin: '10px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              // minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Form
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: '90%',
              }}
              initialValues={{
                remember: true,
              }} onFinish={onUserSubmit}>
              <Row>
                <Col className="gutter-row" span={12}>
                  <div>
                    <Form.Item label='ประเภทลูกค้า'>
                      <Input name='customer_type' placeholder='customer_type' value={addUser.customer_type} onChange={onValueChange} />
                    </Form.Item>
                    <Form.Item label='ประเภทสินค้า'>
                      <Input name='product_type' placeholder='product_type' value={addUser.product_type} onChange={onValueChange} />
                    </Form.Item>
                    <Form.Item label='ยี่ห้อ'>
                      <Input name='brand' placeholder='brand' value={addUser.brand} onChange={onValueChange} />
                    </Form.Item>
                    <Form.Item label='รุ่น'>
                      <Input name='model' placeholder='model' value={addUser.model} onChange={onValueChange} />
                    </Form.Item>
                    <Form.Item label='ปีที่ผลิต'>
                      <Input name='year' placeholder='year' value={addUser.year} onChange={onValueChange} />
                    </Form.Item>
                    <Form.Item label='ราคารถ'>
                      <Input name='car_price' placeholder='car_price' value={addUser.car_price} onChange={onValueChange} />
                    </Form.Item>
                    <Form.Item label='เลขทะเบียน'>
                      <Input name='license_plate' placeholder='license_plate' value={addUser.license_plate} onChange={onValueChange} />
                    </Form.Item>
                    <Form.Item label='ตัวอย่างรถ'>
                      <Button type='primary' onClick={() => { modal.info(config); }}>ดู</Button>
                    </Form.Item>
                    <Form.Item label='เพิ่มรูปภาพ'>
                      <Input name='img' placeholder='img' value={addUser.img} onChange={onValueChange} type='file' />
                    </Form.Item>
                  </div>
                </Col>
                <Col className="gutter-row" span={12}>
                  <div>
                    <Form.Item label='ประเภท'>
                      <Input name='type' placeholder='type' value={addUser.type} onChange={onValueChange} />
                    </Form.Item>
                    <Form.Item label='ชื่อลูกค้า'>
                      <Input name='customer_name' placeholder='customer_name' value={addUser.customer_name} onChange={onValueChange} />
                    </Form.Item>
                    <Form.Item label='ยอดที่ต้องการ'>
                      <Input name='balance' placeholder='balance' value={addUser.balance} onChange={onValueChange} />
                    </Form.Item>
                    <Form.Item label='เลทรถ'>
                      <Input name='rate' placeholder='rate' value={addUser.rate} onChange={onValueChange} />
                    </Form.Item>
                    <Form.Item label='ยอดกู้สุทธิ'>
                      <Input name='loan_amount' placeholder='loan_amount' value={addUser.loan_amount} onChange={onValueChange} />
                    </Form.Item>
                    <Form.Item label='จำนวนผ่อน'>
                      <Input name='installment_amount' placeholder='installment_amount' value={addUser.installment_amount} onChange={onValueChange} />
                    </Form.Item>
                    <Form.Item label='ดอกเบี้ยรวม'>
                      <Input name='total_interest' placeholder='total_interest' value={addUser.total_interest} onChange={onValueChange} />
                    </Form.Item>
                    <Form.Item label='ผ่อนรวมดอกเบี้ย'>
                      <Input name='installment_with_interest' placeholder='installment_with_interest' value={addUser.installment_with_interest} onChange={onValueChange} />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
              
              <div style={{
                // textAlign: 'center',
                margin: '0px 0px 0px 130px',
              }}>
                <Row style={{textAlign: 'center'}}>
                  <Col span={8}></Col>
                  <Col span={8}>
                    <Space>
                      <Button type="primary" htmlType='submit' size="large" ><SaveFilled />บันทึก</Button>
                      <Button type="primary" size="large" ><CloseSquareFilled />ยกเลิก</Button>
                      <Button type="primary" size="large" ><HomeFilled />หน้าหลัก</Button>
                    </Space>
                  </Col>
                  <Col span={8}></Col>
                </Row>
              </div>

              {/* <Button block type='primary' htmlType='submit' >เพิ่ม</Button> */}
            </Form>
            {contextHolder}
          </div>
        </Content>
        <div style={{ textAlign: 'center' }}>
                <Button type='primary' size="large" shape='circle' style={{ marginRight: '50%' }} ><ArrowLeftOutlined /></Button>
                <Button type='primary' size="large" shape='circle' style={{ marginLeft: '40%' }} ><ArrowRightOutlined /></Button>
              </div>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>

      </Layout>

    </Layout>
  )
}

export default Home