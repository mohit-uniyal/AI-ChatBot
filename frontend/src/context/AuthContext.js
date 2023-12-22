import {createContext, useContext, useEffect, useState} from 'react';
import { apiEndpoints } from '../utils/api';


const AuthContext=createContext();

export const useAuth=()=>{
    return useContext(AuthContext);
}

export const AuthProvider=({children})=>{
    const [user, setUser]=useState(null);
    const [isLoggedIn, setIsLoggedIn]=useState(false);

    useEffect(()=>{
        const checkUserLoggedIn=async ()=>{
            try{
                const response=await fetch(apiEndpoints.isLoggedIn, {
                    method: 'GET',
                    credentials: 'include'
                });
                if(!response.ok){
                    const data=await response.json();
                    const errorMessage=data.error;
                    throw new Error(errorMessage);
                }
                const data=await response.json();
                setIsLoggedIn(true);
                setUser(data);
            }catch(err){
                setIsLoggedIn(false);
                setUser(null);
                console.log(err.message);
            }
        }
        checkUserLoggedIn();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            isLoggedIn,
            setIsLoggedIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}