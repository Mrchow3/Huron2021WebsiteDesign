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
import 'bootstrap/dist/css/bootstrap.min.css';

import HeroSection from '../HeroSection.js';
import TextSection from '../TextSection.js';
import CarouselSection from '../CarouselSection.js';

function Food() {
  return (
    <div className='food'>
      <h1>TESTING THIS PAGE</h1>
    </div>
  );
}

export default Food;
/*      
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
*/
