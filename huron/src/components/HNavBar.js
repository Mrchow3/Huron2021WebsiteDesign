import React, {useState,useEffect} from 'react'
import {Navbar,Nav,Container, NavDropdown,Form, FormControl, Button} from 'react-bootstrap'
import './HNavBar.css';
import logo from './gmegv3da01.svg';

//const Navbar;
function HNavBar() {
  return (
      <Navbar expand="lg" bg="light" fixed="top">
        <Navbar.Brand href="#home">
        <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '} BPA Plan
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#food">Food</Nav.Link>
            <Nav.Link href="#hotels">Hotels</Nav.Link>
            <Nav.Link href="#transportation">Transportation</Nav.Link>
            <NavDropdown title="Other" id="basic-nav-dropdown">
              <NavDropdown.Item href="#activities">Activites</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default HNavBar;
/*      <Container>
        <Navbar expand="lg" variant="tabs" bg="dark">
          <Navbar.Collapse>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
      </Container> */