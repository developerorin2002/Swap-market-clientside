import React, { useContext, useState } from 'react';
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
    return (
        <div>
            <div className="container g-3">
                <div className="row">
                    {
                        cars.map(car=><CarCard setOpen={setOpen} open={open} handleClose={handleClose} handleOpen={handleOpen} key={car._id} car={car}></CarCard>)
                    }
                </div>
            </div>
            <BookingModal carInfo={carInfo} user={user} setOpen={setOpen} open={open} handleClose={handleClose} handleOpen={handleOpen}></BookingModal>
        </div>
    );
};

export default DisplayCars;