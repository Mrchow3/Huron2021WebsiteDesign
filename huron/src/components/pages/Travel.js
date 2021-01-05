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
import 'bootstrap/dist/css/bootstrap.min.css';
import conferenceImg from '../the-hard-way.jpeg';

import HeroSection from '../HeroSection.js';

function Travel() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="head-hero">
                <HeroSection
                            image='https://singularityhub.com/wp-content/uploads/2018/12/airplane-flying-above-clouds_shutterstock_553131187.jpg'
                            height='92'
                            filter='60'>
                </HeroSection>
                <div className='centered-child'>
                    <h1 className='centered-title'>Travel</h1>
                </div>
            </div>
            <div class="overdiv">
                <div class="container mx-auto">
                    <div class="alt-1"> 
                        <h2 className="heading">Getting their by Plane</h2>
                        <hr className="the-hr"></hr>
                        <div class="row article">
                            <div class="col-md mr-3">
                                <div class="right-div">
                                    <p class="left-justified">Discounted airline tickets are available upon flying with Delta Air Lines, American Airlines, or United Airlines. Please note that this discount is only available for service to Orlando International Airport (MCO).</p>
                                    <p>Delta Air Lines</p>
                                    <ul>
                                        <li>Visit <a href="https://www.delta.com/">their website</a> to book your flights and input the discount code NMUK2 in the Meeting Code box.</li>
                                        <li>You may also call (800) 328-1111 and reference the code NMUK2. They are available Monday through Friday from 7:00am-7:30pm (CT)</li>
                                    </ul>
                                    <p>American Airlines</p>
                                    <ul>
                                        <li>Visit <a href="https://www.aa.com/homePage.do">their website</a> to book your flights and input the discount code 1541EQ in the Promotions Code box.</li>
                                        <li>You may also call (800) 433-1790 and reference the authorization number 1541EQ. They are available Monday through Friday from 7:00am-11:00pm (CT) and Saturday and Sunday from 7:00am-8:00pm (CT)</li>
                                    </ul>
                                    <p>United Airlines</p>
                                    <ul>
                                        <li>Visit <a href="https://www.united.com/en/us">their website</a> to book your flights and input the discount code  ZJU2646393 in the Promotions and Certificates box.</li>
                                        <li>You may also call (800) 426-1122 and reference the Z code ZJU2646393. They are available Monday through Friday from 7:00am-9:00pm (CT) and Saturday and Sunday from 7:00am-5:00pm (CT)</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col">
                                <img src="https://cdn.britannica.com/s:800x1000/69/155469-131-14083F59/airplane-flight.jpg" className="img-fluid article-image"></img>
                            </div>
                        </div>
                    </div>
                    <div class="alt-1"> 
                        <h2 className="heading">Other Options</h2>
                        <hr className="the-hr"></hr>
                        <div class="row article">
                            <div class="col-md mr-3">
                                <img src="https://mapasdecostarica.info/wp-content/uploads/sites/8/2017/12/tips-for-renting-a-car-in-Costa-Rica-770x430.jpg" className="img-fluid article-image"></img>
                            </div>
                            <div class="col">
                                <div class="right-div">
                                    <h4>Airport Shuttle</h4>
                                    <p>
                                    Disney’s resorts offer a free shuttle service to everyone who has already booked and confirmed their stay at the hotel. Reservations are required before arriving to use this service. You may <a href="https://secure.reservations.disney.go.com/ibcwdw/en_US/dme/dmeform">book online</a> or call (407) 939-1936. Please note that you will be asked for your flight information and the confirmed hotel reservation. Do not book until you have already received confirmation from the two resorts, which will not happen until April 8, 2021.
                                    </p>
                                    <h4>Car Rental</h4>
                                    <p>
                                    <a href="https://www.avis.com/en/home">Avis</a> offers discounts for BPA members through a partnership with the organization. Use the code AWD# J659563 when renting to access benefits and discounts.
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Travel;