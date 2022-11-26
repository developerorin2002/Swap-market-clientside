import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ProductCard from '../ProductCard/ProductCard';

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const { data: myProducts = [],refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproduct?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })
    const deleteProduct = (id) =>{
        fetch(`http://localhost:5000/deleteproduct/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            refetch();
        })
    }
    return (
        <div>
            <h2 className='text-center'>My Product</h2>
            <div className="container">
                <div className="row gy-3">
                    {
                        myProducts.map(product => <ProductCard deleteProduct={deleteProduct} key={product._id} product={product}></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProduct;