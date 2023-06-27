import React from 'react'
import Home from './Home'
import { Navigatee, useNavigate } from 'react-router-dom'

import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    PlusCircleFilled,
    ScanOutlined,
    QuestionCircleFilled,
    HomeFilled,
    SearchOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Space, Table, Tag, AutoComplete, Input, Col, Row, Select, Form, Tooltip } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { useState } from 'react';


const { Column, ColumnGroup } = Table;
const { Header, Sider, Content } = Layout;


const data = [
    {
        key: '1',
        name: 'นางสาวภูมิใจ ใจดี',
        license: '34-3257',
        rate: '50000',
        loan_amount: '50000',
        submission_date: '2023-05-07 08:30',
        documents_date: '2023-05-07 11:30',
        time: '3 ชม.',
        tags: ['ปฏิเสธสินเชื่อ'],
        info: 'test1',
    },
    {
        key: '2',
        name: 'นางสาวอรพรรณ วงค์ตาทำ',
        license: 'กจ 1254',
        rate: '150000',
        loan_amount: '150000',
        submission_date: '2023-05-07 08:30',
        documents_date: '2023-05-07 11:30',
        time: '3 ชม.',
        tags: ['อนุมัติ'],
        info: 'test2',
    },
    {
        key: '3',
        name: 'นางxxxxxxxx xxxx',
        license: '34-3257',
        rate: '50000',
        loan_amount: '50000',
        submission_date: '2023-05-07 08:30',
        documents_date: '2023-05-07 11:30',
        time: '3 ชม.',
        tags: ['รอพิจารณา'],
        info: 'test3',
    },
];
const Check = () => {
// function Check() {

    let navigate = useNavigate()

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    
    return (
        
        <Layout>
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
                    defaultSelectedKeys={['4']}
                    items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                        (icon, index) => ({
                            key: String(index + 1),
                            icon: React.createElement(icon),
                            label: `nav ${index + 1}`,
                        }),
                    )}
                />
            </Sider> */}
            <Layout>
                <Header
                    style={{
                        // padding: 0,
                        background: colorBgContainer,
                        minHeight: 150,
                    }}
                >
                    <h2 style={{ textAlign: 'center' }}>ตรวจสอบข้อมูล</h2>
                    <Row style={{ textAlign: 'center' }} >
                        <Col span={8}>
                            <Form.Item>
                                <Select defaultValue="เลขบัตรประชาชน" style={{ width: '70%' }}>
                                    <Select.Option value="เลขบัตรประชาชน">เลขบัตรประชาชน</Select.Option>
                                    <Select.Option value="ชื่อ-สกุล">ชื่อ-สกุล</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}><Form.Item><Input /></Form.Item></Col>
                        <Col span={8}><Form.Item><Button type='primary' >ค้นหา <SearchOutlined /></Button></Form.Item></Col>
                    </Row>
                </Header>

                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        <Table dataSource={allUser}>
                            <Column title="ลำดับ" dataIndex="key" key="key" />
                            <Column title="ชื่อ-สกุล" dataIndex="name" key="name" />
                            <Column title="ทะเบียน" dataIndex="license" key="license" />
                            <Column title="เรท" dataIndex="rate" key="rate" />
                            <Column title="ยอดกู้" dataIndex="loan_amount" key="loan_amount" />
                            <Column title="วันที่เสนอ" dataIndex="submission_date" key="submission_date" />
                            <Column title="วันที่รับ" dataIndex="documents_date" key="documents_date" />
                            <Column title="ระยะเวลา" dataIndex="time" key="time" />
                            <Column
                                title="สถานะ"
                                dataIndex="tags"
                                key="tags"
                                render={(tags) => (
                                    <>
                                        {tags.map((tag) => (
                                            <Tag color="blue" key={tag}>
                                                {tag}
                                            </Tag>
                                        ))}
                                    </>
                                )}
                            />
                            <Column
                                title="Action"
                                key="action"
                                render={(_, record) => (
                                    <Space size="middle">
                                        <a>Delete</a>
                                    </Space>
                                )}
                            />
                        </Table>
                    </div>
                </Content>
                <Content>
                    <div style={{
                        textAlign: 'center',
                        margin: '100px 0px 0px 0px',
                    }}>
                        <Space>
                            <Button type="primary" size="large" ><PlusCircleFilled />เพิ่ม</Button>
                            <Button type="primary" size="large" ><ScanOutlined />สแกน</Button>
                            <Button type="primary" size="large" ><QuestionCircleFilled />วิธีใช้งาน</Button>
                            <Button type="primary" size="large" ><HomeFilled />หน้าหลัก</Button>
                        </Space>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
            
        </Layout>
    );
};
export default Check