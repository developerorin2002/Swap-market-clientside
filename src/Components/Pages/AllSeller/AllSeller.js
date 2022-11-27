import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';

const AllSeller = () => {
    const { data: allUsers = [], refetch } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allseller',{
                headers:{
                    authorization:`bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    const handleDelete = (id)=>{
        console.log(id);
        fetch(`http://localhost:5000/allseller/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success('user delete successfully');
            refetch();
        })
    };
    const handleVerify = (id) =>{
        fetch(`http://localhost:5000/verifyseller/${id}`,{
            method:'PUT'
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success('user verified')
            console.log(data)
            refetch();
        })
    }
    return (
        <div>
            <h2 className='text-center'>All Seller</h2>
            <Table striped bordered hover className='my-5'>
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Seller Name </th>
                        <th>Seller Email</th>
                        <th>Seller Number</th>
                        <th>Action</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        allUsers.map((user , i )=> <tr key={user._id}>
                            <td>{i+1}</td>
                            <td className='px-3'>{user.name}</td>
                            <td>{user.email}</td>
                            <td className='text-center'><img src={user.image} className="w-25" alt="" /></td>
                            <td ><button className='btn btn-danger text-center my-3' onClick={()=>handleDelete(user._id)}>delete</button></td>
                            <td >{user?.verified ?<><button className='btn btn-success my-3'>verified</button></>:<><button className='btn btn-success text-center my-3' onClick={()=>handleVerify(user._id)}>Verify</button></> }</td>
                        </tr>)
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default AllSeller;