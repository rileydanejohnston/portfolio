import React, { useState } from 'react';
import { HeaderWrapper, ContentWrapper, NavWrapper, Name, MenuIcon, CloseIcon } from './styledHeader';
import Navigation from '../Navigation/Navigation';

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
          <Navigation />
        </NavWrapper>
        <Name>Riley Johnston</Name>
      </ContentWrapper>
    </HeaderWrapper>
  )
}
