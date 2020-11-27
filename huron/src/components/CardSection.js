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

import './CardSection.css';

function CardSection(props) {
  return <CardDeck>{props.children}</CardDeck>;
}

export default CardSection;
