import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import CarCard from '../CarCard/CarCard';
import BookingModal from '../Utilities/BookingModal/BookingModal';

const DisplayCars = () => {
    const {user} = useContext(AuthContext);
    const cars = useLoaderData();
    const [open, setOpen] = React.useState(false);
    const [carInfo,setCarInfo] = useState({});
    const handleOpen = (car) => {
      setOpen(true);
      setCarInfo(car)
    };
    const handleClose = () => {
      setOpen(false);
    };
    const reportedItems = (id) =>{
        fetch(`http://localhost:5000/reported/${id}`,{
            method:'POST'
        })
        .then(res=>res.json())
        .then(data=>{
            
            fetch(`http://localhost:5000/reportedproduct/${id}`,{
                method:'PUT'
            })
            .then(res=>res.json())
            .then(res=>{
                toast.success('Reported To Admin');
            })
        })
        
    }
    return (
        <div>
            <div className="container g-3">
                <h3 className='text-center'>Matched Car </h3>
                <div className="row g-4 py-3">
                    {
                        cars.map(car=><CarCard reportedItems={reportedItems} setOpen={setOpen} open={open} handleClose={handleClose} handleOpen={handleOpen} key={car._id} car={car}></CarCard>)
                    }
                </div>
            </div>
            <BookingModal carInfo={carInfo} user={user} setOpen={setOpen} open={open} handleClose={handleClose} handleOpen={handleOpen}></BookingModal>
        </div>
    );
};

export default DisplayCars;