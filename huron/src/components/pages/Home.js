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
  return (
    <div className='App'>
      <HeroSection
        image='https://desktopwalls.net/wp-content/uploads/2015/09/Tropical%20Beach%20Palm%20Trees%204K%20Desktop%20Wallpaper.jpg'
        height='90'
      >
        <div className='child'>
          <header className='header'>Plan Your Trip to Nationals</header>
        </div>
      </HeroSection>

      <CarouselSection height='900'>{carouseloutputs}</CarouselSection>

      <HeroSection
        image='https://www.itl.cat/pngfile/big/92-924579_bondi-beach-ultra-hd-4k-wallpaper-4k-desktop.jpg'
        height='90'
      >
        <p className='child'>Testing</p>
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
