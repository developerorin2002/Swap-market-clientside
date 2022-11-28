import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Advertise from '../Advertise/Advertise';
import HomeCategory from '../HomeCategory/HomeCategory';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='my-3'>
                <div className="banner">
                    <div className="container py-5">
                        <div className=" py-5 row align-items-center justify-content-center">
                            <div className="col-lg-12 py-5">
                                <div className='cs-head py-5 px-4'>
                                    <p className='custom-text text-white text-center' >Find Your Desire Car And Find Your Passion From Here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-3'>
                <HomeCategory></HomeCategory>
            </div>
            <div className='my-3'>
               <Advertise></Advertise>
            </div>
            <div className='my-3'>
               <AboutUs></AboutUs>
            </div>
        </div>
    );
};

export default Home;