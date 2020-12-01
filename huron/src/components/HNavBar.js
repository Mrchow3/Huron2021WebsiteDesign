import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Modal,
} from 'react-bootstrap';
import './css/HNavBar.css';
import logo from './gmegv3da01.svg';
import HModal from './HModal.js';
/*
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Book your trip now!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          BLAH BLAH BLAH
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
*/

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
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <NavDropdown title='Plan Your Travel' class='category'>
                <NavDropdown.Item class="specific-dropdown" href='#/activities'>Activites</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='Convention Info' class='category'>
              <NavDropdown.Item href='#/convention-center'>Convention Center</NavDropdown.Item>
                <NavDropdown.Item href='#/schedule'>Schedule</NavDropdown.Item>
                <NavDropdown.Item href='#/hotels'>Hotels</NavDropdown.Item>
                <NavDropdown.Item href='#/food'>Food</NavDropdown.Item>
                <NavDropdown.Item href='#/convention-transportation'>Transportation</NavDropdown.Item>
                <NavDropdown.Item href='#/activities'>Activites</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title='Explore Orlando' class='category'>
                <NavDropdown.Item href='#/explore-transportation'>Transportation</NavDropdown.Item>
                <NavDropdown.Item href='#/'>Sight Seeing</NavDropdown.Item>
                <NavDropdown.Item href='#/'>Attractions</NavDropdown.Item>
                <NavDropdown.Item href='#/'>Local Food</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          <Nav className='mr-auto'>
          </Nav> 
          <HModal/>
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
/*
<Button variant="outline-primary" onClick={() => setModalShow(true)}>Book Now!</Button>
<MyVerticallyCenteredModal
show={modalShow}
onHide={() => setModalShow(false)}
/>*/