import React, {useState,useEffect} from 'react'
import {Navbar,Nav,Container, NavDropdown,Form, FormControl, Button, Carousel,CarouselItem} from 'react-bootstrap'
import './CarouselSection.css';

//const Navbar;
function CarouselSection(props) {

    const CarouselStyles = {
        'height' : `${props.height}vh`
    }

  return (
    <div className = 'carousel-section' style={CarouselStyles}>
      <Carousel>
          <Carousel.Item>
            <img
              className="carousel"
              src = "https://media1.s-nbcnews.com/i/newscms/2015_34/745376/orlando-staycation-tease-today-150822_dd1ed0a3cbdb9d5615796851572a2dc9.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel"
              src = "https://housely.com/wp-content/uploads/2016/03/Skyline_UrbanPardise_0.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel"
              src="https://tse2.mm.bing.net/th?id=OIP.S-0pd7ODP_yzg4OIw7TO9wHaEK&pid=Api"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
    
  );
}

export default CarouselSection;