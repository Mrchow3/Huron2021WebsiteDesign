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
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HNavBar from './components/HNavBar.js';
import Home from './components/pages/Home.js';
import Food from './components/pages/Food';

function App() {
  return (
    <>
      <Router>
        <HNavBar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/food' exact component={Food} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
/*      
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
*/
