import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';

const AllBuyers = () => {
    const {data:allBuyer =[],refetch} = useQuery({
        queryKey:['allBuyer'],
        queryFn:async()=>{
            const res = await fetch(`https://swap-market-server.vercel.app/allbuyer`,{
                headers:{
                    authorization : `bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });
    const handleDelete = (id)=>{
        console.log(id);
        fetch(`https://swap-market-server.vercel.app/allseller/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success('user delete successfully');
            refetch();
        })
    };
    return (
        <div>
            <h2 className='text-center'>All Buyer </h2>
            <Table striped bordered hover className='my-5'>
                <thead>
                    <tr>
                        <th className='text-center'>Serial Number</th>
                        <th className='text-center'>Buyer Name </th>
                        <th className='text-center'>Buyer Email</th>
                        <th className='text-center'>Buyer Image</th>
                        <th className='text-center'>Action</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {
                        allBuyer.map((user , i )=> <tr key={user._id}>
                            <td>{i+1}</td>
                            <td className='px-3'>{user.name}</td>
                            <td>{user.email}</td>
                            <td className='text-center'><img src={user.image} className="w-25" alt="" /></td>
                            <td ><button className='btn btn-danger text-center my-3' onClick={()=>handleDelete(user._id)}>delete</button></td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default AllBuyers;