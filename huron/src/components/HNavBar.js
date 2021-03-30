/*
Navbar component to be reused on every page
*/

import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  DropdownButton,
  Dropdown
} from 'react-bootstrap';
import './css/HNavBar.css';
import palmlogo from './pages/assets/palm-logo.png';
import bpalogo from './pages/assets/logo-transparent.png'
import HModal from './HModal';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//const Navbar;
function HNavBar() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 300){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  const [centerPills, setCenterPills] = useState(window.innerWidth);
  const editPills = () => {
    setCenterPills(window.innerWidth);
  }
  window.addEventListener('resize', editPills);
  return (
    <Navbar expand='lg' variant="dark" className={colorChange ? 'dark-nav' : 'transparent-nav'} fixed='top'>
      <Navbar.Brand className="" href='#/' style={{'font-size': '1.6em'}}>
        <img
          alt=''
          src={bpalogo}
          width='auto'
          height='50'
          className='d-inline-block' 
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className={centerPills > 992 ? 'mr-auto center-pills' : 'mr-auto'}>
            <NavDropdown title='Plan Your Travel' className=''>
              <NavDropdown.Item class="specific-dropdown" href='#/travel'>Travel Options</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Convention Info' className=''>
              <NavDropdown.Item href='#/general-info'>General Info</NavDropdown.Item>
              <NavDropdown.Item href='#/schedule'>Schedule</NavDropdown.Item>
              <NavDropdown.Item href='#/hotels'>Hotels</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title='Explore Orlando' className=''>
              <NavDropdown.Item href='#/explore-transportation'>Transportation</NavDropdown.Item>
              <NavDropdown.Item href='#/explore-sightseeing'>Sightseeing</NavDropdown.Item>
              <NavDropdown.Item href='#/explore-attractions/'>Attractions</NavDropdown.Item>
              <NavDropdown.Item href='#/explore-food/'>Local Food</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='mr-auto'>
          </Nav>
          <Button variant="success" target="_blank" href="https://www.expedia.com/">Book Now!</Button>
          <DropdownButton
            menuAlign={centerPills > 992 ? "right":"left"}
            title={centerPills > 992 ? <FontAwesomeIcon size = '1x' icon={faPlus} />: <span>More <FontAwesomeIcon size = '1x' icon={faPlus} /></span>} 
            id="more-button"
            className={centerPills > 992 ? 'mar-neg10' : ''}>
              <NavDropdown.Item href="#/about-us">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#/citations">Citations</NavDropdown.Item>
          </DropdownButton>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HNavBar;
/*
<HModal/>      
<Container>
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

<NavDropdown.Item href='#/food'>Food</NavDropdown.Item>
<NavDropdown.Item href='#/convention-transportation'>Transportation</NavDropdown.Item>
<NavDropdown.Item href='#/activities'>Activites</NavDropdown.Item>
<NavDropdown.Item href='#/explore-attractions'>Attractions</NavDropdown.Item>
/>*/