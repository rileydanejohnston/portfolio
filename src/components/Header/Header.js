import React, { useState } from 'react';
import { HeaderWrapper, ContentWrapper, NavWrapper, Name, MenuIcon, CloseIcon } from './styledHeader';
import { 
  HomeOutlined,
  UserOutlined,
  MailOutlined,
  ToolOutlined
} from '@ant-design/icons';

export default function Header() {

  const [headerMenuOpen, setHeaderMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <ContentWrapper>
        <NavWrapper>
          {
            headerMenuOpen ? 
              <CloseIcon onClick={() => setHeaderMenuOpen(!headerMenuOpen)} />
            : 
              <MenuIcon onClick={() => setHeaderMenuOpen(!headerMenuOpen)} />
          }
        </NavWrapper>
        <Name>Riley Johnston</Name>
      </ContentWrapper>
    </HeaderWrapper>
  )
}
