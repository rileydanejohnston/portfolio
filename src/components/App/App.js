import React from 'react';
import 'antd/dist/antd.css';
import { AppWrapper } from './styledApp';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import Main from '../Main/Main';
import { SizeMe } from 'react-sizeme';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  const location = useLocation();

  return (
    <SizeMe>
    {
      ({ size }) => 
      <AppWrapper path={location.pathname}>
        <ParticleBackground />
        <Header appWidth={size.width} />
        <Main />
        <Footer />
      </AppWrapper>
    }
    </SizeMe>
  )
}

export default App;
