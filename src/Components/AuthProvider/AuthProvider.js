import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, updateProfile} from 'firebase/auth'; 
import app from '../Firebase/Firebase.init';

const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const handleRegistration = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    };
    const updateUserProfile = (name,photoUrl) =>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoUrl:photoUrl
        })
    }

    const authMethod = {
        handleRegistration,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authMethod}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;