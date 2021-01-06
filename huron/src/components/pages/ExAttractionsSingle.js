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
import TextSection from '../TextSection.js';
import CarouselSection from '../CarouselSection.js';
import CardSection from '../CardSection.js';
import SingleCard from '../SingleCard.js';

import { foodInputs } from '../inputs/FoodInputs.js'; //jsx inputs for food
import ExAttractions from './ExAttractions';
import ArticleCitation from '../ArticleCitation';

function ExAttractionsSingle(props){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const prices = [];
    props.pricing.forEach((price) =>
        prices.push(
            <li>{price}</li>
        )
    );

    const hours = [];
    props.hours.forEach((hour) =>
        hours.push(
            <li>{hour}</li>
        )
    );

    const websites = [];
    props.websites.forEach((website) =>
        websites.push(
            <p><a href={website.site}>Learn More about {website.part}</a></p>
        )
    );

    const restrictions = [];
    props.restrictions.forEach((restriction) =>
        restrictions.push(
            <div><li>{restriction}</li></div>
        )
    );
    const info = [];
    props.restrictionInfo.forEach((link) =>
        info.push(
            <div><li><a target="_blank" href={link}>More Information</a></li></div>
        )
    );
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
                                    {props.description}
                                </p>
                                <p>
                                    Hours:
                                </p>
                                <ul>{hours}</ul>
                                <p>Pricing: </p>
                                <ul>{prices}</ul>
                                <p>Security Restrictions:</p>
                                <ul>
                                    {restrictions}
                                    {info}
                                </ul>
                                <p className="">
                                    {websites}
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

export default ExAttractionsSingle;