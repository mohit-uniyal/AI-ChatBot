import React from 'react'
import Header from '../components/Header'
import { BiError } from "react-icons/bi";

const Notfound = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Header></Header>
      <div className='grow flex flex-col justify-center items-center'>
        <BiError className='text-6xl animate-bounce' />
        <div className='text-3xl'>Not Found</div>
      </div>
    </div>
  )
}

export default Notfound