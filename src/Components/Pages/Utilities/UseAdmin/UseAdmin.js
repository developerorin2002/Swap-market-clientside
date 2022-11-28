import { useEffect } from "react";
import { useState } from "react"

const UseAdmin = (email) =>{
    const [isAdmin , setIsAdmin ] = useState(false);
    const [isAdminLoading,setIsAdminLoading] = useState(true);
    useEffect(()=>{
        setIsAdminLoading(true);
        fetch(`https://swap-market-server.vercel.app/admin?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
            setIsAdmin(data.isAdmin)
            setIsAdminLoading(false)
        })
    },[email]);
    return [isAdmin , isAdminLoading];

};
export default UseAdmin;