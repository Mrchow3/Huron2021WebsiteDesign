import logo from './logo.svg';
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
} from 'react-bootstrap';
import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HNavBar from './components/HNavBar.js';
import HFooter from './components/HFooter.js';
import Home from './components/pages/Home.js';
import Food from './components/pages/Food';
import Hotels from './components/pages/Hotels';
import ExTransportation from './components/pages/ExTransportation';
import ExFood from './components/pages/ExFood';
import ExSightseeing from './components/pages/ExSightseeing';
import { foodInputs } from './components/inputs/FoodInputs.js';
import ExFoodSingle from './components/pages/ExFoodSingle';
import { sightseeingInputs } from './components/inputs/SightseeingInputs.js';
import ExSightseeingSingle from './components/pages/ExSightseeingSingle';
import ExAttractions from './components/pages/ExAttractions';

function App() {
  var boo = ExFoodSingle(foodInputs[0]);
  return (
    <HashRouter basename={process.env.PUBLIC_URL + '/'}>
      <HNavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/food' component={Food} />
        <Route path='/explore-transportation' component={ExTransportation} />
        <Route path='/explore-food' component={ExFood} />
        <Route path='/explore-food-italian' component={ExFoodSingle} children={ <ExFoodSingle
          type = {foodInputs[0].type}
          content = {foodInputs[0].content}
        />} />
        <Route path='/explore-food-asian' component={ExFoodSingle} children={ <ExFoodSingle
          type = {foodInputs[1].type}
          content = {foodInputs[1].content}
        />} />
        <Route path='/explore-food-hispanic' component={ExFoodSingle} children={ <ExFoodSingle
          type = {foodInputs[2].type}
          content = {foodInputs[2].content}
        />} />
        <Route path='/explore-food-fusion' component={ExFoodSingle} children={ <ExFoodSingle
          type = {foodInputs[3].type}
          content = {foodInputs[3].content}
        />} />
        <Route path='/explore-food-american' component={ExFoodSingle} children={ <ExFoodSingle
          type = {foodInputs[4].type}
          content = {foodInputs[4].content}
        />} />
        <Route path='/explore-food-african' component={ExFoodSingle} children={ <ExFoodSingle
          type = {foodInputs[5].type}
          content = {foodInputs[5].content}
        />} />
        <Route path='/explore-sightseeing' component={ExSightseeing} />
        <Route path='/explore-sightseeing-harry-p-leu-gardens' component={ExSightseeingSingle} children={ 
          <ExSightseeingSingle
            title = {sightseeingInputs[0].title}
            blurb = {sightseeingInputs[0].blurb}
            website = {sightseeingInputs[0].website}
            prices = {sightseeingInputs[0].prices}
            hours = {sightseeingInputs[0].hours}
            image = {sightseeingInputs[0].image}
        />} />
        <Route path='/explore-sightseeing-florida-tours' component={ExSightseeingSingle} children={ 
          <ExSightseeingSingle
            title = {sightseeingInputs[1].title}
            blurb = {sightseeingInputs[1].blurb}
            website = {sightseeingInputs[1].website}
            prices = {sightseeingInputs[1].prices}
            hours = {sightseeingInputs[1].hours}
            image = {sightseeingInputs[1].image}
        />} />
        <Route path='/explore-sightseeing-tibet-butler-preserve' component={ExSightseeingSingle} children={ 
          <ExSightseeingSingle
            title = {sightseeingInputs[2].title}
            blurb = {sightseeingInputs[2].blurb}
            website = {sightseeingInputs[2].website}
            prices = {sightseeingInputs[2].prices}
            hours = {sightseeingInputs[2].hours}
            image = {sightseeingInputs[2].image}
        />} />
        <Route path='/explore-sightseeing-lake-eola-park' component={ExSightseeingSingle} children={ 
          <ExSightseeingSingle
            title = {sightseeingInputs[3].title}
            blurb = {sightseeingInputs[3].blurb}
            website = {sightseeingInputs[3].website}
            prices = {sightseeingInputs[3].prices}
            hours = {sightseeingInputs[3].hours}
            image = {sightseeingInputs[3].image}
        />} />
        <Route path='/explore-sightseeing-exotic-animals' component={ExSightseeingSingle} children={ 
          <ExSightseeingSingle
            title = {sightseeingInputs[4].title}
            blurb = {sightseeingInputs[4].blurb}
            website = {sightseeingInputs[4].website}
            prices = {sightseeingInputs[4].prices}
            hours = {sightseeingInputs[4].hours}
            image = {sightseeingInputs[4].image}
        />} />
        <Route path='/explore-sightseeing-butler-chain-lakes' component={ExSightseeingSingle} children={ 
          <ExSightseeingSingle
            title = {sightseeingInputs[5].title}
            blurb = {sightseeingInputs[5].blurb}
            website = {sightseeingInputs[5].website}
            prices = {sightseeingInputs[5].prices}
            hours = {sightseeingInputs[5].hours}
            image = {sightseeingInputs[5].image}
        />} />
        <Route path='/explore-sightseeing-kissimmee-swamp-tours' component={ExSightseeingSingle} children={ 
          <ExSightseeingSingle
            title = {sightseeingInputs[6].title}
            blurb = {sightseeingInputs[6].blurb}
            website = {sightseeingInputs[6].website}
            prices = {sightseeingInputs[6].prices}
            hours = {sightseeingInputs[6].hours}
            image = {sightseeingInputs[6].image}
        />} />
        <Route path='/explore-sightseeing-winter-park-boat-tour' component={ExSightseeingSingle} children={ 
          <ExSightseeingSingle
            title = {sightseeingInputs[7].title}
            blurb = {sightseeingInputs[7].blurb}
            website = {sightseeingInputs[7].website}
            prices = {sightseeingInputs[7].prices}
            hours = {sightseeingInputs[7].hours}
            image = {sightseeingInputs[7].image}
        />} />
        <Route path='/explore-sightseeing-wildlife-attractions' component={ExSightseeingSingle} children={ 
          <ExSightseeingSingle
            title = {sightseeingInputs[8].title}
            blurb = {sightseeingInputs[8].blurb}
            website = {sightseeingInputs[8].website}
            prices = {sightseeingInputs[8].prices}
            hours = {sightseeingInputs[8].hours}
            image = {sightseeingInputs[8].image}
        />} />
        <Route path='/explore-attractions' component={ExAttractions} />
        <Route path='/hotels' component={Hotels} />
      </Switch>
      <footer>
        <HFooter />
      </footer>
    </HashRouter>
  );
}

export default App;
/*      
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
*/
