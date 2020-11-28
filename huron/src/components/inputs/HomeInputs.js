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

import HeroSection from '../HeroSection.js';
import TextSection from '../TextSection.js';
import CarouselSection from '../CarouselSection.js';
import CardSection from '../CardSection.js';
import SingleCard from '../SingleCard.js';

let carouselItemHeight = 100;

const carouselInputs = [
  {
    interval: 3500,
    image:
      'https://free4kwallpapers.com/uploads/originals/2019/06/18/boat-wallpaper.jpg',
    height: carouselItemHeight,
    carouselFilter: 65,
    title: 'This is the title!',
    captionTitle: 'First Slide',
    captionText: 'Here is some text!',
  },
  {
    interval: 3500,
    image:
      'https://www.pxwall.com/wp-content/uploads/2018/06/Wallpaper%20cocktail,%20beach,%205k,%20Food%209832017211.jpg',
    height: carouselItemHeight,
    carouselFilter: 40,
    title: 'This is the title!',
    captionTitle: 'Second Slide',
    captionText: 'Here is some text!',
  },
  {
    interval: 3500,
    image:
      'https://www.telegraph.co.uk/content/dam/Travel/hotels/north-america/hawaii/ritz-carlton-kapalua-hawaii-united-states-p.jpg',
    height: carouselItemHeight,
    carouselFilter: 60,
    title: 'This is the title!',
    captionTitle: 'Third Slide',
    captionText: 'Here is some text!',
  },
];

const carouseloutputs = [];
carouselInputs.forEach((element) =>
  carouseloutputs.push(
    <Carousel.Item interval={element.interval}>
      <HeroSection image={element.image} filter={element.carouselFilter}>
        <div className='child' style={{ top: '35%' }}>
          <header className='header'>{element.title}</header>
        </div>
      </HeroSection>
      <Carousel.Caption>
        <h3>{element.captionTitle}</h3>
        <p>{element.captionText}</p>
      </Carousel.Caption>
    </Carousel.Item>
  )
);

export { carouseloutputs };
