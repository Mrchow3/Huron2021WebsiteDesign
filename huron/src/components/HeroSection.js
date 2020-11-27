import React, {useState,useEffect} from 'react'
import {Navbar,Nav,Container, NavDropdown,Form, FormControl, Button} from 'react-bootstrap'
import './HeroSection.css';

//const Navbar;
function HeroSection(props) {

    const HeroStyles = {
        'background-image': `url(${props.image})`,
        'height' : `${props.height}vh`
    }

  return (
    <div className = 'hero-image' style={HeroStyles}>
      {props.children}
    </div>
  );
}

export default HeroSection;