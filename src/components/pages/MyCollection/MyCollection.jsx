import React from 'react'
import Image from 'next/image'
import kobra from "@/assets/images/kobra.png"
import RightLoader from '@/components/RightLoader'
import Comics from '@/components/Comics'


const MyCollection = () => {
   const completedRead = [
    {id:1, title:"Kobra Kai: Ultimate", date:"12 Feb 2025", img:kobra},
    {id:2, title:"Kobra Kai: Ultimate", date:"12 Feb 2025", img:kobra},
    {id:3, title:"Kobra Kai: Ultimate", date:"12 Feb 2025", img:kobra},
    ]

    
        

   return (
  <div>  
   <div className='flex flex-wrap justify-between items-center' >
        <div className='bg-[#282837]  rounded-2xl w-[653px] p-10 pl-8'>
           <h2 className='text-2xl text-center md:text-3xl md:text-left font-[700]'>Completed Read</h2>
           <div className='flex flex-wrap  justify-between'>            {
              completedRead.map((book)=>{
                return (
                    <div key={book.id} className='flex flex-col  mt-7 m-auto tracking-tight gap-1 items-center font-[700]'>
                            <Image src={book.img} className='  w-[210px] h-[220px] md:w-[169px] md:h-[201px] rounded-2xl' alt={book.title}/>
                             <h2 className='text-center mt-1'>{book.title}</h2>  
                             <h2 className='text-[#4A83F6]'>{book.date}</h2>  
                    </div>
                )
              })
            }
            </div>

        </div>

        <div className='flex justify-center  w-full md:w-auto'> 
          <RightLoader heading="Continue Reading" bottomHeading="Kobra Kal: Ultimate"/>
        </div>

  </div> 

  {/* comics section  */}
 <Comics Heading="Todo Read"/>

</div>
  )
}

export default MyCollection
