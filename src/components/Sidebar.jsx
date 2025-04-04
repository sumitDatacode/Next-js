import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from './Logo';
import DashboardIcon from '../assets/images/Dashboard-icon.png'
import Bookmark from '../assets/images/bookmark.png'
import Collection from '../assets/images/collection.png'

const Sidebar = () => {
  return (
   <div className='flex'>
  
    <div className=' fixed  left-0 top-0 h-full  w-[400px] flex  border-r border-[#282837]  flex-col pt-[40px] items-start  '>
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



   
 </div> 
  )
}

export default Sidebar
