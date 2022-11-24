import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import googleImg from '../../Assets/Logo/google.png'
import login from '../../Assets/login.svg';
const Register = () => {
    const { register, handleSubmit } = useForm();
    const handleRegister = (data) => {
        console.log(data)
    }
    return (
        <div>
            <div className="container">
                <div className="row py-3 justify-content-center align-items-center">
                    <div className="col-lg-5">
                        <img src={login} className="img-fluid w-100" alt="" />
                    </div>
                    <div className="col-lg-4 login-field ">
                        <div className="signup-form">
                            <form onSubmit={handleSubmit((data) => handleRegister(data))}>
                                <h3 className='text-center'>Sign Up</h3>
                                <div className='my-3'>
                                    <TextField {...register("email")} className='w-100' id="outlined-basic" label="Your Email " variant="outlined" />
                                </div>
                                <div className='my-3'>
                                    <TextField {...register("name")} className='w-100' id="outlined-basic" label="Your Name" variant="outlined" />
                                </div>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Account Type</InputLabel>
                                    <Select onChange={(e)=>handleRegister(e.target.value)} {...register("accountType")}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Account-Type"
                                     
                                    >
                                        <MenuItem value={"seller"}>Seller</MenuItem>
                                        <MenuItem value={"buyer"} selected>Buyer</MenuItem>
                                    </Select>
                                </FormControl>
                                <div className='my-3'>
                                    <TextField {...register("password")} className='w-100' id="outlined-basic" label="Your Password " variant="outlined" />
                                </div>
                                <input className='login-btn w-100' type="submit" />
                            </form>
                            <div className='mt-2'>
                                <p className='text-center'>Or Sign In With</p>
                                <div className='text-center'>
                                    <button className='google-login-btn'><img src={googleImg} className='google-login' alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;