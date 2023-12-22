import React from 'react'
import { useAuth } from '../context/AuthContext'
import { GiArtificialHive } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { apiEndpoints } from '../utils/api';


const Header = () => {
    const { isLoggedIn, setIsLoggedIn, setUser } = useAuth();

    const handleLogout=async ()=>{
        try{
            await fetch(apiEndpoints.logout, {
                method: 'GET',
                credentials: 'include'
            })
            setIsLoggedIn(false);
            setUser(null);
        }catch(err){
            console.log(err.message);
        }
    }

    return (
        <div className='flex justify-between p-3'>
            <Link to='/' className="logo flex gap-1">
                <GiArtificialHive className='text-4xl' />
                <div className='text-2xl'>ChatGenius</div>
            </Link>
            <div className="btn-group">
                <div className='flex gap-2 h-full items-center'>
                    {isLoggedIn && <Link to='/chat' className='bg-white hover:bg-blue-500 hover:text-white font-medium text-[#05101c] py-0.5 px-3 rounded-md duration-200'>Go to Chat</Link>}
                    <Link to='/login' className='bg-white hover:bg-blue-500 hover:text-white font-medium text-[#05101c] py-0.5 px-3 rounded-md duration-200'>Login</Link>
                    <Link to='/signup' className='bg-white hover:bg-blue-500 hover:text-white font-medium text-[#05101c] py-0.5 px-3 rounded-md duration-200'>Signup</Link>
                    {isLoggedIn && <button className='bg-white hover:bg-blue-500 hover:text-white font-medium text-[#05101c] py-0.5 px-3 rounded-md duration-200' onClick={handleLogout} >Logout</button>}
                </div>
            </div>
        </div>
    )
}

export default Header