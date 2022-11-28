import React from 'react';
import welcomeImg from '../../Assets/welcomeCat.svg'
const WelcomeDashboard = () => {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <h2 className='text-center py-2'>Welcome To Dashboard</h2>
                    <div className="col-lg-6 py-5 ">
                        <img src={welcomeImg} className="w-100 img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeDashboard;