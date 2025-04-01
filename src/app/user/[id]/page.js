import React from 'react'

const page = ({ params }) => {
  return (
    <div className='text-black'>
        user is {params.id}
    </div>
  )
}

export default page
