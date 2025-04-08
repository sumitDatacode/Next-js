"use client"
// import { useRouter } from "next/router";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';
import DashboardIcon from '../assets/images/Dashboard-icon.png'
import Bookmark from '../assets/images/bookmark.png'
import Collection from '../assets/images/collection.png'
import setting from '../assets/images/setting.png'
import logOut from '../assets/images/logout.png'
import { Menu, X } from 'lucide-react'; // Add hamburger icon from lucide-react (or use your own)

const Sidebar = () => {

    //  const router = useRouter()
    const [isOpen, setIsOpen] = useState(false);

     const navList = [
        {"href" : "/dashboard" , "text" : "Dashboard", "img": DashboardIcon},
        {"href" : "/mycollection" , "text" : "My Collection", "img": Collection},
        {"href" : "/favourite" , "text" : "Favourite", "img": Bookmark},
        {"href" : "/createbook" , "text" : "Create Book", "img": Bookmark}
     ]

     const bottomNavList = [
        {"href" : "/setting" , "text" : "Settings", "img": setting},
        {"href" : "/login" , "text" : "Log Out", "img": logOut},
       
     ]
  return (
   <div className='flex'>
  
    <div className='hidden md:flex fixed left-0 top-0 h-full  w-[350px]  border-r border-[#282837] justify-between flex-col pt-[40px] items-start  '>
     <div>
                <div className="pl-[50px]" >
                <Logo />
                </div>
            
                <div className='mt-[60px]'>

                {
                        navList.map((item)=>{
                            return (
                                <div key={item.href} className='flex gap-4  w-[18rem]  rounded-2xl  text-xl mt-3  p-3 pl-[50px]'>
                                    <Image src={item.img} className='object-contain' alt={item.text}/>
                                    <Link href={item.href}>{item.text} </Link>
                                </div>    
                            )
                        })
                    }

                </div>
     </div>
    

     <div className='w-[18rem] mb-3'>
        {
                bottomNavList.map((item)=>{
                    return (
                        <div key={item.href} className='flex gap-4 rounded-2xl   text-xl mt-1 p-2 pl-[50px]'>
                            <Image src={item.img} className='object-contain' alt={item.text}/>
                            <Link href={item.href}>{item.text} </Link>
                        </div>    
                    )
                })
            }
     </div>

            
    
 </div>



   
 </div> 
  )
}

export default Sidebar
