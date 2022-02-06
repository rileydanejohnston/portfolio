import React from 'react';
import 'antd/dist/antd.css';
import { AppWrapper } from './styledApp';
import Header from '../Header/Header';
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import Main from '../Main/Main';



function App() {

  return (
    <AppWrapper>
      <ParticleBackground />
      <Header />
      <Main />
    </AppWrapper>
  )
}

export default App;
