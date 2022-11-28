import React from 'react';
import thankyouImage from '../../Assets/Thankyou.svg'
const ThankYou = () => {
    return (
        <div>
            <h2 className='text-center'>Thank You</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 ">
                        <div>
                            <img src={thankyouImage} className="w-100 img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;