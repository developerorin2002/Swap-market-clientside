import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const { data: myOrders = [] } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`https://swap-market-server.vercel.app/order?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    });
    console.log(myOrders)
    return (
        <div>
            <h2 className='text-center py-3'>My Order</h2>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Serial Number</th>
                                    <th>Car Name</th>
                                    <th>Model</th>
                                    <th>Location</th>
                                    <th>Price</th>
                                    <th>Payment</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myOrders.map((order,i)=><tr key={order._id} className='py-2'>
                                    <td>{i+1}</td>
                                    <td>{order.carName}</td>
                                    <td>{order.model}</td>
                                    <td>{order.location}</td>
                                    <td>{order.price}</td>
                                    {
                                        order.paid ?<><td><button className='btn btn-success' disabled>Paid</button></td></>:<><td><button className='btn btn-danger'><Link className='text-white' to={`/dashboard/payment/${order._id}`}>Pay</Link></button></td></>
                                    }
                                </tr>)
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;