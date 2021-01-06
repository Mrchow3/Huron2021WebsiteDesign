import React, { useState, useEffect, Component } from 'react';
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
  ListGroup,
  ListGroupItem,
  CardColumns,
  CardGroup,
  CardDeck,
  Jumbotron,
  Figure,
} from 'react-bootstrap';

import { Button as ButtonM, Divider } from '@material-ui/core';

import './css/ExTransportation.css';
import './css/Home.css';
import './css/Hotels.css'
import './css/ExFood.css';
import '../css/main.css';

import HeroSection from '../HeroSection.js';
import ArticleCitation from '../ArticleCitation';

function ExFoodSingle(props){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <div className="head-hero">
                <HeroSection
                    image='https://www.iconparkorlando.com/wp-content/uploads/carousel_3Artboard-4.jpg'
                    height='60'
                    filter='70'
                ></HeroSection>
                <div className='centered-child'>
                    <h1 className="centered-title">{props.title}</h1>
                </div>
            </div>
            <div className="overdiv-2">
                <div className="container mb-4">
                    <div className="alt-1">
                        <hr className="the-hr"></hr>
                        <div className="row article mb-4">
                            <div className="col-md mr-3">
                                <p>
                                    {props.blurb}
                                </p>
                                <p>
                                    {props.hours}
                                </p>
                                <p>
                                    {props.prices}
                                </p>
                                <p className="">
                                    <a href={props.website}>Learn More</a>
                                </p>
                            </div>
                            <div className="col">
                                <img className="img-fluid centered-article article-image" alt="article-image" src={props.image} />
                                <ArticleCitation citation={props.citation} />
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            
        </div>
    );
}

export default ExFoodSingle;