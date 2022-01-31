import React from 'react';
import 'antd/dist/antd.css';
import SideMenu from '../SideMenu/SideMenu';
import {
  Layout,
} from 'antd';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import { AppLayout } from './styledApp';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Header from '../Header/Header';
const {
  Content,
  Footer,
} = Layout;



function App() {

  return (
    <AppLayout>
      <SideMenu />
      <Layout>
        <Header />
        <Content>
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
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </AppLayout>
  )
}

export default App;
