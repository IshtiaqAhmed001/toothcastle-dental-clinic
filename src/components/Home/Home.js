import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../images/banner/001.jpg';
import img2 from '../../images/banner/01.jpg';
import img3 from '../../images/banner/02.jpg';
import img4 from '../../images/banner/03.jpg';
import ClinicIntro from '../ClinicIntro/ClinicIntro';
import Service from '../Service/Service';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {

    return (
        <div className="home-container">

            <div className="slider-container">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="Intro slide"
                        />
                        <Carousel.Caption>
                            <div className="intro-text-container">
                                <h1 className="intro-text display-1 ">Welcome to </h1>
                                <h1 className="intro-text display-1  ">Tooth Castle</h1>
                            </div>
                            <p className="text-dark">Take The World's Best Quality Treatment</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className="text-dark">Our Smiles Speak Themselves</h2>
                            <p className="text-dark">Smile is the process of achieving a best possible smile for a person. We provide the best smile makeover service in town.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3 className="text-dark">Say bye to cavities!</h3>
                            <p className="text-dark">We treat cavities and protect your mouth's future health</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img4}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2 className="text-dark">Soft and Gentle</h2>
                            <p className="text-dark">Caring for your child’s dental needs.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="featured-services ">
                <Services></Services>
            </div>
            <div className="clinic-intro">
                <ClinicIntro></ClinicIntro>
            </div>


        </div>
    );
};

export default Home;