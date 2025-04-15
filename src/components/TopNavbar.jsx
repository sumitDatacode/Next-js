"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProfileImg from '../assets/images/profile.png'

import { FaSearch, FaBell } from "react-icons/fa";
import Logo from './Logo';

const TopNavbar = () => {
  const [profileView , setProfileView] = useState(false);
  const [menuStatus, setMenuStatus] = useState(false)
  const profilecheck = () =>{
    if (!profileView) {
      setProfileView(true);
    } else {
      setProfileView(false);
    }
  }


  return (
   <div className='flex h-15  gap-x-10 mt-[40px] mb-5  justify-between '>
        <div className=' h-12 w-[644px]  relative z-30'>
            <input type="text"  name="" className='border pl-7 rounded-[12px] w-full h-full' id="" />
            <FaSearch className='absolute cursor-pointer top-1/2 text-xl  right-3 transform -translate-y-[50%]'/>
          </div>

        <div className='flex  items-center gap-5 md:gap-10 ' >
          <FaBell className=' text-[60px] cursor-pointer sm:text-3xl  md:text-[20px] object-contain'/>
          <div className='relative'>
             <Image src={ProfileImg} alt="Profile img"   className="cursor-pointer   object-contain w-50 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15"
  onClick={profilecheck}/>

             {
                profileView && (
                        <div className=' absolute z-50 text-lg  bg-[#4b4b4b] right-0 top-18 rounded-2xl w-[250px] h-[250px]'>
                              <h1 className='p-6 border-b font-[600]'>Akshay Mandliya</h1>
                              <div className='pl-6 pt-3 pr-6 flex justify-between'>
                                  <p className='font-[400]'>Status</p>
                                  <p className='text-[#7DEF0B] font-[700]'>Active</p>
                              </div>
                          </div>
                )
             }
             
          </div>
        </div>

    </div>
     
 
  )
}

export default TopNavbar
