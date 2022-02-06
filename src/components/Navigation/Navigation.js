import React from 'react';
import { 
  HomeOutlined,
  UserOutlined,
  MailOutlined,
  ToolOutlined
} from '@ant-design/icons';
import { NavGroup, NavList, NavWrapper, NavText, NavLinkWrapper } from './styledNavigation';
import { navData } from '../../constants/navigation';

export default function Navigation({ headerMenuOpen, setHeaderMenu }) {

  return (
    <NavWrapper headerMenuOpen={headerMenuOpen}>
      <NavList>
        {
          navData.map(({ path, text }) => {
            return (
              <NavGroup>
                <NavLinkWrapper 
                  exact to={path}
                  activeStyle={{opacity: 1}}
                  onClick={() => setHeaderMenu(false)}
                >
                  { /* determine which icon to use based on path */ }
                  { path === '/'         && <HomeOutlined /> }
                  { path === '/projects' && <ToolOutlined /> }
                  { path === '/about'    && <UserOutlined /> }
                  { path === '/contact'  && <MailOutlined /> }
                  <NavText>{text}</NavText>
                </NavLinkWrapper>
              </NavGroup>
            )
          })
        }
      </NavList>
    </NavWrapper>
  )
}
