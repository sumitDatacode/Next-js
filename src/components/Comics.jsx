import React from 'react'

const Comics = ({Heading}) => {
  return (
    <div className='mt-10 mb-10'>
    <h2 className='text-2xl font-bold'>Top Rated Comics</h2>

    <div className='flex flex-wrap gap-6 justify-between w-[90%] '>
    {
        comics.map((comic, index)=>{
            return (
                     <div key={index} className='mt-10'>
                            <Image src={comic.image} className='rounded-2xl' alt={comic.title} />
                            <h2 className='text-[#4A83F6]  mt-1 font-[700] mb-1'>{comic.title}</h2>
                            <h2>{comic.name}</h2>
                      </div>
                       
               
            )
        })
    }
     </div>


 </div>
  )
}

export default Comics
