import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Chatbox from '../components/Chatbox'
import Chatcontrol from '../components/Chatcontrol'
import { apiEndpoints } from '../utils/api'

const Chat = () => {
  const [chats, setChats]=useState([]);
  useEffect(()=>{
    const getChats=async()=>{
      try{
        const response=await fetch(apiEndpoints.getChats, {
          method: 'GET',
          credentials: 'include'
        });
        if(!response.ok){
          const error=await response.json();
          const errorMessage=error.error;
          throw new Error(errorMessage);
        }
        const data=await response.json();
        setChats(data);
      }catch(err){
        console.log(err.message);
      }
    }
    getChats();
  }, []);

  return (
    <div className='h-screen'>
      <Header></Header>
      <div className='h-5/6 flex px-4 mt-3 gap-4'>
        <Chatcontrol setChats={setChats} />
        <Chatbox chats={chats} setChats={setChats} />
      </div>
    </div>
  )
}

export default Chat