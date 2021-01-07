/*
Component to display a hero image banner and change the background opactity and image
*/

import React, { useState, useEffect } from 'react';
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
