import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { apiEndpoints } from '../utils/api';

const Chatcontrol = ({setChats}) => {

  const handleClearConversation=async ()=>{
    try{
      const response=await fetch(apiEndpoints.clearChats, {
        method: 'GET',
        credentials: 'include',
      })
      if(!response.ok){
        const error=await response.json();
        const errorMessage=error.error;
        throw new Error(errorMessage);
      }
      setChats([]);
    }catch(err){
      console.log(err.message);
    }
  }

  return (
    <div className='min-w-128 w-96 bg-[#0F1C24] rounded-xl p-3 flex flex-col gap-8 items-center'>
      <FaUserAlt className='text-4xl' />
      <div>You are talking to Chatbot</div>
      <div>Engage in a conversation with this chatbot by sharing your thoughts or asking questions. It's here to assist and chat with you in a friendly manner!</div>
      <button className='bg-red-400 hover:bg-red-600 px-4 py-1 rounded-lg w-full' onClick={handleClearConversation} >Clear Conversation</button>
    </div>
  )
}

export default Chatcontrol