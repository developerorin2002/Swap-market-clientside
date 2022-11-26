import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'; 
import app from '../Firebase/Firebase.init';

const auth = getAuth(app);
export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    // handle registration
    const handleRegistration = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    };
    // update profile
    const updateUserProfile = (name,photoUrl) =>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoUrl
        })
    };
    // login user 
    const userLogin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // logout user 
    const logOut = ()=>{
        localStorage.removeItem('token')
        return signOut(auth)
    }
    // google sign in 
    const handleGoogleSignIn = ()=>{
      return signInWithPopup(auth,provider)
    };
    // google registration
    const handleGoogleRegister = () =>{
        return signInWithPopup(auth,provider);
    }
    const authMethod = {
        handleRegistration,
        updateUserProfile,
        userLogin,
        user,
        loading,
        logOut,
        handleGoogleSignIn ,
        handleGoogleRegister

    };
    // user observer 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false);
        })
        return ()=> unSubscribe();
    },[])
    return (
        <AuthContext.Provider value={authMethod}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;