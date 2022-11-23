import React from 'react';
import { FaSadTear } from 'react-icons/fa';
import './ErrorPage.css'
const ErrorPage = () => {
    return (
        <div>
            <div>
                <div className='d-flex align-items-center justify-content-center'>
                    <div className='text-center'>
                        <FaSadTear className='error-icon img-fluid'></FaSadTear>
                        <h1>NOTHING FOUND IN THIS PAGE</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;