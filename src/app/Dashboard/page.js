import React from 'react'
import Batman from '../../assets/images/batman.png'
import Image from 'next/image'
import Button from '@/components/Button'
const page = () => {
  return (
    <div className='border '>
        <div className='border relative w-[500px]'>
           <Image src={Batman}  alt="batman img" />
          <div className='absolute bottom-5 w-full'>
              <p className='text-sm'>Frank Miller</p>
              <div className='flex '>
                  <h3 className='text-2xl font-[700]'>Batman: <br/> <span className='whitespace-nowrap'>The Dark Knight</span> </h3>
                    
                    <Button/>
              </div>
          </div> 
         
        </div>
      
    </div>
  )
}

export default page
