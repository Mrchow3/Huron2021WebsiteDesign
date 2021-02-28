/*
Home Page
Uses carousel inputs to construct carousel which points to Explore Orlando Pages
Creates card section pointing to the Convention Info pages
*/

import React, { useState, useEffect } from 'react';
import {
  Card
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from '../HeroSection.js';
import CarouselSection from '../CarouselSection.js';
import CardSection from '../CardSection.js';

import { carouseloutputs } from '../inputs/HomeInputs.js'; //jsx inputs for carousel
import hero from './assets/home_hero.jpg';
import conferenceImg from './assets/convention_info_card.jpeg';
import scheduleImg from './assets/schedule_card.jpg';
import hotelsImg from './assets/hotels_card.jpg';
import './css/Home.css';
import '../css/main.css';
import './css/ExFood.css';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='App'>
      <div className="head-hero">
        <HeroSection
          image= {hero}//'https://a.cdn-hotels.com/gdcs/production142/d1678/02312c78-cd46-4e43-b6c6-d174700968a8.jpg'////'https://media.bizj.us/view/img/620061/pg-1-centerpiece-158219737*1200xx2407-1354-0-493.jpg' //https://www.iconparkorlando.com/wp-content/uploads/carousel_3Artboard-4.jpg
          height='92'
          filter='70'
        >
        
          <div className='centered-child'>
            <h1 className="centered-title">Plan Your Trip to Nationals</h1>
          </div>
          <div className="centered-citation">
          Photo Credit: ICON Park. The Wheel. 2020. ICON Park Orlando, https://www.iconparkorlando.com/
          </div>
        </HeroSection>
      </div>
      <div className="container">
        <div className="my-4 py-4 row d-flex align-items-md-center justify-content-between">
          <div className="col-md text-center px-4">
              <p className="text-center web-overview">Congratulations on your qualification to the 2021 National Leadership Conference!</p>
              <p className="text-center web-overview">Learn more about the convention by exploring the potential hotels you could stay at as well as the schedule of the conference. Explore the unique culture of Orlando by cruising on a tranquil boat ride at Winter Park or immersing yourself in views of the bustling cityscape from atop the Wheel. Enjoy your stay!
            </p>
            </div>
        </div>
      </div>
      
      <CarouselSection height='850'>{carouseloutputs}</CarouselSection>
      

      
      <div className="container mb-4">
          <h1 className="convention-title">Learn More About the Convention</h1>
          <hr />
            <CardSection>
                <Card>
                    <a className="card-link" href="#/general-info">
                        <Card.Img variant="top" className="card-top food-image" src={conferenceImg}/>
                        <Card.ImgOverlay className="food-overlay">
                          <div className="card-hover"></div>
                            <Card.Body className="over-body">
                                <Card.Title>General Info</Card.Title>
                                <Card.Text>
                                    All you need to know about the National Conference!
                                </Card.Text>
                            </Card.Body>
                        </Card.ImgOverlay>
                        <div className="card-citation">
                        Fuller Street. BPA 2019 National Leadership Conference After Party. 2019. Fuller Street, http://www.fullerstreet.com/event-resume/bpa-2019-national-leadership-conference-after-party.html
                        </div>
                    </a>
                </Card>
                <Card>
                    <a className="card-link" href="#/schedule">
                        <Card.Img variant="top" className="card-top food-image" src={scheduleImg} />
                        <Card.ImgOverlay className="food-overlay">
                            <div className="card-hover"></div>
                            <Card.Body className="over-body">
                                <Card.Title>Schedule</Card.Title>
                                <Card.Text>
                                    When are your events? Let's find out.
                                </Card.Text>
                            </Card.Body>
                        </Card.ImgOverlay>
                        <div className="card-citation">
                        University of Texas, Dallas. High School Programming Contest. 2016. UT Dallas, https://cs.utdallas.edu/battle-of-the-brains-fall-2016-hs-programming/
                        </div>
                    </a>
                </Card>
                <Card>
                    <a className="card-link" href="#/hotels">
                        <Card.Img variant="top" className="card-top food-image" src={hotelsImg} />
                        <Card.ImgOverlay className="food-overlay">
                            <div className="card-hover"></div>
                            <Card.Body className="over-body">
                                <Card.Title>Hotels</Card.Title>
                                <Card.Text>
                                    Learn about the two options for your stay in Orlando.
                                </Card.Text>
                            </Card.Body>
                        </Card.ImgOverlay>
                        <div className="card-citation">
                        Fuller Street. BPA 2019 National Leadership Conference After Party. 2019. Fuller Street, http://www.fullerstreet.com/event-resume/bpa-2019-national-leadership-conference-after-party.html
                        </div>
                    </a>
                </Card>
            </CardSection> 
      </div>
    </div>
  );
}
/* expedia widget: <div id="searchWidget" className="expedia-widget"><iframe id="widgetIframe" className="expedia-frame"src="https://www.expedia.com/marketing/widgets/searchform/widget?wtt=1&tp1=79938273458&tp2=&lob=F&des=Orlando, Fl&wbi=2&olc=000000&whf=4&hfc=C7C7C7&wif=4&ifc=000000&wbc=FFCB00&wbf=4&bfc=3D3100&wws=2&sfs=H300FW600F&langid=1033" width="100%" height="100%" scrolling="no" frameborder="0"></iframe></div>
= "vh-100 d-flex flex-column justify-content-between align-items-center">*/
export default Home;
/*      <Container>
        <Navbar expand="lg" variant="tabs" bg="dark">
          <Navbar.Collapse>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
      </Container> */

      /*<HeroSection
        image='https://www.itl.cat/pngfile/big/92-924579_bondi-beach-ultra-hd-4k-wallpaper-4k-desktop.jpg'
        height='90'
      >
        <p className='centered-child'>Testing</p>
      </HeroSection>
      <CardSection>
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </CardSection>

      <div className='button-container'>
              <Button variant="primary">Primary</Button>
              <Button variant="primary">Secondary</Button>
            </div>
      */


//! IMPORTANT: Conference Image Reference: http://www.fullerstreet.com/images/resume/bpa-2019-6.jpg 