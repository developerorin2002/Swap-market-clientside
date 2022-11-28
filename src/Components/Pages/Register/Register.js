import React, { useContext } from 'react';
import { TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import googleImg from '../../Assets/Logo/google.png'
import login from '../../Assets/login.svg';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const { handleRegistration, updateUserProfile, handleGoogleRegister } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const imgBBSecret = process.env.REACT_APP_IMGBB;
    const navigate = useNavigate();
    const handleRegister = (data) => {

        const name = data.name;
        const email = data.email;
        const password = data.password;
        const account = data.account;
        const image = data.photo[0];
        // form data for image hosting 
        const formData = new FormData();
        formData.append("image", image)
        // register account 
        handleRegistration(email, password)
            .then(res => {
                fetch(`https://swap-market-server.vercel.app/jwt?email=${res.user.email}`)
                    .then(res => res.json())
                    .then(token => {
                        localStorage.setItem('token', token.token);
                    })
                // host image in img bb
                fetch(`https://api.imgbb.com/1/upload?key=${imgBBSecret}`, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(data => {
                        // update profile
                        const photoUrl = data.data.image.url;

                        updateUserProfile(name, photoUrl)
                            .then(res => {
                                // save user in database
                                const user = {
                                    name: name,
                                    email: email,
                                    role: account,
                                    image: photoUrl,
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
                            })
                            .catch(err => console.log(err))

                    })

            })
            .catch(err => toast.error(err.message))


    };
    const googleRegister = () => {
        handleGoogleRegister()
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
                        <div className="signup-form">
                            <form onSubmit={handleSubmit((data) => handleRegister(data))}>
                                <h3 className='text-center py-2'>Sign Up</h3>
                                <div className='my-3'>
                                    <TextField required type="email" {...register("email")} className='w-100' id="outlined-basic" label="Your Email " variant="outlined" />
                                </div>
                                <div className='my-3'>
                                    <TextField required {...register("name")} className='w-100' id="outlined-basic" label="Your Name" variant="outlined" />
                                </div>

                                <select required {...register("account")} className="form-select" aria-label="Default select example">
                                    <option value="seller">Seller</option>
                                    <option selected value="buyer">Buyer</option>
                                </select>

                                <div className='my-3'>
                                    <TextField required type="password" {...register("password")} className='w-100' id="outlined-basic" label="Your Password " variant="outlined" />
                                </div>
                                <div className='my-3'>
                                    <TextField required type="file" {...register("photo")} className='w-100' id="outlined-basic" variant="outlined" />
                                </div>
                                <input className='login-btn w-100' type="submit" />
                            </form>
                            <div className='mt-2'>
                                <p className='text-center'>Or Sign In With</p>
                                <div className='text-center py-2'>
                                    <button className='google-login-btn' onClick={googleRegister} ><img src={googleImg} className='google-login' alt="" /></button>
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