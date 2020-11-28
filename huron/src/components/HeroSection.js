import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import './css/HeroSection.css';

//const Navbar;
function HeroSection(props) {
  const HeroStyles = {
    'background-image': `url(${props.image})`,
    height: `${props.height}vh`,
    filter: `brightness(${props.filter}%)`,
  };

  return (
    <div className='parent-hero'>
      <div className='hero-image' style={HeroStyles}></div>
      {props.children}
    </div>
  );
}

export default HeroSection;
