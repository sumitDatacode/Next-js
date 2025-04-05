import Batman from '@/assets/images/batman.png'
import Image from 'next/image'
import Button from '@/components/Button'
import RightLoader from '@/components/RightLoader'

import img1 from "@/assets/images/comic1.png"
import img2 from "@/assets/images/comic2.png"
import img3 from "@/assets/images/comic3.png"
import img4 from "@/assets/images/comic4.png"

const DashboardPage = () => {


  const comics = [

    { "id": "1", 'title' : "The Flash, Vol. 1",   "name":"Joshua Williamson", "image": img1 },
    { "id": "2", 'title' : "Titans, Vol.2",       "name":"Andrew Robinson" , "image": img2 },
    { "id": "3", 'title' : "Harley Quinn, Vol 1", "name":"Jimmy Palmiotti" , "image": img3 },
    { "id": "4", 'title' : "Suicide Squad #8",    "name":"Tom Taylor" , "image": img4  }
  ]
    
  




  return (
  <div>
      <div className='flex flex-wrap justify-between items-center'>

           <div className='relative w-[640px]'>
                  <Image src={Batman}  alt="batman img" className='rounded-2xl ' />
                  <div className='absolute bottom-5 md:bottom-20 w-full'>
                      <p className='pl-7 text-lg'>Frank Miller</p>
                      <div className='flex flex-wrap justify-between items-end pl-7 pr-7'>
                          <h3 className='text-4xl w-full md:w-[150px] font-[700]'>Batman: <span className='whitespace-nowrap'>The Dark Knight</span> </h3>
                          <Button text="Read More"/>
                      </div>
                  </div> 
                    
            </div>

           <RightLoader/>
     
       </div>


    {/* comics section  */}
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

  </div>
  )
}

export default DashboardPage
