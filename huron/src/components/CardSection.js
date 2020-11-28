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
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/CardSection.css';
import HeroSection from './HeroSection';

function CardSection(props) {
  return (
    <div className='card-parent'>
      <CardColumns>{props.children}</CardColumns>
    </div>
  );
}

export default CardSection;
