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

import HeroSection from '../HeroSection.js';
import TextSection from '../TextSection.js';
import CarouselSection from '../CarouselSection.js';
import CardSection from '../CardSection.js';
import SingleCard from '../SingleCard.js';

import { carouseloutputs } from '../inputs/HomeInputs.js'; //jsx inputs for carousel

class Hotels extends Component{
    HOTEL = {
        YACHT: "yacht club resort",
        SPRINGS: "corondo springs resort",
    }
    
    constructor() {
        super();
        this.state = {
            yacht: this.HOTEL.YACHT,
        };
    }

    switchHotelsToSprings() {
        this.setState({
            yacht: this.HOTEL.SPRINGS
        });
    }

    switchHotelsToYacht() {
        this.setState({
            yacht: this.HOTEL.YACHT
        });
    }

    render() {
        return (
            <div>
                <HeroSection
                            image='https://desktopwalls.net/wp-content/uploads/2015/09/Tropical%20Beach%20Palm%20Trees%204K%20Desktop%20Wallpaper.jpg'
                            height='90'
                            style="filter: brightness(50%)">
                </HeroSection>
                <div className='centered-child'>
                    <h1>Hotels</h1>
                </div>
                <div className="container">
                    <hr></hr>
                    <div class="row">
                        <div class="nav nav-pills justify-content-around">
                            <button className="btn no-click">
                                Hotel: 
                            </button>
                            <button id="yacht" className={this.state.yacht === this.HOTEL.YACHT ? "btn-primary btn" : "btn"} onClick={() => this.switchHotelsToYacht()}>
                                Yacht Club
                            </button>
                            <button className={this.state.yacht === this.HOTEL.SPRINGS ? "btn-primary btn ml-2" : "btn ml-2"} onClick={() => this.switchHotelsToSprings()}>
                                Coronado Springs
                            </button>
                        </div>
                    </div>
                    {
                        this.state.yacht === this.HOTEL.SPRINGS?
                        <div>
                            <h2 className="heading">Disney’s Coronado Springs Resort</h2>
                            <hr className="the-hr"></hr>
                            <div class="row mt-3 article">
                                <div class="col MR-3">
                                    <div class="right-div">
                                        <p class="left-justified">A captivating hotel with Spanish, Mexican, and Southwest American inspired architecture, built around the 15-acre glistening lake Lago Dorado, Disney offers a modern and energizing experience for everyone who chooses this as their destination home. With amenities such as an expansive Mayan-themed pool complex, 18 restaurants nearby the resort, and many more, Coronado Springs Resort will provide unique and unforgettable memories.</p>
                                    </div>
                                </div>
                            </div>
                            <img className="img-fluid article-image" src="https://d3bo0mk5kk7egf.cloudfront.net/imgstore/ElementGalleryItems/other/Fullsize/Maps_Full_30016.jpg?width=2400&quality=80&encoder=freeimage&progressive=true"></img>
                            <hr></hr>
                            <div class="alt-1"> 
                                <div className="row article">
                                    <div class="col-md mr-3">
                                        <div class="right-div">
                                            <section>
                                                <p>General Amenities/Information:</p>
                                                <ul className="mt-n3" aria-label="">
                                                    <li>
                                                        Built 08/01/1997
                                                    </li>
                                                    <li>
                                                        1915 total number of room and suites in three villages around the lake, 545 rooms in 15-story Gran Destino Tower
                                                    </li>
                                                    <li>
                                                        ADA compliant rooms: 99 
                                                    </li>
                                                    <li>
                                                        WIFI
                                                    </li>
                                                    <li>
                                                        Fitness Center 
                                                    </li>
                                                    <li>
                                                        Free airport transportation
                                                    </li>
                                                    <li>
                                                        24-hour security
                                                    </li>
                                                    <li>
                                                        24-hour front desk
                                                    </li>
                                                    <li>
                                                        Free shuttle / taxi services 
                                                    </li>
                                                    <li>
                                                        Outdoor Pool 
                                                    </li>
                                                    <li>
                                                        Heated Pool
                                                    </li>
                                                    <li>
                                                        Baggage Storage
                                                    </li>
                                                    <li>
                                                        Spa
                                                    </li>
                                                    <li>
                                                        Non-smoking facility
                                                    </li>
                                                </ul>
                                            </section>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/bXq6MdJETZkkn5NxhcjgCg/o.jpg" className="img-fluid article-image"></img>
                                    </div>
                                </div>
                            </div>
                            <div class="alt-1"> 
                                <div class="row mt-3 article">
                                    <div class="col-md mr-3">
                                    <img src="https://s3-media0.fl.yelpcdn.com/bphoto/vjzzQCs8c2CCVrgXdOVoZA/o.jpg" className="img-fluid article-image"></img>
                                    </div>
                                    <div class="col">
                                        <div class="right-div">
                                        <section>
                                                <p>Room Features:</p>
                                                <ul className="mt-n3" aria-label="">
                                                    <li>
                                                    Air conditioning
                                                    </li>
                                                    <li>
                                                    Room service-There is room service available to resort guests, which offers continental breakfast (7-11 a.m.) and light (sandwiches, pizza, snacks) dining throughout the day (11 a.m.-11 p.m.).
                                                    </li>
                                                    <li>
                                                    Refrigerator
                                                    </li>
                                                    <li>
                                                    Housekeeping
                                                    </li>
                                                    <li>
                                                    Safe 
                                                    </li>
                                                    <li>
                                                    Flatscreen TV
                                                    </li>
                                                    <li>
                                                    Average guest room is 314 square feet
                                                    </li>
                                                    <li>
                                                    Rooms only have one sink
                                                    </li>
                                                    <li>
                                                    Sliding wood doors across sink area 
                                                    </li>
                                                    <li>
                                                    4-cup coffee makers (decaf and regular coffee packets) 
                                                    </li>
                                                    <li>
                                                    In-room iron/ironing board
                                                    </li>
                                                    <li>
                                                    In-room hair dryer
                                                    </li>
                                                </ul>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                                <div className="col">
                                    <Card>
                                        <Card.Img variant="top" className="card-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/bXq6MdJETZkkn5NxhcjgCg/o.jpg" />
                                        <Card.Body>
                                            <Card.Title>Food</Card.Title>
                                            <Card.Text>
                                                Enjoy some amazing food from a variety of restaurants within Disney’s Coronado Springs Resort!
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col">
                                    <Card>
                                        <Card.Img variant="top" className="card-top" src="https://s3-media0.fl.yelpcdn.com/bphoto/vjzzQCs8c2CCVrgXdOVoZA/o.jpg" />
                                        <Card.Body>
                                            <Card.Title>Recreation</Card.Title>
                                            <Card.Text>
                                                Let yourself live out the wonderful recreation options in Disney’s Coronado Springs Resort!
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        :null
                    }
                </div>
            </div>
        );
    }
}

export default Hotels;