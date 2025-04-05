import React from 'react'
import RightLoader from '@/components/RightLoader'
const MyCollection = () => {
    const smallHeading = {
        title: 'Started:',
        time: '5 Days Ago'
      };
   
  return (
    
          
    <div >

        <div className='flex flex-wrap justify-between items-center'>

            <div className='w-[640px] '>
                <div className='text-7xl font-[700] text-justify'>
                    <h1>Batman:</h1>
                    <h1 className='whitespace-nowrap'>The Dark Knight</h1>
                    <p className='text-lg font-[400] mt-8'>A book description is a brief summary of a book's plot, characters, and themes. It helps readers get a sense of what the book is about. Book descriptions are often found on the back cover of the book, or on retailer websites. </p>
                </div>
                
            </div> 
            <div>
              <RightLoader heading="Book Progress" smallHeading={smallHeading} />
            </div>
            
         </div>
           
    </div>
  )
}

export default MyCollection
