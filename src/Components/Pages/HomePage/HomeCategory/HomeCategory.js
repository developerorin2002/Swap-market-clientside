import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from '../Category/Category';

const HomeCategory = () => {
    const {data: categories =[]} = useQuery({
        queryKey:['category'],
        queryFn:async()=>{
            const res = await fetch('https://swap-market-server.vercel.app/category');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className='text-center py-4'>Second Hand Car Category</h3>
                        <div className="row">
                            {
                                categories.map(category=><Category key={category._id} category={category}></Category>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCategory;