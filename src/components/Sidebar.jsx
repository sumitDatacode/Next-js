"use client"
// import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Logo';
import DashboardIcon from '../assets/images/Dashboard-icon.png'
import Bookmark from '../assets/images/bookmark.png'
import Collection from '../assets/images/collection.png'
import setting from '../assets/images/setting.png'
import logOut from '../assets/images/logout.png'

const Sidebar = () => {

    //  const router = useRouter()

     const navList = [
        {"href" : "/dashboard" , "text" : "Dashboard", "img": DashboardIcon},
        {"href" : "/mycollection" , "text" : "My Collection", "img": Collection},
        {"href" : "/favourite" , "text" : "Favourite", "img": Bookmark}
     ]

     const bottomNavList = [
        {"href" : "/setting" , "text" : "Settings", "img": setting},
        {"href" : "/logout" , "text" : "Log Out", "img": logOut},
       
     ]
  return (
   <div className='flex'>
  
    <div className=' fixed left-0 top-0 h-full  w-[350px] flex  border-r border-[#282837] justify-between flex-col pt-[40px] items-start  '>
     <div>
                <div className="pl-[50px]" >
                <Logo />
                </div>
            
                <div className='mt-[60px]'>

                {
                        navList.map((item)=>{
                            return (
                                <div key={item.href} className='flex gap-4  w-[18rem]  rounded-2xl  text-xl mt-2  p-3 pl-[50px]'>
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
