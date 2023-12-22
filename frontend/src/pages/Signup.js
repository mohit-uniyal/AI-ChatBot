import React, { useState } from 'react'
import Header from '../components/Header'
import roboImage from './../assests/robo-image.png'
import { IoIosLogIn } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { apiEndpoints } from '../utils/api';

const Signup = () => {
  const [name, setName]=useState();
  const [email, setEmail]=useState();
  const [password, setPassword]=useState();
  const [cofirmPassword, setConfirmPassword]=useState();
  const [error, setError]=useState('');
  const navigate=useNavigate();

  const handleSubmit=async (e)=>{
    e.preventDefault();
    if(password!==cofirmPassword){
      setError('wrong password');
      return;
    }
    try{
      const response=await fetch(apiEndpoints.signup, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          password
        })
      });
      if(!response.ok){
        const data=await response.json();
        const errorMessage=data.error;
        throw new Error(errorMessage);
      }
      navigate('/login');
    }catch(err){
      setError(err.message);
    }
  }

  return (
    <div className='h-screen'>
        <Header></Header>
        <div className='flex items-center justify-between px-32 mt-10'>
            <img src={roboImage} alt="" className='w-5/12 animate-roboAnimate' />
            <form className="login-box flex flex-col gap-6 items-center w-1/3">
                <h2 className='text-3xl'>Signup</h2>
                <input type="text" className='focus:border-blue-500 text-lg w-full p-2 border-[1px] rounded-xl bg-transparent outline-none' placeholder='Enter your Name' onChange={(e)=>{setName(e.target.value)}}/>
                <input type="text" className='focus:border-blue-500 text-lg w-full p-2 border-[1px] rounded-xl bg-transparent outline-none' placeholder='Enter your Email' onChange={(e)=>{setEmail(e.target.value)}} />
                <input type="password" className='focus:border-blue-500 text-lg w-full p-2 border-[1px] rounded-xl bg-transparent outline-none' placeholder='Enter your password' onChange={(e)=>{setPassword(e.target.value)}} />
                <input type="password" className='focus:border-blue-500 text-lg w-full p-2 border-[1px] rounded-xl bg-transparent outline-none' placeholder='Confirm your password' onChange={(e)=>{setConfirmPassword(e.target.value)}} />
                {error && <div className='text-red-500'>{error}</div>}
                <button type='submit' className='bg-white hover:bg-blue-500 hover:text-white text-lg font-medium text-[#05101c] w-full py-2 rounded-md duration-200' onClick={handleSubmit} >Signup <IoIosLogIn className='inline' /></button>
            </form>
        </div>
    </div>
  )
}

export default Signup