import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { 
  HomeOutlined,
  UserOutlined,
  MailOutlined,
  ToolOutlined
} from '@ant-design/icons';
import {
  Layout,
  Menu
} from 'antd';
const {
  Header,
  Content,
  Footer,
  Sider
} = Layout;

function App() {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item style={{marginTop: 0}} key={1} icon={<HomeOutlined />}>Home</Menu.Item>
          <Menu.Item key={2} icon={<UserOutlined />}>About</Menu.Item>
          <Menu.Item key={3} icon={<ToolOutlined />}>Projects</Menu.Item>
          <Menu.Item key={4} icon={<MailOutlined />}>Contact</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{background: '#fff'}}></Header>
        <Content style={{ padding: '0 50px' }}>
          <div>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default App;
