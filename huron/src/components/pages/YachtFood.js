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

import { Button as ButtonM } from '@material-ui/core';

import './css/ExTransportation.css';
import './css/Home.css';
import '../css/main.css';

import HeroSection from '../HeroSection.js';
import TextSection from '../TextSection.js';
import CarouselSection from '../CarouselSection.js';
import CardSection from '../CardSection.js';
import SingleCard from '../SingleCard.js';

import { carouseloutputs } from '../inputs/HomeInputs.js'; //jsx inputs for carousel

function YachtFood() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='App'>
      <div className="head-hero">
        <HeroSection
          image='https://images.trvl-media.com/hotels/1000000/20000/11300/11250/6ab397ec_z.jpg'
          height='92'
          style="filter: brightness(50%)">
        </HeroSection>
        <div className='centered-child'>
          <h1 className="centered-title">Yacht Club Food</h1>
        </div>
      </div>
        <div class="overdiv">
            <div class="container mx-auto">
                <div class="alt-1"> 
                    <h2 className="heading">Ale & Compass Restaurant</h2>
                    <hr className="the-hr"></hr>
                    <div class="row article">
                        <div class="col-md mr-3">
                            <div class="right-div">
                                <p>
                                Located in Disney's Yacht Club Resort
                                </p>
                                <p>
                                Reservations are recommended to dine at the Ale & Compass Restaurant, as it is popular for both breakfast and dinner. It offers a wide range of options for both meat eaters, vegans, and vegetarians.
                                </p>
                                <p>
                                Hours:
                                </p>
                                <ul>
                                    <li>
                                    Breakfast: 7:00 AM to 11:30 AM
                                    </li>
                                    <li>
                                    Dinner: 2:00 PM to 10:00 PM
                                    </li>
                                </ul>
                                <p>
                                Average entree price for adults: 
                                </p>
                                <ul>
                                    <li>
                                    Breakfast: $15
                                    </li>
                                    <li>
                                    Dinner: $24
                                    </li>
                                </ul>
                                <p><a href="https://disneyworld.disney.go.com/dining/yacht-club-resort/ale-and-compass/menus/">See the menu</a></p>
                                <p className="">
                                “Cannot beat the location of this place, located inside Disney’s Yacht Club resort. Beat if you get reservations in advance. We enjoyed the great service. Tables spaced out for social distancing … Good size portions … Is a tad pricey, but it’s worth the try.” - MLSuit3 on Tripadvisor (October 2020)
                                </p>
                            </div>
                        </div>
                        <div class="col">
                            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/imrXulfFkg11gRWfEnYHQQ/o.jpg" className="img-fluid article-image cropped-500"></img>
                        </div>
                    </div>
                </div>
                <div class="alt-1"> 
                    <h2 className="heading">Beaches and Cream Soda Shop</h2>
                    <hr className="the-hr"></hr>
                    <div class="row article">
                        <div class="col-md mr-3">
                            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/QocyYmrRjNx0O8JkUUWPFA/o.jpg" className="img-fluid article-image cropped-400"></img>
                        </div>
                        <div class="col">
                            <div class="right-div">
                                <p>
                                Located in Disney's Yacht Club Resort
                                </p>
                                <p>
                                The Beaches and Cream Soda Shop is a board-walk style diner that serves over the top sundaes and American classics. Now newly renovated, there's even more space for guests to enjoy a milkshake (or two) inside or on the patio.
                                </p>
                                <p>
                                Hours:
                                </p>
                                <ul>
                                    <li>
                                    Lunch: 11:30 AM to 4:55 PM
                                    </li>
                                    <li>
                                    Dinner: 5:00 PM to 9:00 PM
                                    </li>
                                </ul>
                                <p>
                                Average entree price for adults: 
                                </p>
                                <ul>
                                    <li>
                                    Lunch: $16
                                    </li>
                                    <li>
                                    Dinner: $16
                                    </li>
                                </ul>
                                <p><a href="https://disneyworld.disney.go.com/dining/beach-club-resort/beaches-and-cream-soda-shop/menus/">See the menu</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="alt-1"> 
                    <h2 className="heading">Beach Club Marketplace</h2>
                    <hr className="the-hr"></hr>
                    <div class="row article">
                        <div class="col-md mr-3">
                            <div class="right-div">
                                <p>
                                Located in Disney's Yacht Club Resort
                                </p>
                                <p>
                                The Beach Club Marketplace has low priced options for any meal of the day. Start of any day of your trip with Mickey waffles and end with one of the many sandwich options available.
                                </p>
                                <p>
                                Hours:
                                </p>
                                <ul>
                                    <li>
                                    7:00 AM to 10:00 PM
                                    </li>
                                </ul>
                                <p>
                                Average entree price for adults: 
                                </p>
                                <ul>
                                    <li>
                                    Breakfast: $9.50
                                    </li>
                                    <li>
                                    Lunch: $10.50
                                    </li>
                                    <li>
                                    Dinner: $10.50
                                    </li>
                                </ul>
                                <p><a href="https://disneyworld.disney.go.com/dining/beach-club-resort/beach-club-marketplace/menus/dinner/">See the menu</a></p>
                            </div>
                        </div>
                        <div class="col">
                            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/AUgwAC7ofMggCB7P0JlJKA/o.jpg" className="img-fluid article-image cropped-400"></img>
                        </div>
                    </div>
                </div>
                <div class="alt-1"> 
                    <h2 className="heading">Cape May Cafe</h2>
                    <hr className="the-hr"></hr>
                    <div class="row article">
                        <div class="col-md mr-3">
                            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/sbDfCbvfuwgtNVikhcOsTQ/o.jpg" className="img-fluid article-image cropped-400"></img>
                        </div>
                        <div class="col">
                            <div class="right-div">
                                <p>
                                Located in Disney's Yacht Club Resort
                                </p>
                                <p>
                                Cape May Cafe serves food from a buffet for both breakfast and dinner. It’s recommended to set reservations, as breakfast is always full of people wanting to visit with Disney characters.
                                </p>
                                <p>
                                Hours:
                                </p>
                                <ul>
                                    <li>
                                    Temporarily closed
                                    </li>
                                </ul>
                                <p>
                                Average entree price for adults: 
                                </p>
                                <ul>
                                    <li>
                                    Breakfast: $42
                                    </li>
                                    <li>
                                    Dinner: $55
                                    </li>
                                </ul>
                                <p><a href="https://disneyworld.disney.go.com/dining/beach-club-resort/cape-may-cafe/ ">See the menu</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="alt-1"> 
                    <h2 className="heading">Yachtsman Steakhouse</h2>
                    <hr className="the-hr"></hr>
                    <div class="row article">
                        <div class="col-md mr-3">
                            <div class="right-div">
                                <p>
                                Located in Disney's Yacht Club Resort
                                </p>
                                <p>
                                Reservations are recommended at the Yachtsman Steakhouse, as it is a formal setting where guests are asked to wear somewhat casual dress clothes. This fine dining restaurant serves steaks and seafood in an airy dining room.
                                </p>
                                <p>
                                Hours:
                                </p>
                                <ul>
                                    <li>
                                    Temporarily Closed (Dinner only)
                                    </li>
                                </ul>
                                <p>
                                Average entree price for adults: 
                                </p>
                                <ul>
                                    <li>
                                    $50
                                    </li>
                                </ul>
                                <p><a href="https://disneyworld.disney.go.com/dining/yacht-club-resort/yachtsman-steakhouse/menus/">See the menu</a></p>
                            </div>
                        </div>
                        <div class="col">
                            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/cc8mAhritBoc5hA--ggpkA/o.jpg" className="img-fluid article-image cropped-400"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default YachtFood;

/*Ale & company citation: A., Christina (n.d.). Ale & compass restaurant photos. Yelp. Retrieved January 4, 2021, from https://www.yelp.com/biz_photos/ale-and-compass-restaurant-orlando?select=imrXulfFkg11gRWfEnYHQQ*/