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

import '../css/CarouselSection.css';
import '../css/main.css';
import HeroSection from '../HeroSection.js';
import TextSection from '../TextSection.js';
import CarouselSection from '../CarouselSection.js';
import CardSection from '../CardSection.js';
import SingleCard from '../SingleCard.js';

let carouselItemHeight = 100;

const carouselInputs = [
  {
    image:
      'https://free4kwallpapers.com/uploads/originals/2019/06/18/boat-wallpaper.jpg',
    height: carouselItemHeight,
    carouselFilter: 65,
    title: 'Getting Around',
    captionTitle: 'First Slide',
    captionText: 'Compare some options and find the most convenient way to travel around the metropolis.',
    button: 'See Options',
    ref:'#/explore-transportation/',
  },
  {
    image:
      'https://www.pxwall.com/wp-content/uploads/2018/06/Wallpaper%20cocktail,%20beach,%205k,%20Food%209832017211.jpg',
    height: carouselItemHeight,
    carouselFilter: 40,
    title: 'Sightseeing',
    captionTitle: '',
    captionText: 'Experience Orlando to the fullest and immerse yourself in the real city experience.',
    button: 'See Options',
    ref:'#/explore-sightseeing/',
  },
  {
    image:
      'https://www.telegraph.co.uk/content/dam/Travel/hotels/north-america/hawaii/ritz-carlton-kapalua-hawaii-united-states-p.jpg',
    height: carouselItemHeight,
    carouselFilter: 60,
    title: 'Local Food',
    captionTitle: 'Third Slide',
    captionText: 'Orlando offers one of the most multicultural food scenes in the world. Pick any choice from Italian to Ethiopian.',
    button: 'See Options',
    ref:'#/explore-food/',
  },
  {
    image: /*searched orlando attractions for image*/
      'https://cdn.newsday.com/polopoly_fs/1.11408063.1454597559!/httpImage/image.jpeg_gen/derivatives/display_960/image.jpeg',
    height: carouselItemHeight,
    carouselFilter: 60,
    title: 'Attractions',
    captionTitle: 'Fourth Slide',
    captionText: 'Orlando is known for its many exciting attractions. Learn about the best visits from the unique Museum of Art to the amazing Universal Theme Park.',
    button: 'See Options',
    ref:'#/explore-attractions/',
  },
];

const carouseloutputs = [];
carouselInputs.forEach((element) =>
  carouseloutputs.push(
    <Carousel.Item>
      <div className="head-hero">
          <div className="">
              <img className="img-fluid d-block w-100 carousel-image" alt={element.title} src={element.image} />
          </div>
        <div className="carousel-heading bg-transparent overflow-hidden py-4 py-md-5 h-100">
          <div class="container-fluid mx-auto py-4 py-md-5">
            <div class="row d-flex align-items-md-center justify-content-between">
              <div></div>
              <div className="col-md text-center text-md-left px-4" style={{ top: '35%' }}>
                <header className="display-md-2 display-4" id="carousel-title">{element.title}</header>
                <p className="carousel-description">{element.captionText}</p>
                <div className="">
                  <a href={element.ref}>
                    <Button>{element.button}</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Carousel.Item>
  )
);
/*<Carousel.Item interval={element.interval}>

</Carousel.Item>*/
export { carouseloutputs };
/*
<HeroSection image={element.image} alt={element.title} filter={element.carouselFilter}>
        <div className='child' style={{ top: '35%' }}>
          <header className='header'>{element.title}</header>
        </div>
      </HeroSection>

    
*/