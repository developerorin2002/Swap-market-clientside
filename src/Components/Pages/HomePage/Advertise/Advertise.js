import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import AdvertiseCard from '../AdvertiseCard/AdvertiseCard';
import axios from 'axios';
const Advertise = () => {
    const [advertiseProduct,setAdvertiseProduct] = useState([]);
    // const { data: advertiseProduct = [] } = useQuery({
    //     queryKey: ['advertise'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/advertise',)
    //         const data = await res.json();
    //         return data;
    //     }
    // });
    useEffect(()=>{
        axios.get('http://localhost:5000/advertise')
        .then(data=>{
            setAdvertiseProduct(data.data)
        })
    },[])
    return (
        <div>
            {
                advertiseProduct.length>=2 ? <><h3 className='text-center py-2' >Advertised Product</h3></>:<></>
            }
            {
                advertiseProduct.length >= 2 ?

                    <>
                        <div className="container">
                            <div className="row">
                                {
                                    advertiseProduct.map(product => {return product.paid ? <></>:<AdvertiseCard product={product} key={product._id}></AdvertiseCard>})
                                }
                            </div>
                        </div>
                    </> : <></>
            }
        </div>
    );
};

export default Advertise;