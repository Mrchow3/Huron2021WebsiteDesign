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
                            <button id="yacht" className={this.state.yacht === this.HOTEL.YACHT ? "btn-primary btn ml-n2" : "btn ml-n2"} onClick={() => this.switchHotelsToYacht()}>
                                Yacht Club
                            </button>
                            <button className={this.state.yacht === this.HOTEL.SPRINGS ? "btn-primary btn ml-2" : "btn ml-2"} onClick={() => this.switchHotelsToSprings()}>
                                Coronado Springs
                            </button>
                        </div>
                    </div>
                    {
                        this.state.yacht === this.HOTEL.YACHT?
                        <div>
                            HELLO
                        </div>
                        :null
                    }
                </div>
            </div>
        );
    }
}

export default Hotels;