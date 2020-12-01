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

import HeroSection from '../HeroSection.js';
import TextSection from '../TextSection.js';
import CarouselSection from '../CarouselSection.js';
import CardSection from '../CardSection.js';
import SingleCard from '../SingleCard.js';

import { carouseloutputs } from '../inputs/HomeInputs.js'; //jsx inputs for carousel

function ExTransportation() {
  return (
    <div className='App'>
      <HeroSection
        image='https://desktopwalls.net/wp-content/uploads/2015/09/Tropical%20Beach%20Palm%20Trees%204K%20Desktop%20Wallpaper.jpg'
        height='90'
      >
        <div className='child'>
          <header className='header'>Transportation</header>
          
        </div>
      </HeroSection>
      
      <div class="overdiv">
        <div class="container-fluid mx-auto" style={{width: '84%',}}>
            <div class="alt-1"> 
                <div class="row mt-3">
                    <div class="col-md mr-3">
                        <div class="right-div">
                            <h2>Lynx Bus Service</h2>
                            <p class="left-justified">LYNX bus service provides an expansive system that can accommodate access to the entirety of the city including popular destinations from malls to museums. LYNX buses can be easily tracked either on the website (http://golynx.doublemap.com/map/) or on the mobile app LYNX Bus Tracker which is available in both the App Store and Google Play. Route maps and schedules are available on the website as well. Typically, single-ride fares cost $2.00 and transfers between routes are free. Be sure to inform the operator when you get on if a transfer is needed and make sure to note that transfers are limited to 90 minutes. All-day passes can be purchased at $4.50 and are valid for use between 4:00 AM the day it is issued until 3:00 AM the next day. Bus passes can be purchased online via the Buy Passes page on the website (https://www.golynx.com/store/) to attain a physical copy or via the app LYNX PawPass for digital passes on your smartphone.</p>
                        </div>
                    </div>
                    <div class="col"></div>
                </div>
            </div>
            <div class="alt-1"> 
                <div class="row mt-3">
                    <div class="col-md mr-3"></div>
                    <div class="col">
                        <div class="right-div">
                            <h2>LYMMO Downtown Circulator</h2>
                            <p class="left-justified">Additionally, Orlando offers a free downtown circulator bus, LYMMO, that provides quick and easy access to businesses and services throughout the immediate downtown area. These buses come every 10-15 minutes depending on the time of the day and provide another fun opportunity to tour Orlando.</p>
                            <p class="left-justified">Individuals may also be eligible to use services provided by ACCESS LYNX if they are unable to use the fixed routes due to a disability or other potential limitations. This service offers shared door-to-door transportation. However, a mail-in application is required before all requests and trips have to be scheduled in advance by calling (407) 423-8747. In general, the fixed route service is more affordable and still fully accessible to individuals with disabilities or special needs.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="alt-1">
                <div class="row mt-3">
                    <div class="col-md mr-3">
                        <div class="right-div">
                            <h2 class="right-justified">SunRail (Amtrak Station)</h2>
                            <p class="right-justified">Sunrail, a commuter rail service, runs north and south for 49 miles through central Florida. The train operates Monday-Friday, and the website’s (https://sunrail.com/) schedule and map allow for easy planning. With four stations in Orlando -AdventHealth, LYNX Central, Church Street, and Orlando Health/Amtrak-, it’s an ideal way to quickly travel from one side of the city to another. Sunrail trains are both bike friendly and ADA compliant and include power outlets, free wifi, and restrooms. If you’re staying in the city round trip tickets range from $1.75-$3.75.</p>
                            
                        </div> 
                    </div>
                    <div class="col"></div>
                </div>
            </div>
            <div class="alt-1"> 
                <div class="row mt-3">
                    <div class="col-md mr-3"></div>
                    <div class="col">
                        <div class="right-div">
                            <h2 class="right-justified">Biking</h2>
                            <p class="right-justified">Cycling is one of the easiest ways to explore, and Orlando is filled with many safe, scenic paths that surround breathtaking lakes and parks. HOPR, the official bike share of Orlando, has hundreds of bikes scattered throughout the city at various locations. Their app (https://gohopr.com/orlando/) allows for easy bike rental and is available for download in both the App Store and Google Play. With one QR code scan, all that’s left to do is choose your rental type and be on your way. </p>
                            <h2 class="right-justified">Walking</h2>
                            <p>Enjoy sightseeing through downtown Orlando on foot. Take in views of local restaurants and shops while exploring the city and getting your steps in.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
      
      
  );
}
/* = "vh-100 d-flex flex-column justify-content-between align-items-center">*/
export default ExTransportation;
/*      <Container>
        <Navbar expand="lg" variant="tabs" bg="dark">
          <Navbar.Collapse>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
      </Container> */