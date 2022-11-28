import React, { useEffect, useState } from 'react';
import AdvertiseCard from '../AdvertiseCard/AdvertiseCard';
import axios from 'axios';
const Advertise = () => {
    const [advertiseProduct,setAdvertiseProduct] = useState([]);
    useEffect(()=>{
        axios.get('https://swap-market-server.vercel.app/advertise')
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
                                    advertiseProduct.map(product => {  return product.paid ? <></>:<AdvertiseCard product={product} key={product._id}></AdvertiseCard>})
                                }
                            </div>
                        </div>
                    </> : <></>
            }
        </div>
    );
};

export default Advertise;