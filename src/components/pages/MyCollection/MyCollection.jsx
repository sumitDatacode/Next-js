import React from 'react'
import Image from 'next/image'
import kobra from "@/assets/images/kobra.png"
import RightLoader from '@/components/RightLoader'



import img1 from "@/assets/images/comic1.png"
import img2 from "@/assets/images/comic2.png"
import img3 from "@/assets/images/comic3.png"
import img4 from "@/assets/images/comic4.png"

const MyCollection = () => {
   const completedRead = [
    {id:1, title:"Kobra Kai: Ultimate", date:"12 Feb 2025", img:kobra},
    {id:2, title:"Kobra Kai: Ultimate", date:"12 Feb 2025", img:kobra},
    {id:3, title:"Kobra Kai: Ultimate", date:"12 Feb 2025", img:kobra},
    ]

     const comics = [
    
        { "id": "1", 'title' : "The Flash, Vol. 1",   "name":"Joshua Williamson", "image": img1 },
        { "id": "2", 'title' : "Titans, Vol.2",       "name":"Andrew Robinson" , "image": img2 },
        { "id": "3", 'title' : "Harley Quinn, Vol 1", "name":"Jimmy Palmiotti" , "image": img3 },
        { "id": "4", 'title' : "Suicide Squad #8",    "name":"Tom Taylor" , "image": img4  }
      ]
        

   return (
  <div>  
   <div className='flex flex-wrap justify-between items-center' >
        <div className='bg-[#282837]  rounded-2xl w-[653px] p-10 pl-8'>
           <h2 className='text-3xl font-[700]'>Completed Read</h2>
           <div className='flex flex-wrap justify-between'>            {
              completedRead.map((book)=>{
                return (
                    <div key={book.id} className='flex flex-col mt-6 tracking-tight gap-1 items-center font-[700]'>
                            <Image src={book.img} className='w-[169px] h-[201px] rounded-2xl' alt={book.title}/>
                             <h2 className='text-center'>{book.title}</h2>  
                             <h2 className='text-[#4A83F6]'>{book.date}</h2>  
                    </div>
                )
              })
            }
            </div>

        </div>

        <div>
          <RightLoader heading="Continue Reading" bottomHeading="Kobra Kal: Ultimate"/>
        </div>

  </div> 

  {/* comics section  */}
    <div className='mt-10 mb-10'>
            <h2 className='text-2xl font-bold'>Todo Read</h2>

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

</div>
  )
}

export default MyCollection
