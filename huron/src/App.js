import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image,
  Carousel,
  CarouselItem,
} from 'react-bootstrap';
import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HNavBar from './components/HNavBar.js';
import Home from './components/pages/Home.js';
import Food from './components/pages/Food';
import Hotels from './components/pages/Hotels';
import ExTransportation from './components/pages/ExTransportation';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <HNavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/food' component={Food} />
        <Route path='/explore-transportation' component={ExTransportation} />
        <Route path='/hotels' component={Hotels} />
      </Switch>
    </HashRouter>
  );
}

export default App;
/*      
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
*/
