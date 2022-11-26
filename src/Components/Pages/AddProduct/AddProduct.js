import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import product from '../../Assets/CarImage/product.svg'

const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const handleAddProduct = (data) => {
        console.log(data);
        
    }
    return (
        <div className="container">
            <h2 className='text-center py-2'>Add A Product</h2>
            <div className="row py-3 justify-content-center align-items-center">
                <div className="col-lg-4">
                    <img src={product} className="img-fluid w-100" alt="" />
                </div>
                <div className="col-lg-8 login-field ">
                    <div className="signup-form">
                        <form onSubmit={handleSubmit((data) => handleAddProduct(data))}>
                            <div className="row">
                                <div className='my-3 col-lg-6'>
                                    <TextField InputProps={{ readOnly: true, }} required type="email" {...register("email")} defaultValue={user?.email} label="Email" className='w-100' id="outlined-basic" variant="outlined" />
                                </div>
                                <div className='my-3 col-lg-6'>
                                    <TextField InputProps={{ readOnly: true, }} required {...register("name")} defaultValue={user?.displayName} className='w-100' id="outlined-basic" label="Your Name" variant="outlined" />
                                </div>
                            </div>

                            <div className="row">
                                <div className='my-3 col-lg-6'>
                                    <TextField  {...register("price")} className='w-100' id="outlined-basic" label="Price" variant="outlined" />
                                </div>
                                <div className='my-3 col-lg-6'>
                                    <TextField required type="file" {...register("photo")} className='w-100' id="outlined-basic" variant="outlined" />
                                </div>
                            </div>
                            <div className="row">
                                <div className='my-3 col-lg-6'>
                                    <TextField required  {...register("phone")} label="phone" className='w-100' id="outlined-basic" variant="outlined" />
                                </div>
                                <div className='my-3 col-lg-6'>
                                    <TextField required {...register("location")} className='w-100' label="location" id="outlined-basic" variant="outlined" />
                                </div>
                               
                            </div>
                            <div className='my-3'>
                                    <TextField required {...register("condition")} className='w-100' label="condition" id="outlined-basic" variant="outlined" />
                            </div>
                            <div className='my-3'>
                                    <TextField required {...register("description")} className='w-100' label="Description" id="outlined-basic" variant="outlined" />
                            </div>
                            <input className='login-btn w-100' type="submit" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;