import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyOrder = () => {
    const {user} = useContext(AuthContext);
    const {data:myOrders=[]} = useQuery({
        queryKey:['orders'],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/order?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    console.log(myOrders)
    return (
        <div>
            <h2>my order</h2>
        </div>
    );
};

export default MyOrder;