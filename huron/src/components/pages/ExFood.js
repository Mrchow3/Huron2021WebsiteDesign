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

function ExFood(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <div className="head-hero">
                <HeroSection
                    image='https://media-cdn.tripadvisor.com/media/photo-o/07/77/96/fe/the-ritz-carlton-orlando.jpg'
                    height='92'
                    filter='70'
                ></HeroSection>
                <div className='centered-child'>
                    <h1 className="centered-title">Local Food</h1>
                </div>
            </div>
            <div className="container">
                <HCitation citation="Picture Citation: Ritz-Carlton Orlando. NORMAN’s Patio. 2015. Trip Advisor, https://www.tripadvisor.com/Hotel_Review-g34515-d258647-Reviews-The_Ritz_Carlton_Orlando_Grande_Lakes-Orlando_Florida.html#/media/258647/125277950:p/?albumid=101&type=0&category=101"></HCitation>
                <CardSection>
                    <Card>
                        <a className="card-link" href="#/explore-food-italian">
                            <Card.Img variant="top" className="card-top food-image" src="https://www.orlandosentinel.com/resizer/8DlK-WMinQAFP5yn-iZwDQgllCc=/800x449/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/N7WUAT45NRC7NN3H7EMFP6WHTQ.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Italian</Card.Title>
                                    <Card.Text>
                                        Enjoy local Italian cuisine!
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Pizarri, Michael. Prato's diavolo pizza is on the Winter Park restaurant's new happy hour menu, 2017. Orlando Sentinel, https://www.orlandosentinel.com/food-restaurants/os-et-prato-happy-hour-20170801-story.html"></CardCitation>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-food-asian">
                            <Card.Img variant="top" className="card-top food-image" src="https://scontent.fdet1-1.fna.fbcdn.net/v/t1.0-9/s1080x2048/130491457_3434886849922375_3272524920808879175_o.jpg?_nc_cat=100&ccb=2&_nc_sid=a26aad&_nc_ohc=80eBUoydHMUAX8mV_Ab&_nc_ht=scontent.fdet1-1.fna&tp=7&oh=3d8788d0abb88df986362eb86e06acd5&oe=60143B77" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Asian</Card.Title>
                                    <Card.Text>
                                        Feast on local Asian dishes!
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="Kadence. Koala Mama Holiday Gifts. 2020. Facebook, https://www.facebook.com/kadenceorlando/"></CardCitation>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-food-hispanic">
                            <Card.Img variant="top" className="card-top food-image" src="https://www.uomeetingsandevents.com/Images/Tacos_tcm90-49974.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                            <Card.Body>
                                <Card.Title>Hispanic</Card.Title>
                                <Card.Text>
                                    Experience a scrumptious Hispanic meal!
                                </Card.Text>
                            </Card.Body>
                        </Card.ImgOverlay>
                        <CardCitation citation="Universal Orlando. Familiar Yet Unexpected. 2021. Universal Orlando Resort Meetings and Events, https://www.uomeetingsandevents.com/Event-Options/Overview/Universal-Citywalk/Antojitos-Authentic-Mexican-Food.html"></CardCitation>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-food-fusion">
                            <Card.Img variant="top" className="card-top food-image" src="https://s3-media0.fl.yelpcdn.com/bphoto/cg7APOHAHFv7ArDfJDSMXA/o.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>Fusion</Card.Title>
                                    <Card.Text>
                                        Pig out at a local fusion restaurant!
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="J., Travis. Spiced Alligator Bites. 2018. Yelp, https://www.yelp.com/biz_photos/caf%C3%A9-tu-tu-tango-orlando-5?select=cg7APOHAHFv7ArDfJDSMXA"></CardCitation>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-food-american">
                            <Card.Img variant="top" className="card-top food-image" src="https://images.squarespace-cdn.com/content/v1/57c63f3e03596e373290b357/1592419675327-D8MNK47GRJFF2GQ218RK/ke17ZwdGBToddI8pDm48kEpVg-ILAPna1wRh-xAJ9fRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEv36x-EUL2-BSQ5feDhwGCbXuJBFqZ-erYzVouT8yOb9TwqchglLQOCYTRn7ZGxI/image-asset.jpeg?format=1500w" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>American</Card.Title>
                                    <Card.Text>
                                        Realize the American style brought to Orlando's locals!
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation=""></CardCitation>
                        </a>
                    </Card>
                    <Card>
                        <a className="card-link" href="#/explore-food-african">
                            <Card.Img variant="top" className="card-top food-image" src="https://s3-media0.fl.yelpcdn.com/bphoto/SOuQiNnbjzcKiNUo5nP84Q/o.jpg" />
                            <Card.ImgOverlay className="food-overlay">
                                <Card.Body>
                                    <Card.Title>African</Card.Title>
                                    <Card.Text>
                                        Interest yourself in some delicious African food!
                                    </Card.Text>
                                </Card.Body>
                            </Card.ImgOverlay>
                            <CardCitation citation="D., Kiana. Selam Veggie Special. 2020. Yelp, https://www.yelp.com/biz_photos/selam-ethiopian-and-eritrean-cuisine-orlando?select=SOuQiNnbjzcKiNUo5nP84Q"></CardCitation>
                        </a>
                    </Card>
                </CardSection>
            </div>
        </div>
    );
}

export default ExFood;