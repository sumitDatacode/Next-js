import React from 'react'
import Image from 'next/image'
import kobra from "@/assets/images/kobra.png"
const RightLoader = ({heading, smallHeading, bottomHeading}) => {
  return (
 
    <div>
    <h2 className='my-10 text-center text-2xl md:mt-0 font-bold '>{heading}</h2>
    {
       smallHeading ? (
        <small className='font-[700] text-sm  '>
            {smallHeading.title}
            <span className='text-[#4A83F6]'> {smallHeading.time}</span>
        </small>
        ) : <></>
        
    }
    <div className='relative'>
         <Image src={kobra} className='rounded-2xl mt-4 mb-5 w-full' alt="kobra img" />
         <div className='loader flex items-center justify-center absolute top-[50%] left-[50%] translate-[-50%] rounded-full w-[115px] h-[115px] border-[20px] border-t-[#4A83F6] border-l-[#4A83F6] '>
            <p className='text-[#4A83F6] text-2xl font-[700]'>39%</p> 
         </div>

    </div>
   

    {
           bottomHeading ? ( <h2 className='text-2xl font-bold text-left'>{bottomHeading}</h2>
           ) : <></>
    }
    </div>
  
  )
}

export default RightLoader
