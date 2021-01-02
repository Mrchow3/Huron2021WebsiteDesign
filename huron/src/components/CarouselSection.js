import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Carousel,
  CarouselItem,
} from 'react-bootstrap';

import './css/CarouselSection.css';
import HeroSection from './HeroSection.js';

function CarouselSection(props) {
  const CarouselStyles = {
    height: `${props.height}px`,
  };

  return (
    <div className='carousel'>
      <Carousel> {props.children}</Carousel>
    </div>
  );
}

export default CarouselSection;

/*
 */
