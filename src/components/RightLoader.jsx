import React from 'react'
import Image from 'next/image'
import kobra from "@/assets/images/kobra.png"
const RightLoader = () => {
  return (
    <div>
    <h2 className='text-3xl font-bold '>Continue Reading</h2>
    <Image src={kobra} className='rounded-2xl mt-8 mb-5 w-[245px]' alt="kobra img" />
     <h2 className='text-2xl font-bold text-center'>Kobra Kal: Ultimate</h2>
           
</div>
  )
}

export default RightLoader
