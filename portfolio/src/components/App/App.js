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
import { Route, Switch, Link } from 'react-router-dom';
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
          <Menu.Item style={{marginTop: 0}} key={1} icon={<HomeOutlined />}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key={2} icon={<UserOutlined />}>
            <Link to='/about'>About</Link>
          </Menu.Item>
          <Menu.Item key={3} icon={<ToolOutlined />}>
            <Link to='/projects'>Projects</Link>
          </Menu.Item>
          <Menu.Item key={4} icon={<MailOutlined />}>
            <Link to='/contact'>Contact</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
      <Header style={{background: '#fff'}}></Header>
      <Content>
        <Switch>
          <Route exact path='/'></Route>
          <Route path='/about'></Route>
          <Route path='/projects'></Route>
          <Route path='/contact'></Route>
        </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default App;
