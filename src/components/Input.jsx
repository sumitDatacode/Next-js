import React from 'react'

const Input = ({label, type}) => {
  return (
    <div className='mt-8'>
       <label className='text-sm'>{label}</label> <br/>
       <input type={type} className='border w-[100%] h-10 mt-[4px] rounded-[8px]' />
     
    </div>
  )
}

export default Input
