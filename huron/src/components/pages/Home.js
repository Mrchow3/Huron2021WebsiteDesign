import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image,
  Carousel,
  CarouselItem,
  Card,
  CardColumns,
  CardGroup,
  CardDeck,
  Jumbotron,
  Figure,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button as ButtonM } from '@material-ui/core';

import './css/Home.css';
import '../css/main.css';
import './css/ExFood.css';

import HeroSection from '../HeroSection.js';
import TextSection from '../TextSection.js';
import CarouselSection from '../CarouselSection.js';
import CardSection from '../CardSection.js';
import SingleCard from '../SingleCard.js';
import conferenceImg from '../the-hard-way.jpeg';

import { carouseloutputs } from '../inputs/HomeInputs.js'; //jsx inputs for carousel

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='App'>
      <div className="head-hero">
        <HeroSection
          image='https://www.iconparkorlando.com/wp-content/uploads/carousel_3Artboard-4.jpg'
          height='92'
          filter='70'
        >
        
          <div className='centered-child'>
            <h1 className="centered-title">Plan Your Trip to Nationals</h1>
            <div className='button-container'>
              <Button variant="primary">Primary</Button>
              <Button variant="primary">Secondary</Button>
            </div>
          </div>

        </HeroSection>
      </div>
      <div className="container">
        <div className="my-4 py-4 row d-flex align-items-md-center justify-content-between">
          <div className="col-md text-center px-4">
              <p className="text-center web-overview">Congratulations on your qualification to the 2021 National Leadership Conference!</p>
              <p className="text-center web-overview">Learn more about the convention by exploring the potential hotels you could stay at as well as the schedule of the conference. Explore the unique culture of Orlando by cruising on a tranquil boat ride at Winter Park or immersing yourself in views of the bustling cityscape from atop the Wheel. Enjoy your stay!
            </p>
            </div>
        </div>
      </div>
      

      <CarouselSection height='850'>{carouseloutputs}</CarouselSection>

      
      <div className="container mb-4">
          <h1 className="convention-title">Learn More About the Convention</h1>
          <hr />
          <CardSection>
              <Card>
                  <a className="card-link" href="#/convention-info">
                      <Card.Img variant="top" className="card-top food-image" src={conferenceImg}/>
                      <Card.ImgOverlay className="food-overlay">
                          <Card.Body>
                              <Card.Title>Convention Info</Card.Title>
                              <Card.Text>
                                  All you need to know about the National Convention!
                              </Card.Text>
                          </Card.Body>
                      </Card.ImgOverlay>
                  </a>
              </Card>
              <Card>
                  <a className="card-link" href="#/schedule">
                      <Card.Img variant="top" className="card-top food-image" src="http://cs.utdallas.edu/wp-content/uploads/2016/11/DSC_0125.jpg" />
                      <Card.ImgOverlay className="food-overlay">
                          <Card.Body>
                              <Card.Title>Schedule</Card.Title>
                              <Card.Text>
                                  When are your events? Let's find out.
                              </Card.Text>
                          </Card.Body>
                      </Card.ImgOverlay>
                  </a>
              </Card>
              <Card>
                  <a className="card-link" href="#/explore-food/asian">
                      <Card.Img variant="top" className="card-top food-image" src="http://www.disneyonwheels.com/wp-content/uploads/2013/10/2574copy.jpg" />
                      <Card.ImgOverlay className="food-overlay">
                          <Card.Body>
                              <Card.Title>Hotels</Card.Title>
                              <Card.Text>
                                  Learn about the two options for your stay in Orlando.
                              </Card.Text>
                          </Card.Body>
                      </Card.ImgOverlay>
                  </a>
              </Card>
          </CardSection>
      </div>
      
    </div>
  );
}
/* = "vh-100 d-flex flex-column justify-content-between align-items-center">*/
export default Home;
/*      <Container>
        <Navbar expand="lg" variant="tabs" bg="dark">
          <Navbar.Collapse>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
      </Container> */

      /*<HeroSection
        image='https://www.itl.cat/pngfile/big/92-924579_bondi-beach-ultra-hd-4k-wallpaper-4k-desktop.jpg'
        height='90'
      >
        <p className='centered-child'>Testing</p>
      </HeroSection>
      <CardSection>
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </CardSection>
      */


//! IMPORTANT: Conference Image Reference: http://www.fullerstreet.com/images/resume/bpa-2019-6.jpg 