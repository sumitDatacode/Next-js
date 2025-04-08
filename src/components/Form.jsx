import React from 'react'
import Button from './Button'
const Form = ({heading}) => {
  return (
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
  )
}

export default Form
