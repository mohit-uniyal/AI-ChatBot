import React from 'react'
import Header from '../components/Header'
import homeScreenImage from '../assests/home-screen-image.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='h-screen flex flex-col'>
        <Header></Header>
        <div className='grow flex justify-between items-center px-20'>
          <img src={homeScreenImage} alt="" className='w-5/12 animate-pulse' />
          <div className='w-5/12'>
            <div className='text-8xl'>Your Own</div>
            <div className='text-5xl'>ChatGenius</div>
            <br />
            <Link to='/chat' className='bg-white hover:bg-blue-500 hover:text-white font-medium text-2xl text-[#05101c] py-0.5 px-5 rounded-2xl duration-200' >Try Now</Link>
          </div>
        </div>
    </div>
  )
}

export default Home