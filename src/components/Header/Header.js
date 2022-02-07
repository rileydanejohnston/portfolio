import React, { useState } from 'react';
import { HeaderWrapper, ContentWrapper, NavWrapper, Name, MenuIcon, CloseIcon } from './styledHeader';
import Navigation from '../Navigation/Navigation';

export default function Header({ appWidth }) {

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
          <Navigation
            headerMenuOpen={headerMenuOpen}
            setHeaderMenu={setHeaderMenuOpen}
            appWidth={appWidth}
          />
        </NavWrapper>
        <Name to='/'>{ appWidth > 768 ? 'Riley Johnston' : 'RJ'}</Name>
      </ContentWrapper>
    </HeaderWrapper>
  )
}
