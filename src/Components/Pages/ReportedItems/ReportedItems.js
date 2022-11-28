import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import ReportedCard from '../ReportedCard/ReportedCard';

const ReportedItems = () => {
    const { data: reportedItems = [],refetch } = useQuery({
        queryKey: ['reportedItems'],
        queryFn: async () => {
            const res = await fetch('https://swap-market-server.vercel.app/reported');
            const data = await res.json();
            return data;
        }
    });
    const handleProductDelete = (id)=>{
        console.log(id);
        fetch(`https://swap-market-server.vercel.app/reported/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success('product delete successfully');
            refetch();
        })
    } 
    return (
        <div>
            <h2 className='text-center'>Reported Product</h2>
            <div className="container">
                <div className="row g-4">
                    {
                        reportedItems.map(reportedItem => <ReportedCard handleProductDelete={handleProductDelete} key={reportedItem._id} reportedItem={reportedItem}></ReportedCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ReportedItems;