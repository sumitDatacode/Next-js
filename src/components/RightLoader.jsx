import React from 'react'
import Image from 'next/image'
import kobra from "@/assets/images/kobra.png"
const RightLoader = ({heading, smallHeading, bottomHeading}) => {
  return (
    <div>
 
    <h2 className='text-3xl font-bold '>{heading}</h2>
    {
       smallHeading ? (
        <small className='font-[700] text-sm mt-4'>
            {smallHeading.title}
            <span className='text-[#4A83F6]'> {smallHeading.time}</span>
        </small>
        ) : <></>
        
    }
    <Image src={kobra} className='rounded-2xl mt-4 mb-5 w-[245px]' alt="kobra img" />
    {
           bottomHeading ? ( <h2 className='text-2xl font-bold text-center'>{bottomHeading}</h2>
           ) : <></>
    }
     </div>       

  )
}

export default RightLoader
