import React from 'react';
import './CarCard.css'
import { FaTimesCircle, FaCheckCircle,FaBan } from "react-icons/fa";
const CarCard = ({ car, handleOpen,reportedItems }) => {
    const {reported,_id, image, location, resalePrice, model, name, originalPrice, postingDate, sellerName, uses, verifyStatus } = car;
    return (
        <div className='col-lg-4 '>
            <div className="car-body shadow-lg">
                <div className="car-image">
                    <img src={image} className="w-100 img-fluid" alt="" />
                </div>
                <div className="card-info px-3 mt-3 d-flex justify-content-between align-items-center">
                    <h4>{name}</h4>
                    <h4>{model}</h4>
                </div>
                <div className='price-section px-3'>
                    <p className='mb-0'>original price : {originalPrice}</p>
                    <p className='resale-p mb-0'>ResalePrice : ${resalePrice}</p>
                    <p className='mb-0'>Uses Years : {uses}</p>
                </div>
                <div className='price-section px-3'>
                    <p className='mb-0'>posting date : {postingDate}</p>
                    <p className='mb-0'>Seller Name : {sellerName}</p>
                    <p className='mb-0'>location : {location}</p>

                </div>
                <div className='d-flex align-items-center justify-content-between px-3'>
                    {
                        verifyStatus ? <><p className='text-success'>Seller-Type : verified <FaCheckCircle /></p></> : <><p className='text-danger'>Seller-Type : Not verified <FaTimesCircle /> </p></>
                    }
                    {
                        reported ? <><button className='wishlist-btn' disabled>Reported<FaBan/></button></>:<><button onClick={()=>reportedItems(_id)} className='wishlist-btn'>Report<FaBan/></button></>
                    }
                </div>

                <button  className='book-now-btn mx-3 my-2' onClick={() => handleOpen(car)}>Book Now</button>
            </div>
        </div>
    );
};

export default CarCard;