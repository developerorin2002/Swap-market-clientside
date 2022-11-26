import { useEffect, useState } from "react";

const UseBuyerHook = (email) =>{
    const [isBuyer, setIsBuyer ] = useState(false);
    const [isBuyerLoading,setIsBuyerLoading] = useState(true);
    useEffect(()=>{
        setIsBuyerLoading(true);
        fetch(`http://localhost:5000/buyer?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
            setIsBuyer(data.isBuyer)
            setIsBuyerLoading(false)
        })
    },[email]);
    return [isBuyer , isBuyerLoading];
};

export default UseBuyerHook;