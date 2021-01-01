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

import HeroSection from '../HeroSection.js';
import TextSection from '../TextSection.js';
import CarouselSection from '../CarouselSection.js';
import CardSection from '../CardSection.js';
import SingleCard from '../SingleCard.js';

import { carouseloutputs } from '../inputs/HomeInputs.js'; //jsx inputs for carousel

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='App'>
      <HeroSection
        image='https://www.iconparkorlando.com/wp-content/uploads/carousel_3Artboard-4.jpg'
        height='92'
        filter='70'
      >
      
        <div className='centered-child'>
          <h1>Plan Your Trip to Nationals</h1>
          <div className='button-container'>
            <Button variant="primary">Primary</Button>
            <Button variant="primary">Secondary</Button>
          </div>
        </div>

      </HeroSection>

      <CarouselSection height='850'>{carouseloutputs}</CarouselSection>

      <HeroSection
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
