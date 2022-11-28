import React from 'react';

const AdvertiseCard = ({ product }) => {
    const { image, location, resalePrice, model, name, originalPrice, postingDate, sellerName, uses } = product;
    return (
        <div className='col-lg-4 '>
            <div className="car-body shadow-lg">
                <div className="car-image">
                    <img src={image} className="w-100 img-fluid" alt="" />
                </div>
                <div className='py-3'>
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
                </div>

            </div>
        </div>
    );
};

export default AdvertiseCard;