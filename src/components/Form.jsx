"use client"
import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'
const Form = ({heading}) => {
 const [formdata, setFormData] = useState()


 const inputCHange = (e) =>{
     const {name, value} = e.target
       
     setFormData((prev)=> ({
      ...prev,
       [name]:value
     }))
 }




 const formSubmit = (e) =>{
  e.preventDefault();
  
  if (!formdata || !formdata.email || !formdata.password) {
    alert("Please fill in all the fields.");
    return;
  }

  console.log('formsubmitted', formdata)
 }    


  return (
    <form  className='w-[70%]' onSubmit={formSubmit}>
    <h1 className='m-8 text-3xl text-center font-[500]'>{heading}</h1>
        
    <Input type="email" name="email" label="Email" onChange={inputCHange} />
    <Input type="password" name="password" label="Password" onChange={inputCHange} />
     
     <div className='text-center mt-6'>
       <Button text="Log in"/>
     </div>
  </form>
  )
}

export default Form
