import React from 'react';
import { 
  HomeOutlined,
  UserOutlined,
  MailOutlined,
  ToolOutlined
} from '@ant-design/icons';
import { NavGroup, NavList, NavWrapper, NavText, NavLinkWrapper } from './styledNavigation';

export default function Navigation() {
  return (
    <NavWrapper>
      <NavList>
        <NavGroup>
          <NavLinkWrapper exact to='/' activeStyle={{opacity: 1}}>
            <HomeOutlined />
            <NavText>Home</NavText>
          </NavLinkWrapper>
        </NavGroup>
        <NavGroup>
          <NavLinkWrapper exact to='/projects' activeStyle={{opacity: 1}}>
            <ToolOutlined />
            <NavText>Projects</NavText>
          </NavLinkWrapper>
        </NavGroup>
        <NavGroup>
          <NavLinkWrapper exact to='/about' activeStyle={{opacity: 1}}>
            <UserOutlined />
            <NavText>About</NavText>
          </NavLinkWrapper>
        </NavGroup>
        <NavGroup>
          <NavLinkWrapper exact to='/contact' activeStyle={{opacity: 1}}>
            <MailOutlined />
            <NavText>Contact</NavText>
          </NavLinkWrapper>
        </NavGroup>
      </NavList>
    </NavWrapper>
  )
}
