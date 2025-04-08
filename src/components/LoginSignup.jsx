import React from 'react'
import Button from '@/components/Button';
import Image from 'next/image';
import Logo from './Logo';
const LoginSignup = ({heading , img}) => {
  return (
    <div className='bgcolor h-full w-full items-center  flex justify-between'>
    <div className=' relative border w-[35vw] items-center flex flex-col  m-auto' >
      
          <div className='text-center'>
               <Logo/>
          </div>

          <form  className='w-[70%]'>
            <h1 className='m-8 text-3xl text-center font-[500]'>{heading}</h1>
                
            <label className='text-sm'>Email</label> <br/>
            <input type="email" className='border w-[100%] h-10 mt-[4px] rounded-[8px]' />
             <br/> <br/>
            <label className='text-sm'>Password</label> <br/>
            <input type="password" className='border w-[100%] h-10 mt-[4px] rounded-[8px]' />
         
           <div className='text-center mt-6'>
           <Button text="Log in"/>
         
           </div>
          </form>
    </div>


    <div >
      <Image src={img} alt="Image" className=' object-cover object-top h-[100vh] w-[50vw]'/>
    </div>
</div>
  )
}

export default LoginSignup
