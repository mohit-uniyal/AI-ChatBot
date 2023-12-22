import React, { useEffect, useRef, useState } from 'react'
import { LuArrowUpSquare } from "react-icons/lu";
import { GiStarShuriken } from "react-icons/gi";
import Chatitem from './Chatitem';
  

const Chatbox = ({chats, setChats}) => {
  const scrollRef=useRef(null);
  const [prompt, setPrompt]=useState('');
  const [isLoading, setIsLoading]=useState(false);

  useEffect(()=>{
    scrollRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [chats]);

  const handlePromptSubmit=async ()=>{
    if(!prompt){
      return;
    }
    try{
      setIsLoading(true);
      const response=await fetch('http://localhost:4000/api/chat/getPromptAnswer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          prompt
        })
      })
      if(!response.ok){
        const error=await response.json();
        const errorMessage=error.error;
        throw new Error(errorMessage);
      }
      const data=await response.json();
      setChats(data);
      setPrompt('');
    }catch(err){
      console.log(err.message);
    }
    setIsLoading(false);
  }

  const handleKeyDown=async (e)=>{
    if(e.keyCode===13){
      if(isLoading){
        return;
      }
      await handlePromptSubmit();
    }
  }

  return (
    <div className='grow flex flex-col gap-2'>
        <div className="chat-area grow flex flex-col gap-3 overflow-y-auto">
            {chats.map((item)=>{
                return <Chatitem key={item.key} role={item.role} content={item.content} />
            })}
            <div ref={scrollRef} className='h-0 w-0'></div>
        </div>
        <div className='input-area border-white border rounded-md flex items-center'>
            <input type="textarea" value={prompt} className='p-3 bg-transparent focus:outline-none resize-none grow' placeholder='Enter a prompt...' onKeyDown={handleKeyDown} onChange={(e)=>{setPrompt(e.target.value)}} />
            <div className='px-3'>
                {!isLoading ? <LuArrowUpSquare className='text-3xl hover:cursor-pointer hover:text-gray-400' onClick={handlePromptSubmit} /> :
                <GiStarShuriken className='text-3xl animate-spin' />}
            </div>
        </div>
    </div>
  )
}

export default Chatbox