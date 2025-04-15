"use client"
import React from 'react'

const Input = ({label, type, name, onChange}) => {
  return (
    <div className='mt-8'>
       <label className='text-sm'>{label}</label> <br/>
       <input type={type} name={name} onChange={onChange} className='border w-[100%] h-10 mt-[4px] rounded-[8px]' />
     
    </div>
  )
}

export default Input
