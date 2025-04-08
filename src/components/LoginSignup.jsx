import React from 'react'
import Button from '@/components/Button';
import Image from 'next/image';
import Logo from './Logo';
import Form from './Form';
const LoginSignup = ({heading , img}) => {
  return (
    <div className='bgcolor h-full w-full items-center  flex justify-between'>
    <div className='relative w-[40vw] items-center flex flex-col  m-auto' >
      
          <div className='text-center'>
               <Logo/>
          </div>

         <Form heading={heading}/>
    </div>


    <div >
      <Image src={img} alt="Image" className=' object-cover object-top h-[100vh] w-[50vw]'/>
    </div>
</div>
  )
}

export default LoginSignup
