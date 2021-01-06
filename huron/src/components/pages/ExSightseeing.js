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

import HeroSection from '../HeroSection.js';
import TextSection from '../TextSection.js';
import CarouselSection from '../CarouselSection.js';
import CardSection from '../CardSection.js';
import SingleCard from '../SingleCard.js';

import { carouseloutputs } from '../inputs/HomeInputs.js'; //jsx inputs for carousel
import HCitation from '../HCitation';
import CardCitation from '../CardCitation';

function ExSightseeing(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <div className="head-hero">
                <HeroSection
                    image='https://www.onetravel.com/going-places/wp-content/uploads/2011/09/Orlando-Attractions.jpg'
                    height='92'
                    filter='70'
                ></HeroSection>
                <div className='centered-child'>
                    <h1 className="centered-title">Sightseeing</h1>
                </div>
            </div>
            <div className="container">
                <HCitation citation="Picture Citation: Durso, Shannon. The Other Orlando. 2018. One Travel, https://www.onetravel.com/going-places/orlando-beyond-the-theme-parks/"></HCitation>
                <CardSection>
                    <Card>
                        <a className="card-link" href="#/explore-sightseeing-harry-p-leu-gardens">
                            <Card.Img variant="top" className="card-top food-image" src="https://s3-media0.fl.yelpcdn.com/bphoto/iRcHiY53ct5yNZefZEJUgg/o.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Harry P. Leu Gardens</Card.Title>
                                    <Card.Text>
                                        Explore the scenic paths at Leu Gardens.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="O., Crystal. Kopsia Fruticosa at Harry P. Leu Gardens. 2020. Yelp. https://www.yelp.com/biz_photos/harry-p-leu-gardens-orlando?select=iRcHiY53ct5yNZefZEJUgg" />
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-sightseeing-florida-tours">
                            <Card.Img variant="top" className="card-top food-image" src="https://s3-media0.fl.yelpcdn.com/bphoto/WRLaECUSy96v5Wx-4fOOpA/o.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Florida Dolphin Tours/Florida Adventure Tour</Card.Title>
                                    <Card.Text>
                                        Take an expert-led boat ride into Florida's beautiful wilderness.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Florida Dolphin Tours. Swim With Manatees Excursion. 2014. Yelp, https://www.yelp.com/biz_photos/florida-dolphin-tours-orlando?select=WRLaECUSy96v5Wx-4fOOpA" />
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-sightseeing-tibet-butler-preserve">
                            <Card.Img variant="top" className="card-top food-image" src="https://s3-media0.fl.yelpcdn.com/bphoto/zKmHO2-EEbP0pV-ePEn0CA/o.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Tibet-Butler Preserve</Card.Title>
                                    <Card.Text>
                                        Take a breathtaking hike in the Tibet-Butler Preserve.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="D., Mark. Tibet-Butler Preserve Boardwalk. 2017. Yelp. https://www.yelp.com/biz_photos/tibet-butler-preserve-orlando?select=zKmHO2-EEbP0pV-ePEn0CA" />
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-sightseeing-lake-eola-park">
                            <Card.Img variant="top" className="card-top food-image" src="https://s3-media0.fl.yelpcdn.com/bphoto/cz5fhi4pJQinInQLZC_kVg/o.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Lake Eola Park</Card.Title>
                                    <Card.Text>
                                        Adventure into Lake Eola Park and enjoy an amazing view of the city.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="L., Angel. Lake Eola Park at Night. 2020. Yelp, https://www.yelp.com/biz_photos/lake-eola-park-orlando?select=X4_FuDHfq0lVYj1UHM1-tA" />
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-sightseeing-exotic-animals">
                            <Card.Img variant="top" className="card-top food-image" src="https://s3-media0.fl.yelpcdn.com/bphoto/duDMufPC8prSBNJeVS9hbg/o.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Exotic Animal Experience</Card.Title>
                                    <Card.Text>
                                        Meet and greet the endangered, exoctic animals in this privately-owned zoo.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Exotic Animal Experience. Porcupines. 2017. Yelp, https://www.yelp.com/biz_photos/exotic-animal-experience-orlando?select=duDMufPC8prSBNJeVS9hbg" />
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-sightseeing-butler-chain-lakes">
                            <Card.Img variant="top" className="card-top food-image" src="https://www.orangeobserver.com/sites/default/files/styles/sliders_and_planned_story_image_870x580/public/51706_standard.jpeg?itok=5xRCGbjd" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Butler Chain of Lakes</Card.Title>
                                    <Card.Text>
                                        View the Butler Chain of Lakes' awe-inspiring beauty.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Nesslar, Jennifer. Lake Tibet-Butler. 2016. Orange Observer, https://www.orangeobserver.com/photo-gallery/final-piece-butler-chain-lakes#photo-5" />
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-sightseeing-kissimmee-swamp-tours">
                            <Card.Img variant="top" className="card-top food-image" src="https://media-cdn.tripadvisor.com/media/photo-w/18/3d/d9/37/kissimmee-swamp-tours.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Kissimmee Swamp Tours</Card.Title>
                                    <Card.Text>
                                        Tour the Kissimee Swamp and look at the unique wildlife outside of Orlando.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="M., Peter. Schitterende Airboatride. 2019. Trip Advisor, https://www.tripadvisor.com/Attraction_Review-g34337-d677214-Reviews-Kissimmee_Swamp_Tours-Kenansville_Florida.html#photos;aggregationId=101&albumid=101&filter=7&ff=406706487" />
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-sightseeing-winter-park-boat-tour">
                            <Card.Img variant="top" className="card-top food-image" src="https://www.scenicboattours.com/wp-content/uploads/nivoslider4wp_files/3_s.jpeg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Winter Park Scenic Boat Tour</Card.Title>
                                    <Card.Text>
                                        Relax in a tranquil cruise through Winter Park.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Scenic Boat Tour. Winter Park Florida. 2020. Scenic Boat Tour, https://www.scenicboattours.com/gallery" />
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-sightseeing-wildlife-attractions">
                            <Card.Img variant="top" className="card-top food-image" src="https://s3-media0.fl.yelpcdn.com/bphoto/ZHmwlS6SkxtSUFZ1rzI4gA/o.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Central Florida Zoo and Botanical Gardens</Card.Title>
                                    <Card.Text>
                                        Encounter amazing wildlife in these attractions.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </a>
                    </Card>
                </CardSection>
            </div>
        </div>
    );
}

export default ExSightseeing;