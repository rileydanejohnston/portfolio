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
const {
  Header,
  Content,
  Footer,
} = Layout;



function App() {

  return (
    <AppLayout>
      <SideMenu />
      <Layout>
        <Header style={{background: '#fff'}}>Riley Johnston</Header>
        <Content>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/projects'></Route>
            <Route path='/contact'></Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </AppLayout>
  )
}

export default App;
