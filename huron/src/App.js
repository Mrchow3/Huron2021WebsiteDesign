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
import ExFood from './components/pages/ExFood';
import ExSightseeing from './components/pages/ExSightseeing';
import { foodInputs } from './components/inputs/FoodInputs.js';
import ExFoodSingle from './components/pages/ExFoodSingle';

function App() {
  var boo = ExFoodSingle(foodInputs[0]);
  return (
    <HashRouter basename={process.env.PUBLIC_URL + '/'}>
      <HNavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/food' component={Food} />
        <Route path='/explore-transportation' component={ExTransportation} />
        <Route path='/explore-food' component={ExFood} />
        <Route path='/explore-food-italian' component={ExFoodSingle} children={ <ExFoodSingle
          type = {foodInputs[0].type}
          content = {foodInputs[0].content}
        />} />
        <Route path='/explore-food-asian' component={ExFoodSingle} children={ <ExFoodSingle
          type = {foodInputs[1].type}
          content = {foodInputs[1].content}
        />} />
        <Route path='/explore-food-hispanic' component={ExFoodSingle} children={ <ExFoodSingle
          type = {foodInputs[2].type}
          content = {foodInputs[2].content}
        />} />
        <Route path='/explore-food-fusion' component={ExFoodSingle} children={ <ExFoodSingle
          type = {foodInputs[3].type}
          content = {foodInputs[3].content}
        />} />
        <Route path='/explore-food-american' component={ExFoodSingle} children={ <ExFoodSingle
          type = {foodInputs[4].type}
          content = {foodInputs[4].content}
        />} />
        <Route path='/explore-food-african' component={ExFoodSingle} children={ <ExFoodSingle
          type = {foodInputs[5].type}
          content = {foodInputs[5].content}
        />} />
        <Route path='/explore-sightseeing' component={ExSightseeing} />
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
