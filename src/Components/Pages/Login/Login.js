import { TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import login from '../../Assets/login.svg';
import './Login.css'
const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = (data) => {
        console.log(data)
    }
    return (
        <div>
            <div className="container">
                <div className="row py-3 justify-content-center align-items-center">
                    <div className="col-lg-5">
                        <img src={login} className="img-fluid w-100" alt="" />
                    </div>
                    <div className="col-lg-4 login-field py-5">
                        <div className="signup-form py-5">
                            <form onSubmit={handleSubmit((data) => handleLogin(data))}>
                                <h3 className='text-center'>Login</h3>
                                <div className='my-3'>
                                    <TextField {...register("email")} className='w-100' id="outlined-basic" label="Your Email " variant="outlined" />
                                </div>
                                <div className='my-3'>
                                    <TextField {...register("password")} className='w-100' id="outlined-basic" label="Your Password " variant="outlined" />
                                </div>
                                <input className='login-btn w-100' type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;