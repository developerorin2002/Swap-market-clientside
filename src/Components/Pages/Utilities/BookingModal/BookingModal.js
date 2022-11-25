import { Modal, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate, } from 'react-router-dom';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
const BookingModal = ({ open, setOpen, handleClose, handleOpen, carInfo, user }) => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const handleBooking = (data,event)=>{
        const order = {
            carName:data.carName,
            model:data.model,
            name:data.name,
            email:data.email,
            location:data.location,
            phone:data.phone,
            price:data.price,
            image:carInfo.image
        };
        fetch('http://localhost:5000/order',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged === true){
                toast.success('order added') ;
                navigate('/myorder')
            }
            
        })
        
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 400 }}>
                    <h2 className='text-center'>Book Now</h2>
                    <div className="login-field ">
                        <div className="signup-form">
                            <form onSubmit={handleSubmit((data) => handleBooking(data))}>
                                <div className='my-1'>
                                    <TextField InputProps={{readOnly: true,}} {...register("name")} className='w-100' id="outlined-basic" defaultValue={user?.displayName} variant="outlined" />
                                </div>
                                <div className='my-1'>
                                    <TextField InputProps={{readOnly: true,}} {...register("email")} className='w-100' id="outlined-basic" defaultValue={user?.email} variant="outlined" />
                                </div>
                                <div className='my-1'>
                                    <TextField InputProps={{readOnly: true,}} {...register("price")} className='w-100' id="outlined-basic" defaultValue={carInfo?.resalePrice} variant="outlined" />
                                </div>
                                <div className='my-1'>
                                    <TextField InputProps={{readOnly: true,}} {...register("carName")} className='w-100' id="outlined-basic" defaultValue={carInfo?.name} variant="outlined" />
                                </div>
                                <div className='my-1'>
                                    <TextField InputProps={{readOnly: true,}} {...register("model")} className='w-100' id="outlined-basic" defaultValue={ carInfo?.model} variant="outlined" />
                                </div>
                                <div className='my-1'>
                                    <TextField  {...register("phone")} className='w-100' id="outlined-basic" placeholder='Write Your Phone Number'  variant="outlined" />
                                </div>
                                <div className='my-1'>
                                    <TextField  {...register("location")} className='w-100' id="outlined-basic" placeholder='Meeting Location'  variant="outlined" />
                                </div>
                                <input className='login-btn w-100' type="submit" />
                            </form>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default BookingModal;