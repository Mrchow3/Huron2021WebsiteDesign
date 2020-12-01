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
import './css/HNavBar.css';
import logo from './gmegv3da01.svg';

//const Navbar;
function HNavBar() {
  return (
    <Navbar expand='lg' bg='light' fixed='top'>
      <Navbar.Brand href='#/'>
        <img
          alt=''
          src={logo}
          width='30'
          height='30'
          className='d-inline-block align-top'
        />{' '}
        BPA Plan
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <NavDropdown title='Plan Your Travel' class='category'>
                <NavDropdown.Item class="specific-dropdown" href='#/activities'>Activites</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='Convention Info' class='category'>
                <NavDropdown.Item href='#/activities'>Activites</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='Explore Orlando' class='category'>
                <NavDropdown.Item href='#/explore-transportation'>Transportation</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          <Nav className='mr-auto'>
          </Nav> 
          <Form inline>
          <Button variant="outline-primary">Book Now!</Button>
          </Form>
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
/*
<Nav.Link href='#/food'>Plan Your Travel</Nav.Link>
            <Nav.Link href='#/hotels'>Convention Info</Nav.Link>
            <Nav.Link href='#/transportation'>Transportation</Nav.Link>
            <Nav.Link href='#/activities'>Activites</Nav.Link>
            <NavDropdown title='Other' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#/activities'>Activites</NavDropdown.Item>
            </NavDropdown>*/