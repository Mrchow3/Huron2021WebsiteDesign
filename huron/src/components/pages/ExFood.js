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

function ExFood(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <HeroSection
                image='https://www.iconparkorlando.com/wp-content/uploads/carousel_3Artboard-4.jpg'
                height='90'
                filter='70'
            ></HeroSection>
            <div className='centered-child'>
                <h1>Local Foods</h1>
            </div>
            <div className="container">
                <hr />
                <CardSection>
                    <Card>
                        <a className="card-link" href="#/explore-food/italian">
                            <Card.Img variant="top" className="card-top food-image" src="https://www.orlandosentinel.com/resizer/8DlK-WMinQAFP5yn-iZwDQgllCc=/800x449/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/N7WUAT45NRC7NN3H7EMFP6WHTQ.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Italian</Card.Title>
                                    <Card.Text>
                                        Enjoy local Italian cuisine!
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-food/asian">
                            <Card.Img variant="top" className="card-top food-image" src="https://scontent.fdet1-1.fna.fbcdn.net/v/t1.0-9/s1080x2048/130491457_3434886849922375_3272524920808879175_o.jpg?_nc_cat=100&ccb=2&_nc_sid=a26aad&_nc_ohc=80eBUoydHMUAX8mV_Ab&_nc_ht=scontent.fdet1-1.fna&tp=7&oh=3d8788d0abb88df986362eb86e06acd5&oe=60143B77" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Asian</Card.Title>
                                    <Card.Text>
                                        Feast on local Asian dishes!
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-food/hispanic">
                            <Card.Img variant="top" className="card-top food-image" src="https://www.uomeetingsandevents.com/Images/Tacos_tcm90-49974.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                            <Card.Body>
                                <Card.Title>Hispanic</Card.Title>
                                <Card.Text>
                                    Experience a scrumptious Hispanic meal!
                                </Card.Text>
                            </Card.Body>
                        </Card.ImgOverlay>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-food/fusion">
                            <Card.Img variant="top" className="card-top food-image" src="https://s3-media0.fl.yelpcdn.com/bphoto/cg7APOHAHFv7ArDfJDSMXA/o.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Fusion</Card.Title>
                                    <Card.Text>
                                        Pig out at a local fusion restaurant!
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-food/american">
                            <Card.Img variant="top" className="card-top food-image" src="https://images.squarespace-cdn.com/content/v1/57c63f3e03596e373290b357/1592419675327-D8MNK47GRJFF2GQ218RK/ke17ZwdGBToddI8pDm48kEpVg-ILAPna1wRh-xAJ9fRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEv36x-EUL2-BSQ5feDhwGCbXuJBFqZ-erYzVouT8yOb9TwqchglLQOCYTRn7ZGxI/image-asset.jpeg?format=1500w" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>American</Card.Title>
                                    <Card.Text>
                                        Realize the American style brought to Orlando's locals!
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-food/african">
                            <Card.Img variant="top" className="card-top food-image" src="https://s3-media0.fl.yelpcdn.com/bphoto/SOuQiNnbjzcKiNUo5nP84Q/o.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>African</Card.Title>
                                    <Card.Text>
                                        Interest yourself in some delicious African food!
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

export default ExFood;