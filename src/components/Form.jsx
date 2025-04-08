import React from 'react'
import Button from './Button'
import Input from './Input'
const Form = ({heading}) => {
  return (
    <form  className='w-[70%]'>
    <h1 className='m-8 text-3xl text-center font-[500]'>{heading}</h1>
        
    <Input type="email" label="Email"/>
     
     <Input type="password" label="Password"/>
     
     
     <div className='text-center mt-6'>
       <Button text="Log in"/>
     </div>
  </form>
  )
}

export default Form
