import Batman from '@/assets/images/batman.png'
import Image from 'next/image'
import Button from '@/components/Button'


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
  
    <div className='relative w-[640px]'>
           <Image src={Batman}  alt="batman img" className='rounded-lg' />
          <div className='absolute bottom-25 w-full'>
              <p className='pl-5 text-lg'>Frank Miller</p>
              <div className='flex  justify-between items-center pl-5 pr-5'>
                  <h3 className='text-4xl w-[150px] font-[700] '>Batman: <span className='whitespace-nowrap'>The Dark Knight</span> </h3>
                  <Button/>
              </div>
          </div> 
            
    </div>
     



    {/* comics section  */}
    <div>
            <h2 className='text-2xl font-bold mt-10'>Top Rated Comics</h2>

            <div className='flex mt-10 justify-between w-[80%] '>
            {
                comics.map((comic, index)=>{
                    return (
                             <div key={index}>
                                    <Image src={comic.image} className='rounded-lg' alt={comic.title} />
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
