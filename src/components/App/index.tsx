import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Page2 from '../../pages/Page2';
import Page3 from '../../pages/Page3';
import Footer from '../Footer';
import Header from '../Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/page2">
        <Page2 />
      </Route>
      <Route path="/page3">
        <Page3 />
      </Route>
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default App;
