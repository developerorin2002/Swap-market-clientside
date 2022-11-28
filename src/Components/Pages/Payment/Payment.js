import React from 'react';
import { useLoaderData } from 'react-router-dom';
import stripeImg from '../../Assets/stripe.svg';
import { loadStripe } from '@stripe/stripe-js';
import CheckOut from '../CheckOut/CheckOut';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe(process.env.REACT_APP_PAYMENT_KEY)
const Payment = () => {
    const userData = useLoaderData();
    console.log(userData);
    return (
        <div>
            <h2 className='text-center'>Payment</h2>
            <div className="container">
                <div className="row py-4">
                    <div className="col-lg-6">
                        <img src={stripeImg} className="w-100 img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <Elements stripe={stripePromise}>
                            <CheckOut userData={userData}></CheckOut>
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;