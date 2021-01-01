import React, { useState, useEffect } from 'react';
import { 
  Modal, 
  Button, 
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl
} from 'react-bootstrap';
import './css/HNavBar.css';
import './css/HModal.css';

function ModalNav(){
  let hash = window.location.hash
}
function CenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="">
            Book your trip now!
          </Modal.Title>
          <Nav className="modal-nav ml-3" variant="tabs" defaultActiveKey="#first">
            <div class="row">
              <Nav.Item className="mx-3">
                <Nav.Link href="#first">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item className="mr-3">
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item className="mr-3">
              <Nav.Link href="#boop">Link</Nav.Link>
              </Nav.Item>
            </div>
          </Nav>
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

  function HModal(){
    const [modalShow, setModalShow] = React.useState(false);  
    return(
      <>
      <Button variant="outline-primary" onClick={() => setModalShow(true)}>Book Now!</Button>
      <CenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      />
      </>);
  }
  export default HModal;

  /*
  <nav class="navbar navbar-expand-lg navbar-light modal-nav float-right">
            <a class="navbar-brand"></a>
            <div class="collapse navbar-collapse">
              <ul class="navbar-nav">
                  <a class="nav-link nav-item active" href="#">Travel<span class="sr-only">(current)</span></a>
                  <a class="nav-item nav-link" href="#">Register</a>
                  <a class="nav-item nav-link" href="#">About</a>
              </ul>
            </div>
          </nav>*/