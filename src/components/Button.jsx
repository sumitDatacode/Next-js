import React from 'react'

const Button = (props) => {
  return (
    <button type='submit' className="btn cursor-pointer font-[700] mt-4 text-lg ">{props.text}</button>
  )
}

export default Button
