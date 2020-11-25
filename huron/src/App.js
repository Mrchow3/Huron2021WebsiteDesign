import logo from './logo.svg';
import React, {useState,useEffect} from 'react'
import {Navbar,Nav,Container, NavDropdown,Form, FormControl, Button, Image} from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HNavBar from './components/HNavBar.js'

function App() {
  return (
    <div className="App">
      <HNavBar/>
      <div className = 'hero-image1'>
        <p>TESTING THIS TEXT</p>
      </div>
        <div className = 'hero-image2'>
          <p>TESTING THIS TEXT</p>
      </div>
    </div>
  );
}

export default App;
/*      <Container>
        <Navbar expand="lg" variant="tabs" bg="dark">
          <Navbar.Collapse>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
      </Container> */