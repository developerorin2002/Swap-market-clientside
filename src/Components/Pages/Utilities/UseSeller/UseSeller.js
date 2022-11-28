import { useEffect } from "react";
import { useState } from "react"

const UseSeller = (email) =>{
    const [isSeller , setIsSeller] = useState(false);
    const [isloading , setIsLoading ] = useState(true);
    useEffect(()=>{
        setIsLoading(true);
        fetch(`https://swap-market-server.vercel.app/seller?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
            setIsSeller(data.isSeller)
            setIsLoading(false)
        })
    },[email]);
    
    return [isSeller,isloading];

}
export default UseSeller;