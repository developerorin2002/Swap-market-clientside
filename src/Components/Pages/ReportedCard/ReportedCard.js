import React from 'react';
import { Button } from 'react-bootstrap';

const ReportedCard = ({reportedItem,handleProductDelete}) => {
   
    const {_id, image, location, resalePrice, model, name, originalPrice, postingDate, sellerName, uses } = reportedItem;
    return (
        <div className='col-lg-6 '>
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
                    <p className='mb-0'>Uses Condition :{uses}</p>
                </div>
                <div className='price-section px-3'>
                    <p className='mb-0'>posting date : {postingDate}</p>
                    <p className='mb-0'>Seller Name : {sellerName}</p>
                    <p className='mb-0'>location : {location}</p>
                </div>
                <Button onClick={()=>handleProductDelete(_id)} className='btn-danger mx-3 my-3 ' >Delete Order</Button>
            </div>
        </div>
    );
};

export default ReportedCard;