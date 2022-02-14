import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { AppWrapper } from './styledApp';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import Main from '../Main/Main';
import { SizeMe } from 'react-sizeme';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Popup from '../Popup/Popup';
import TechPopup from '../TechPopup/TechPopup';

function App() {

  const location = useLocation();
  const [techOpen, setTechOpen] = useState(false);

  const closePopups = () => {
    setTechOpen(false);
  }

  const openTechPopup = () => {
    setTechOpen(true);
  }

  return (
    <SizeMe>
    {
      ({ size }) => 
      <AppWrapper path={location.pathname}>
        <ParticleBackground />
        <Header appWidth={size.width} />
        <Main
          openTech={openTechPopup}
        />
        <Footer />
        {
          location.pathname === '/'
            && 
          <TechPopup
            closePopups={closePopups}
            techOpen={techOpen}
          />
        }
      </AppWrapper>
    }
    </SizeMe>
  )
}

export default App;
