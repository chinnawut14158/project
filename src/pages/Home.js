import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
    PlusOutlined, ArrowLeftOutlined, ArrowRightOutlined, SaveFilled, CloseSquareFilled, HomeFilled,
} from '@ant-design/icons';
import { Form, Input, Layout, Steps, theme, Col, Row, Select, Button, Space, Modal, Image, Table,  Upload } from 'antd';
import { Footer } from 'antd/es/layout/layout';

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

const { Header, Content, Sider } = Layout;

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
    date_submission: '',
    date_received: '',
    status: 'รอพิจารณา',
    time: 'ทอดสอบ',
}

let setid = 0;

function Home() {

    const { Option } = Select;

    const [modal2Open, setModal2Open] = useState(false);

    const [form] = Form.useForm();


    const onReset = () => {
        form.resetFields();
    };


    const { Column, ColumnGroup } = Table;

    const [addUser, setAddUser] = useState(startData);

    const [allUser, setAllUser] = useState([]);

    // const [editUser, setEditUser] = useState(null);

    // let navigate = useNavigate()

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

    function onUserDelete(userId) {
        console.log(userId)
        setAllUser((prevAllUser) => {
            console.log(prevAllUser)
            console.log(userId)
            return prevAllUser.filter((userList) => userList.id !== userId);
        })
    }


    function onUserSubmit(event) {
        setAllUser((prevUser) => {
            const newUser = { ...addUser };
            newUser.customer_type = event.customer_type;
            newUser.product_type = event.product_type;
            newUser.brand = event.brand;
            newUser.model = event.model;
            newUser.type = event.type;
            newUser.ID = setid += 1;
            newUser.date_submission = Date();
            newUser.date_received = Date();
            // newUser.date = Date();

            console.log(event)
            console.log(addUser)
            return [...prevUser, newUser]
        })
        // setAddUser(startData);
    }
    return (
        <Layout >
            <div className="demo-logo-vertical" />

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
                            <Col span={8}><Button type='primary' style={{ float: 'right', marginRight: '20px' }} onClick={() => setModal2Open(true)} ><PlusOutlined />เพิ่มรุ่นรถ</Button></Col>
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
                                span: 14,
                            }}
                            style={{
                                maxWidth: '100%',
                                padding: 20
                            }}
                            form={form}
                            onFinish={onUserSubmit}>
                            <Row>
                                <Col className="gutter-row" span={12}>
                                    <div>
                                        <Form.Item
                                            label='ประเภทลูกค้า'
                                            name='customer_type'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'โปรดเลือกประเภทลูกค้า!',
                                                },
                                            ]}>
                                            <Select placeholder="โปรดเลือกประเภทลูกค้า" value={addUser.customer_type} >
                                                <Option value="ผู้เช่ารถ">ผู้เช่ารถ</Option>
                                                <Option value="ประเภทที่2">ประเภทที่2</Option>
                                                <Option value="ประเภทที่3">ประเภทที่3</Option>
                                            </Select>
                                            {/* <Input name='customer_type' placeholder='กรอกข้อมูล' value={addUser.customer_type} onChange={onValueChange} /> */}
                                        </Form.Item>
                                        <Form.Item
                                            label='ประเภทสินค้า'
                                            name='product_type'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'โปรดเลือกประเภทสินค้า!',
                                                },
                                            ]}>
                                            <Select placeholder="โปรดเลือกประเภทสินค้า" value={addUser.product_type} >
                                                <Option value="รถ">รถ</Option>
                                                <Option value="บ้าน">บ้าน</Option>
                                                <Option value="ที่ดิน">ที่ดิน</Option>
                                            </Select>
                                            {/* <Input name='product_type' placeholder='กรอกข้อมูล' value={addUser.product_type} onChange={onValueChange} /> */}

                                        </Form.Item>
                                        <Form.Item
                                            label='ยี่ห้อ'
                                            name='brand'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'โปรดเลือกยี่ห้อ!',
                                                },
                                            ]}>
                                            <Select placeholder="โปรดเลือกยี่ห้อ" value={addUser.brand} >
                                                <Option value="Toyota">Toyota</Option>
                                                <Option value="Isuzu">Isuzu</Option>
                                                <Option value="Honda">Honda</Option>
                                                <Option value="Mitsubishi">Mitsubishi</Option>
                                                <Option value="Nissan">Nissan</Option>
                                                <Option value="Mazda">Mazda</Option>
                                                <Option value="Ford">Ford</Option>
                                                <Option value="MG">MG</Option>
                                                <Option value="Suzuki">Suzuki</Option>
                                                <Option value="Hyundai">Hyundai</Option>
                                                <Option value="Volvo">Volvo</Option>
                                                <Option value="Subaru">Subaru</Option>
                                                <Option value="Benz">Benz</Option>
                                                <Option value="Bmw">Bmw</Option>
                                            </Select>
                                            {/* <Input name='brand' placeholder='กรอกข้อมูล' value={addUser.brand} onChange={onValueChange} /> */}
                                        </Form.Item>
                                        <Form.Item
                                            label='รุ่น'
                                            name='model'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'โปรดเลือกรุ่น!',
                                                },
                                            ]}>
                                            <Select placeholder="โปรดเลือกรุ่น" value={addUser.model} >
                                                <Option value="รุ่น1">รุ่น1</Option>
                                                <Option value="รุ่น2">รุ่น2</Option>
                                                <Option value="รุ่น3">รุ่น3</Option>
                                            </Select>
                                            {/* <Input name='model' placeholder='กรอกข้อมูล' value={addUser.model} onChange={onValueChange} /> */}
                                        </Form.Item>
                                        <Form.Item
                                            label='ปีที่ผลิต'
                                            name='year'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'โปรดกรอกปีที่ผลิต!',
                                                },
                                            ]}>
                                            <Input name='year' placeholder='กรอกข้อมูล' value={addUser.year} onChange={onValueChange} />
                                        </Form.Item>
                                        <Form.Item
                                            label='ราคารถ'
                                            name='car_price'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'โปรดกรอกราคารถ!',
                                                },
                                            ]}>
                                            <Input name='car_price' placeholder='กรอกข้อมูล' value={addUser.car_price} onChange={onValueChange} />
                                        </Form.Item>
                                        <Form.Item
                                            label='เลขทะเบียน'
                                            name='license_plate'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'โปรดกรอกหมายเลขทะเบียน!',
                                                },
                                            ]}>
                                            <Input name='license_plate' placeholder='กรอกข้อมูล' value={addUser.license_plate} onChange={onValueChange} />
                                        </Form.Item>
                                        <Form.Item label='ตัวอย่างรถ'>
                                            <Button type='primary' onClick={() => { modal.info(config); }}>ดู</Button>
                                        </Form.Item>
                                        <Form.Item
                                            label='เพิ่มรูปภาพ'
                                            name='img'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'โปรดเพิ่มรูปภาพ!',
                                                },
                                            ]}>
                                            {/* <Input name='img' placeholder='กรอกข้อมูล' value={addUser.img} onChange={onValueChange} type='file' /> */}
                                            <Upload
                                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                listType="picture-card"
                                                maxCount={3}
                                                multiple
                                            >
                                            <Button type='ghost'><PlusOutlined /></Button>
                                            </Upload>
                                        </Form.Item>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={12}>
                                    <div>
                                        <Form.Item
                                            label='ประเภท'
                                            name='type'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'โปรดเลือกประเภท!',
                                                },
                                            ]}>
                                            <Select placeholder="โปรดเลือกประเภท" value={addUser.type} >
                                                <Option value="ถือเล่มมา">ถือเล่มมา</Option>
                                                <Option value="ปิดยอดไฟแนนซ์">ปิดยอดไฟแนนซ์</Option>
                                                <Option value="ซื้อขาย">ซื้อขาย</Option>
                                            </Select>
                                            {/* <Input name='type' placeholder='กรอกข้อมูล' value={addUser.type} onChange={onValueChange} /> */}
                                        </Form.Item>
                                        <Form.Item
                                            label='ชื่อลูกค้า'
                                            name='customer_name'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'โปรดกรอกชื่อลูกค้า!',
                                                },
                                            ]}>
                                            <Input name='customer_name' placeholder='กรอกข้อมูล' value={addUser.customer_name} onChange={onValueChange} />
                                        </Form.Item>
                                        <Form.Item
                                            label='ยอดที่ต้องการ'
                                            name='balance'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'โปรดกรอกยอดที่ต้องการ!',
                                                },
                                            ]}>
                                            <Input name='balance' placeholder='กรอกข้อมูล' value={addUser.balance} onChange={onValueChange} />
                                        </Form.Item>
                                        <Form.Item
                                            label='เลทรถ'
                                            name='rate'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'โปรดกรอกเลทรถ!',
                                                },
                                            ]}>
                                            <Input name='rate' placeholder='กรอกข้อมูล' value={addUser.rate} onChange={onValueChange} />
                                        </Form.Item>
                                        <Form.Item
                                            label='ยอดกู้สุทธิ'
                                            name='loan_amount'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'โปรดกรอกยอดกู้สุทธิ!',
                                                },
                                            ]}>
                                            <Input name='loan_amount' placeholder='กรอกข้อมูล' value={addUser.loan_amount} onChange={onValueChange} />
                                        </Form.Item>
                                        <Form.Item
                                            label='จำนวนผ่อน'
                                            name='installment_amount'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'โปรดกรอกจำนวนผ่อน!',
                                                },
                                            ]}>
                                            <Input name='installment_amount' placeholder='กรอกข้อมูล' value={addUser.installment_amount} onChange={onValueChange} />
                                        </Form.Item>
                                        <Form.Item
                                            label='ดอกเบี้ยรวม'
                                            name='total_interest'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'โปรดกรอกดอกเบี้ยรวม!',
                                                },
                                            ]}>
                                            <Input name='total_interest' placeholder='กรอกข้อมูล' value={addUser.total_interest} onChange={onValueChange} />
                                        </Form.Item>
                                        <Form.Item
                                            label='ผ่อนรวมดอกเบี้ย'
                                            name='installment_with_interest'
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'โปรดกรอกผ่อนรวมดอกเบี้ย!',
                                                },
                                            ]}>
                                            <Input name='installment_with_interest' placeholder='กรอกข้อมูล' value={addUser.installment_with_interest} onChange={onValueChange} />
                                        </Form.Item>
                                    </div>
                                </Col>
                            </Row>

                            <div style={{
                                // textAlign: 'center',
                                // margin: '0px 0px 0px 130px',
                                textAlign: 'center',

                            }}>
                                {/* <Row style={{ textAlign: 'center' }}>
                                    <Col span={8}></Col>
                                    <Col span={8}> */}
                                <Space>
                                    <Button type="primary" htmlType='submit' size="large" ><SaveFilled />บันทึก</Button>
                                    <Button type="primary" size="large" onClick={onReset} ><CloseSquareFilled />ยกเลิก</Button>
                                    <Button type="primary" size="large"><HomeFilled />หน้าหลัก</Button>
                                </Space>
                                {/* </Col>
                                    <Col span={8}></Col>
                                </Row> */}
                            </div>

                            {/* <Button block type='primary' htmlType='submit' >เพิ่ม</Button> */}
                            <Modal
                                title="เพิ่มรุ่นรถ (ทดสอบ)"
                                centered
                                open={modal2Open}
                                onOk={() => setModal2Open(false)}
                                onCancel={() => setModal2Open(false)}
                            >
                                <Form.Item
                                    label='ยี่ห้อ'
                                    name='test3'>
                                    <Select placeholder='โปรดเลืกยี่ห้อรถ'>
                                        <Select.Option value="Toyota">Toyota</Select.Option>
                                        <Select.Option value="Isuzu">Isuzu</Select.Option>
                                        <Select.Option value="Honda">Honda</Select.Option>
                                        <Select.Option value="Mitsubishi">Mitsubishi</Select.Option>
                                        <Select.Option value="Nissan">Nissan</Select.Option>
                                        <Select.Option value="Mazda">Mazda</Select.Option>
                                        <Select.Option value="Ford">Ford</Select.Option>
                                        <Select.Option value="MG">MG</Select.Option>
                                        <Select.Option value="Suzuki">Suzuki</Select.Option>
                                        <Select.Option value="Hyundai">Hyundai</Select.Option>
                                        <Select.Option value="Volvo">Volvo</Select.Option>
                                        <Select.Option value="Subaru">Subaru</Select.Option>
                                        <Select.Option value="Benz">Benz</Select.Option>
                                        <Select.Option value="Bmw">Bmw</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    label='รุ่นรถ'
                                    name='test2'>
                                    <Input placeholder='กรอกรุ่นรถ' />
                                </Form.Item>
                                <p>ทดสอบๆ</p>
                            </Modal>
                        </Form>

                        {contextHolder}
                    </div>
                </Content>
                <div style={{ textAlign: 'center' }}>
                    <Button type='primary' size="large" shape='circle' style={{ marginRight: '40%' }} ><ArrowLeftOutlined /></Button>
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