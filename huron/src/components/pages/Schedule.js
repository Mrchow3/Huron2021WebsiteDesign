import React, { useState, useEffect, Component } from 'react';

import './css/ExTransportation.css';
import './css/Home.css';
import './css/Hotels.css'
import '../css/main.css'

import HeroSection from '../HeroSection.js';

function Schedule() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="head-hero">
                <HeroSection
                image='https://thenextweb.com/wp-content/blogs.dir/1/files/2014/02/presentation-team.jpg'
                height='92'
                style="filter: brightness(50%)">
                </HeroSection>
                <div className='centered-child'>
                <h1 className="centered-title">Schedule</h1>
                </div>
            </div>
            <div className="container">
                <h2 className="heading">Tentative Schedule</h2>
                <hr className="the-hr"></hr>
                <p>You may also view the schedule <a target="_blank" href="https://34kjmn3xy614nqsp3bsgpb13-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/SOE-NLC-2021-TENTATIVE-10.01.20.pdf">here</a>.</p>
                <div className="frame">
                    <iframe src="https://34kjmn3xy614nqsp3bsgpb13-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/SOE-NLC-2021-TENTATIVE-10.01.20.pdf"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Schedule;