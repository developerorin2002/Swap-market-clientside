import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ProductCard from '../ProductCard/ProductCard';

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const { data: myProducts = [],refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            const res = await fetch(`https://swap-market-server.vercel.app/myproduct?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })
    const deleteProduct = (id) =>{
        fetch(`https://swap-market-server.vercel.app/deleteproduct/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            refetch();
        })
    };
    // handle advertisement
    const handleAdvertise =(id) =>{
        console.log(id)
        fetch(`https://swap-market-server.vercel.app/advertise?id=${id}`,{
            method:'POST',
        })
        .then(res=>res.json())
        .then(res=>{
            toast.success('Advertise Item Successfully');
            // update status on my product
            fetch(`https://swap-market-server.vercel.app/advertise?id=${id}`,{
                method:'PUT'
            })
            .then(res=>res.json())
            .then(data=>{
                refetch();
            })
        })
    }
    return (
        <div>
            <h2 className='text-center'>My Product</h2>
            <div className="container">
                <div className="row gy-3">
                    {
                        myProducts.map(product => <ProductCard handleAdvertise={handleAdvertise} deleteProduct={deleteProduct} key={product._id} product={product}></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProduct;