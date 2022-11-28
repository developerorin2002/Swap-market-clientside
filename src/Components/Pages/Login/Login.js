import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import googleImg from '../../Assets/Logo/google.png'
import login from '../../Assets/login.svg';
import './Login.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const { userLogin,handleGoogleSignIn } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const handleLogin = (data) => {
        const email = data.email;
        const password = data.password;
        userLogin(email, password)
            .then(res => {
                fetch(`https://swap-market-server.vercel.app/jwt?email=${res.user.email}`)
                    .then(res => res.json())
                    .then(token => {
                        localStorage.setItem('token', token.token);
                    });
                toast.success('login successfull');
                // navigate to login 
               navigate('/dashboard')

            })
            .catch(err => toast.error(`${err}`))
    };
    
    const handleGoogleLogin = () =>{
        handleGoogleSignIn()
        .then(res => {
            fetch(`https://swap-market-server.vercel.app/jwt?email=${res.user.email}`)
                .then(res => res.json())
                .then(token => {
                    localStorage.setItem('token', token.token);
                    const user = {
                        name: res.user.displayName,
                        email: res.user.email,
                        role: 'buyer',
                        image:res.user.photoURL,
                    };
                    fetch('https://swap-market-server.vercel.app/users', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(user)
                            })
                                .then(res => res.json())
                                .then(data => {

                                    toast.success('Register successfully')
                                    //navigate to dashboard 
                                    navigate('/dashboard')


                            })
                    
            });
            
            
        })
        .catch(err=>toast.error(err))
    }
    return (
        <div>
            <div className="container">
                <div className="row py-3 justify-content-center align-items-center">
                    <div className="col-lg-5">
                        <img src={login} className="img-fluid w-100" alt="" />
                    </div>
                    <div className="col-lg-4 login-field ">
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
                            <div className='mt-2'>
                                <p className='text-center'>Or Sign In With</p>
                                <div className='text-center'>
                                    <button className='google-login-btn' onClick={handleGoogleLogin}><img src={googleImg} className='google-login' alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;