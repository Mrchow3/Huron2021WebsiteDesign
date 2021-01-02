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
    filter: `brightness(${props.filter}%)`
  };

  const ParentStyle = {
    height: `${props.height}vh`,
    width: '100vw'
  };

  return (
    <div className='parent-hero' style={ParentStyle}>
      <div className='hero-image'style={HeroStyles}></div>
      {props.children}
    </div>
  );
}

export default HeroSection;
