import React from 'react';
import 'antd/dist/antd.css';
import { AppWrapper } from './styledApp';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import Main from '../Main/Main';
import { SizeMe } from 'react-sizeme';

function App() {

  return (
    <SizeMe>
    {
      ({ size }) => 
      <AppWrapper>
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
