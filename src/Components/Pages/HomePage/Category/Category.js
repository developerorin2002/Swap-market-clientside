import React from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Category.css'
const Category = ({category}) => {
    const {category:carCategory,img} = category;
    return (
        <div className='col-lg-4'>
            <div className="card-shadow shadow-lg">
                <div className="card-image">
                    <img src={img} alt="" className='w-100 img-fluid' />
                </div>
                <div>
                    <p className='text-center category-text my-1'>{carCategory}</p>
                </div>
                <div className='text-center browse-btn my-3'>
                    <button><Link to={`/category/${carCategory}`}>Browse Car <FaAngleRight/></Link></button>
                </div>
            </div>
        </div>
    );
};

export default Category;