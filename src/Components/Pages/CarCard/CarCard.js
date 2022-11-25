import { Button } from '@mui/material';
import React from 'react';
import './CarCard.css'

const CarCard = ({car,handleOpen}) => {
    const {image,location,resalePrice,model,name,originalPrice,postingDate,sellerName,uses} = car;
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
                    <p>Uses Condition :{uses}</p>
                </div>
                <div className='price-section px-3'>
                    <p>posting date : {postingDate}</p>
                    <p>Seller Name : {sellerName}</p>
                    <p>location : {location}</p>
                </div>
                
                <Button className='book-now-btn' onClick={()=>handleOpen(car)}>Book Now</Button>
            </div>
        </div>
    );
};

export default CarCard;