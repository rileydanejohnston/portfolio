import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { HeaderWrapper, Title, Location } from './styledHeader';

export default function Header() {

  const location = useLocation();
  const [route, setRoute] = useState('');

  useEffect(() => {
    if (location.pathname === '/about') {
      setRoute('About');
    }
    else if (location.pathname === '/projects') {
      setRoute('Projects');
    }
    else if (location.pathname === '/contact') {
      setRoute('Contact');
    }
  }, [location.pathname]);
  

  return (
    <HeaderWrapper>
      {
        location.pathname === '/'
          && 
        <Title>Hi, I'm Riley Johnston</Title>
      }
      {
        location.pathname !== '/' 
          && 
        <Location>Riley Johnston / {route}</Location>
      }
    </HeaderWrapper>
  )
}
