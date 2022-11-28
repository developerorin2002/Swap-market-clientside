import React from 'react';
import aboutUsImg from '../../../Assets/aboutus.svg'
const AboutUs = () => {
    return (
        <div>
            <h3 className='py-3 text-center'>About Us </h3>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 py-4">
                        <img src={aboutUsImg} className="w-100 img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 py-4">
                        <h4 className='text-center'>Swap Car is a car resale marketplace</h4>
                        <p>A use can find her desire old car from here . We have a refund policy for every user . we ensure our user security with high level restriction .user can report to admin for product . if admin wish then admin can delete this product </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;