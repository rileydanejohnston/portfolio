import React from 'react';
import { 
  HomeOutlined,
  UserOutlined,
  MailOutlined,
  ToolOutlined
} from '@ant-design/icons';
import { NavGroup, NavList, NavWrapper, NavText, NavLinkWrapper } from './styledNavigation';

export default function Navigation({ headerMenuOpen, setHeaderMenu }) {
  return (
    <NavWrapper headerMenuOpen={headerMenuOpen}>
      <NavList>
        <NavGroup>
          <NavLinkWrapper 
            exact to='/'
            activeStyle={{opacity: 1}}
            onClick={() => setHeaderMenu(false)}
          >
            <HomeOutlined />
            <NavText>Home</NavText>
          </NavLinkWrapper>
        </NavGroup>
        <NavGroup>
          <NavLinkWrapper
            exact to='/projects'
            activeStyle={{opacity: 1}}
            onClick={() => setHeaderMenu(false)}
          >
            <ToolOutlined />
            <NavText>Projects</NavText>
          </NavLinkWrapper>
        </NavGroup>
        <NavGroup>
        <NavLinkWrapper
            exact to='/about'
            activeStyle={{opacity: 1}}
            onClick={() => setHeaderMenu(false)}
          >
            <UserOutlined />
            <NavText>About</NavText>
          </NavLinkWrapper>
        </NavGroup>
        <NavGroup>
        <NavLinkWrapper
            exact to='/contact'
            activeStyle={{opacity: 1}}
            onClick={() => setHeaderMenu(false)}
          >
            <MailOutlined />
            <NavText>Contact</NavText>
          </NavLinkWrapper>
        </NavGroup>
      </NavList>
    </NavWrapper>
  )
}
