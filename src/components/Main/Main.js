import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import { MainWrapper } from './styledMain';

export default function Main({ openTech }) {
  return (
    <MainWrapper>
      <Switch>
          <Route exact path='/'>
            <Home openTech={openTech}/>
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
    </MainWrapper>
  );
}
