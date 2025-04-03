import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProfileImg from '../assets/images/profile.png'

import { FaSearch, FaBell } from "react-icons/fa";

const TopNavbar = () => {
  return (
    <div className='flex h-15   mt-[40px] justify-between '>
        <div className=' h-12 w-[644px]  relative '>
            <input type="text"  name="" className='border pl-7 rounded-[12px] w-full h-full' id="" />
            <FaSearch className='absolute top-1/2 text-xl  right-3 transform -translate-y-[50%]'/>
          </div>

        <div className='flex  items-center gap-10' >
          <FaBell className='text-xl'/>
          <Image src={ProfileImg} alt="Profile img"/>
        </div>

    </div>
   
  )
}

export default TopNavbar
