import React, { useState } from 'react';
import { 
  HomeOutlined,
  UserOutlined,
  MailOutlined,
  ToolOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;



export default function SideMenu() {

  const [collapsed, setCollapsed] = useState(false);

  return (
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
  );
}
