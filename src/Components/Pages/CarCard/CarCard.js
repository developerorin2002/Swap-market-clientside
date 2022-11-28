import React from 'react';
import './CarCard.css'
import { FaTimesCircle, FaCheckCircle,FaBan } from "react-icons/fa";
const CarCard = ({ car, handleOpen,reportedItems }) => {
    const {_id, image, location, resalePrice, model, name, originalPrice, postingDate, sellerName, uses, verifyStatus } = car;
    return (
        <div className='col-lg-4'>
            <div className="car-body">
                <div className="car-image">
                    <img src={image} className="w-100 img-fluid" alt="" />
                </div>
                <div className="card-info px-3 mt-3 d-flex justify-content-between align-items-center">
                    <h3>{name}</h3>
                    <h3>{model}</h3>
                </div>
                <div className='price-section px-3'>
                    <p>original price : {originalPrice}</p>
                    <p className='resale-p'>ResalePrice : ${resalePrice}</p>
                    <p>Uses Years : {uses}</p>
                </div>
                <div className='price-section px-3'>
                    <p>posting date : {postingDate}</p>
                    <p>Seller Name : {sellerName}</p>
                    <p>location : {location}</p>

                </div>
                <div className='d-flex align-items-center justify-content-between px-3'>
                    {
                        verifyStatus ? <><p className='text-success'>Seller-Type : verified <FaCheckCircle /></p></> : <><p className='text-danger'>Seller-Type : Not verified <FaTimesCircle /> </p></>
                    }
                    <button onClick={()=>reportedItems(_id)} className='wishlist-btn'>Report<FaBan/></button>
                </div>

                <button className='book-now-btn' onClick={() => handleOpen(car)}>Book Now</button>
            </div>
        </div>
    );
};

export default CarCard;