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

function ExAttractions(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <div className="head-hero">
                <HeroSection
                    image='https://www.iconparkorlando.com/wp-content/uploads/carousel_3Artboard-4.jpg'
                    height='92'
                    filter='70'
                ></HeroSection>
                <div className='centered-child'>
                    <h1 className="centered-title">Attractions</h1>
                </div>
            </div>
            <div className="container">
                <hr />
                <CardSection>
                    <Card>
                        <a className="card-link" href="#/explore-attractions-disney">
                            <Card.Img variant="top" className="card-top food-image" src="https://i.ytimg.com/vi/mOtp_w1BDDA/maxresdefault.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Disney</Card.Title>
                                    <Card.Text>
                                    Featuring your favorite memories from childhood, experience the real Walt Disney World Magic.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-attractions-universal">
                            <Card.Img variant="top" className="card-top food-image" src="https://www.travelcaffeine.com/wp-content/uploads/2014/12/universal-studios-florida-entrance.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Universal Studios</Card.Title>
                                    <Card.Text>
                                    Hop on the Hogwarts Express and go on a journey through the Islands of Adventure to Volcano Bay.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-attractions-water-attractions">
                            <Card.Img variant="top" className="card-top food-image" src="http://littleinspiration.com/wp-content/uploads/2017/06/img_6608.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Seaworld, Aquatica, Discovery Cove</Card.Title>
                                    <Card.Text>
                                    Journey to the mystical Atlantis or play with dolphins and other marine animals.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-attractions-icon-park">
                            <Card.Img variant="top" className="card-top food-image" src="https://www.iconparkorlando.com/wp-content/uploads/185164_up_high1.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>ICON Park</Card.Title>
                                    <Card.Text>
                                    See Orlando from 400 feet above the air at The Wheel or get up and close with your favorite celebrities at Madame Tussaud’s.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-attractions-ripleys">
                            <Card.Img variant="top" className="card-top food-image" src="https://media.dayoutwiththekids.co.uk/media/12950/38231-ripleys-believe-it-or-not-london-09.jpg?mode=crop&width=1680&height=940" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Ripley’s Believe it or Not</Card.Title>
                                    <Card.Text>
                                    Indulge in the wonders of the world at Ripley’s and go on strange adventures.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-attractions-museum-of-art">
                            <Card.Img variant="top" className="card-top food-image" src="https://thermanstatom.com/site/wp-content/uploads/2014/12/orlando-art-museum2.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Orlando Museum of Art</Card.Title>
                                    <Card.Text>
                                    Explore the unique art and culture of Florida through both contemporary and history pieces.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-attractions-chocolate-kingdom">
                            <Card.Img variant="top" className="card-top food-image" src="https://thumbnails.trvl-media.com/dtxTyWcWUaV8Ak9zL6txLOrDko0=/cdn.lemediavault.com/images/d0fbe092c5a36096b0a23f15257188de.jpeg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Chocolate Kingdom: Interactive Factory Adventure Tour</Card.Title>
                                    <Card.Text>
                                    Follow along on a cocoa bean’s journey to become the decadent treat known as chocolate.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-attractions-escape-room">
                            <Card.Img variant="top" className="card-top food-image" src="https://media2.fdncms.com/orlando/imager/escapology/u/zoom/2372600/escapology.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>The Escape Room Orlando</Card.Title>
                                    <Card.Text>
                                    Be the witty hero that works with your team to escape this puzzling chamber.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-attractions-ifly">
                            <Card.Img variant="top" className="card-top food-image" src="https://www.indoorskydivingsource.com/wp-content/uploads/2015/11/ifly-orlando-dual-inside.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>iFLY Orlando Indoor Skydiving</Card.Title>
                                    <Card.Text>
                                    Enjoy flying without worrying about falling down and dying. Get that adrenaline rush here at iFLY.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-attractions-kennedy-space-center">
                            <Card.Img variant="top" className="card-top food-image" src="https://image.cnbcfm.com/api/v1/image/105425499-15356580044102_rocket-garden-at-the-kennedy-space-center-visitor--complex_photo_kennedy-space-center-complex.jpg?v=1535658045" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Kennedy Space Center</Card.Title>
                                    <Card.Text>
                                    Start your very own quest through space and travel the galaxy like an astronaut.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-attractions-indoor-karting">
                            <Card.Img variant="top" className="card-top food-image" src="https://orlandoinformer.com/wp-content/uploads/2020/04/Andretti-Indoor-Karting-Games-Orlando-racing-1024x684.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Andretti Indoor Karting & Games</Card.Title>
                                    <Card.Text>
                                    Experience the thrill of racing through one of the world’s longest indoor tracks.
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-attractions-science-center">
                            <Card.Img variant="top" className="card-top food-image" src="http://www.todaysorlando.com/sites/default/files/styles/cover/public/Orlando_science_center_osc_front.jpg?itok=KPmvtMdB" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Orlando Science Center</Card.Title>
                                    <Card.Text>
                                    Explore the different exhibits that are meant to spark your curiosity in science such as DinoDigs and Our Planet.
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

export default ExAttractions;