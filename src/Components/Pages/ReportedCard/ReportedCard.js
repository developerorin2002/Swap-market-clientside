import React from 'react';
import { Button } from 'react-bootstrap';

const ReportedCard = ({reportedItem,handleProductDelete}) => {
   
    const {_id, image, location, resalePrice, model, name, originalPrice, postingDate, sellerName, uses } = reportedItem;
    return (
        <div className='col-lg-6'>
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
                <Button onClick={()=>handleProductDelete(_id)} className='book-now-btn btn-danger' >Delete Order</Button>
            </div>
        </div>
    );
};

export default ReportedCard;