import Batman from '@/assets/images/batman.png'
import Image from 'next/image'
import Button from '@/components/Button'
import RightLoader from '@/components/RightLoader'
import Link from 'next/link'
import img1 from "@/assets/images/comic1.png"
import img2 from "@/assets/images/comic2.png"
import img3 from "@/assets/images/comic3.png"
import img4 from "@/assets/images/comic4.png"
import Comics from '@/components/Comics'

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
                      <p className='pl-4 md:pl-7 text-lg'>Frank Miller</p>
                      <div className='px-4  flex flex-wrap justify-between items-end md:px-7'>
                          <h3 className='text-3xl md:text-4xl w-full md:w-[150px] font-[700]'>Batman: <span className='whitespace-nowrap'>The Dark Knight</span> </h3>
                        <Link href="/book">  <Button text="Read More" /></Link>
                      </div>
                  </div> 
                    
            </div>
           <div className='flex justify-center  w-full md:w-auto'>
              <RightLoader heading="Continue Reading" bottomHeading="Kobra Kal: Ultimate"/>

            </div> 
     </div>
           

    {/* comics section  */}
    <Comics Heading="Top Rated Comics"/>

  </div>
  )
}

export default DashboardPage
