import React from 'react';
import { Button } from 'react-bootstrap';
import './ProductCard.css'
const ProductCard = ({ product, deleteProduct,handleAdvertise }) => {
    const { _id, image, model, name, postingDate ,status,advertise} = product;
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
                    <p>posting date : {postingDate}</p>
                </div>

                <div className='d-flex align-items-center justify-content-between'>
                    <Button className='book-now-btn' onClick={() => deleteProduct(_id)}>Delete</Button>
                   {
                    status ? <p className='mx-2 mb-0 px-2 available-text text-success'>Sold</p>: <p className='mx-2 mb-0 px-2 available-text text-danger'>Unsold</p>
                   }
                </div>
                <div>
                    {
                        advertise ? <button  className='w-100 advertise-btn ' disabled> Advertised </button> :  <button onClick={()=>handleAdvertise(_id)} className='w-100 advertise-btn'>Advertise Product</button>
                    }
                  
                </div>
            </div>
        </div>
    );
};

export default ProductCard;