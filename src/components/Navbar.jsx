import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProfileImg from '../assets/images/profile.png'
import Logo from './Logo';
import DashboardIcon from '../assets/images/Dashboard-icon.png'
import Bookmark from '../assets/images/bookmark.png'
import Collection from '../assets/images/collection.png'
import { FaSearch, FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex justify-between  h-full   m-auto'>
        <div className='flex  border-r border-gray-600 h-full flex-col pt-[40px] items-start  w-[400px]'>
           <div className="pl-[50px]" >
              <Logo />
           </div>
          
           <div className='flex gap-4 text-xl mt-[100px] p-4 pl-[50px] w-[300px]  rounded-3xl bg-[#4A83F6]'>
               <Image src={DashboardIcon} alt="Dashboard icon"/>
               <Link href="/Dashboard" >Dashboard</Link>
           </div>
           <div className='flex gap-4 text-xl mt-5 p-4 pl-[50px]'>
               <Image src={Collection} alt="Dashboard icon"/>
               <Link href="/Dashboard" >My Collection</Link>
           </div>
           <div className='flex gap-4 text-xl  mt-5 p-4 pl-[50px]'>
               <Image src={Bookmark} alt="Dashboard icon"/>
               <Link href="/Dashboard" >Favourite</Link>
           </div>
        </div>


       <div className='flex h-15  w-[80%] mt-[40px] justify-around '>
         <div className=' h-12 w-[644px] relative '>
            <input type="text"  name="" className='border pl-7 rounded-[12px] w-full h-full' id="" />
            <FaSearch className='absolute top-1/2 text-xl  right-3 transform -translate-y-[50%]'/>
          </div>

         <div className='flex  items-center gap-10' >
           <FaBell className='text-xl'/>
           <Image src={ProfileImg} alt="Profile img"/>
         </div>
        </div>
        
    </div>
  )
}

export default Navbar
