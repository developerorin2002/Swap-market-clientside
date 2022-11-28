import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import product from '../../Assets/CarImage/product.svg'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const AddProduct = () => {
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    const navigation = useNavigate()
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const imageKey = process.env.REACT_APP_IMGBB;
  
    // check user verified or not 
    const {data:isVerified} = useQuery({
        queryKey:['verified'],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/verifiedseller?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = (data) => {
        const image = data.photo[0];
        const formData = new FormData();
        formData.append("image", image)
        fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`,{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(image=>{
            const imageLink = image.data.image.url;
            const product = {
                image: imageLink,
                name: data.carName,
                model: data.model,
                originalPrice: data.originalPrice,
                resalePrice: data.resalePrice,
                uses: data.condition,
                sellerName: data.name,
                location: data.location,
                postingDate:`${date}.${month}.${year}`,
                category:data.category,
                email:`${user?.email}`,
                verifyStatus:isVerified.verified
            };
            console.log(product)
            fetch('http://localhost:5000/uploadcar',{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                },
                body:JSON.stringify(product)
            })
            .then(res=>res.json())
            .then(data=>{
                toast.success('Product Uploaded Successfully');

                navigation('/dashboard/myproduct')
            })
        })



    }
    return (
        <div className="container">

            <div className="row py-3 justify-content-center align-items-center">
                <div className="col-lg-4">
                    <h2 className='text-center py-2'>Add A Product</h2>
                    <img src={product} className="img-fluid w-100" alt="" />
                </div>
                <div className="col-lg-8 login-field py-2">
                    <div className="signup-form">
                        <form onSubmit={handleSubmit((data) => handleAddProduct(data))}>
                            <div className="row">
                                <div className='my-2 col-lg-6'>
                                    <TextField InputProps={{ readOnly: true, }} required type="email" {...register("email")} defaultValue={user?.email} label="Email" className='w-100' id="outlined-basic" variant="outlined" />
                                </div>
                                <div className='my-2 col-lg-6'>
                                    <TextField InputProps={{ readOnly: true, }} required {...register("name")} defaultValue={user?.displayName} className='w-100' id="outlined-basic" label="Your Name" variant="outlined" />
                                </div>
                            </div>
                            <div className='my-2'>
                                <TextField  {...register("carName")} className='w-100' id="outlined-basic" label="Car Name" variant="outlined" />
                            </div>
                            <div className="row">
                                <div className='my-2 col-lg-6'>
                                    <TextField  {...register("resalePrice")} className='w-100' id="outlined-basic" label="Resale Price" variant="outlined" />
                                </div>
                                <div className='my-2 col-lg-6'>
                                    <TextField  {...register("originalPrice")} className='w-100' id="outlined-basic" label="Original Price" variant="outlined" />
                                </div>

                            </div>
                            <div className="row">
                                <div className='my-2 col-lg-6'>
                                    <TextField required  {...register("phone")} label="phone" className='w-100' id="outlined-basic" variant="outlined" />
                                </div>
                                <div className='my-2 col-lg-6'>
                                    <TextField required {...register("location")} className='w-100' label="location" id="outlined-basic" variant="outlined" />
                                </div>

                            </div>
                            <div className="row">
                                <div className='my-2 col-lg-6'>
                                    <TextField required {...register("condition")} className='w-100' label="uses years" id="outlined-basic" variant="outlined" />
                                </div>
                                <div className='my-2 col-lg-6 '>
                                    <TextField required {...register("description")} className='w-100' label="Description" id="outlined-basic" variant="outlined" />
                                </div>
                            </div>
                            <label htmlFor="#">select category</label>
                            <select required {...register("category")} className="form-select my-2" aria-label="Category">
                                <option value="bmw">bmw</option>
                                <option value="volvo">volvo</option>
                                <option value="mercedes">mercedes</option>
                            </select>
                            <div className="row">
                                <div className='my-2 col-lg-6'>
                                    <TextField required type="file" {...register("photo")} className='w-100' id="outlined-basic" variant="outlined" />
                                </div>
                                <div className='my-2 col-lg-6'>
                                    <TextField required  {...register("model")} className='w-100' label="Model Number" id="outlined-basic" variant="outlined" />
                                </div>
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