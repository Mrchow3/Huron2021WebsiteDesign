import logo from './logo.svg';
import React, {useState,useEffect} from 'react'
import {Navbar,Nav,Container, NavDropdown,Form, FormControl, Button, Image,Carousel,CarouselItem} from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HNavBar from './components/HNavBar.js'
import HeroSection from './components/HeroSection.js'
import TextSection from './components/TextSection.js'
import CarouselSection from './components/CarouselSection.js'

function App() {
  return (
    <div className="App">
      <HNavBar/>
      <HeroSection image ="https://desktopwalls.net/wp-content/uploads/2015/09/Tropical%20Beach%20Palm%20Trees%204K%20Desktop%20Wallpaper.jpg" height = "90">
        <div className = "child">
          <header className ="header">Plan Your Trip to Nationals</header>
        </div>
        
      </HeroSection>
      <CarouselSection height = "100"/>
      
      <HeroSection image ="https://www.itl.cat/pngfile/big/92-924579_bondi-beach-ultra-hd-4k-wallpaper-4k-desktop.jpg">

      </HeroSection>
      
    </div>
  );
}
/* = "vh-100 d-flex flex-column justify-content-between align-items-center">*/
export default App;
/*      <Container>
        <Navbar expand="lg" variant="tabs" bg="dark">
          <Navbar.Collapse>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
      </Container> */