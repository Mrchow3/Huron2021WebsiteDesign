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
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Home.css';

import HeroSection from '../HeroSection.js';
import TextSection from '../TextSection.js';
import CarouselSection from '../CarouselSection.js';
import CardSection from '../CardSection.js';

var carouselinput = [
  <Carousel.Item>
    <HeroSection image='https://free4kwallpapers.com/uploads/originals/2019/06/18/boat-wallpaper.jpg'>
      <Card style={{ width: '18rem' }}>
        <Card.Img
          variant='top'
          src='https://images.wallpaperscraft.com/image/boats_mountains_lake_118260_3840x2400.jpg'
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </HeroSection>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>,
  <Carousel.Item>
    <HeroSection image='https://www.pxwall.com/wp-content/uploads/2018/06/Wallpaper%20cocktail,%20beach,%205k,%20Food%209832017211.jpg'>
      <h>HELLO</h>
    </HeroSection>
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>,
  <Carousel.Item>
    <HeroSection image='https://www.telegraph.co.uk/content/dam/Travel/hotels/north-america/hawaii/ritz-carlton-kapalua-hawaii-united-states-p.jpg'>
      <h>HELLO</h>
    </HeroSection>
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>,
];
var textinput = [
  <Card className='bg-dark text-white'>
    <Card.Img
      src='https://desktopwalls.net/wp-content/uploads/2015/09/Tropical%20Beach%20Palm%20Trees%204K%20Desktop%20Wallpaper.jpg'
      alt='Card image'
    />
    <Card.ImgOverlay>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
  </Card>,
  <Card className='bg-dark text-white'>
    <Card.Img
      src='https://desktopwalls.net/wp-content/uploads/2015/09/Tropical%20Beach%20Palm%20Trees%204K%20Desktop%20Wallpaper.jpg'
      alt='Card image'
    />
    <Card.ImgOverlay>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
  </Card>,
  <Card className='bg-dark text-white'>
    <Card.Img
      src='https://desktopwalls.net/wp-content/uploads/2015/09/Tropical%20Beach%20Palm%20Trees%204K%20Desktop%20Wallpaper.jpg'
      alt='Card image'
    />
    <Card.ImgOverlay>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
  </Card>,
  <Card className='bg-dark text-white'>
    <Card.Img
      src='https://desktopwalls.net/wp-content/uploads/2015/09/Tropical%20Beach%20Palm%20Trees%204K%20Desktop%20Wallpaper.jpg'
      alt='Card image'
    />
    <Card.ImgOverlay>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
  </Card>,
  <Card className='bg-dark text-white'>
    <Card.Img
      src='https://desktopwalls.net/wp-content/uploads/2015/09/Tropical%20Beach%20Palm%20Trees%204K%20Desktop%20Wallpaper.jpg'
      alt='Card image'
    />
    <Card.ImgOverlay>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
  </Card>,
  <Card className='bg-dark text-white'>
    <Card.Img
      src='https://desktopwalls.net/wp-content/uploads/2015/09/Tropical%20Beach%20Palm%20Trees%204K%20Desktop%20Wallpaper.jpg'
      alt='Card image'
    />
    <Card.ImgOverlay>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Text>Last updated 3 mins ago</Card.Text>
    </Card.ImgOverlay>
  </Card>,
];

function Home() {
  return (
    <div className='App'>
      <HeroSection
        image='https://desktopwalls.net/wp-content/uploads/2015/09/Tropical%20Beach%20Palm%20Trees%204K%20Desktop%20Wallpaper.jpg'
        height='90'
      >
        <div className='child'>
          <header className='header'>Plan Your Trip to Nationals</header>
        </div>
      </HeroSection>

      <CarouselSection height='900' inputs={carouselinput} />
      <CardSection>{textinput}</CardSection>
      <HeroSection
        image='https://www.itl.cat/pngfile/big/92-924579_bondi-beach-ultra-hd-4k-wallpaper-4k-desktop.jpg'
        height='60'
      ></HeroSection>
    </div>
  );
}
/* = "vh-100 d-flex flex-column justify-content-between align-items-center">*/
export default Home;
/*      <Container>
        <Navbar expand="lg" variant="tabs" bg="dark">
          <Navbar.Collapse>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
      </Container> */
