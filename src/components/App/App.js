import React from 'react';
import 'antd/dist/antd.css';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import { AppWrapper, Main } from './styledApp';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Header from '../Header/Header';



function App() {

  return (
    <AppWrapper>
      <Header />
      <Main>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Main>
    </AppWrapper>
  )
}

export default App;
