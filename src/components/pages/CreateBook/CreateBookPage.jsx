import Logo from '@/components/Logo'
import React from 'react'
import Button from '@/components/Button'
const CreateBookPage = () => {
  return (
    <div className='flex justify-center items-center h-screen '>
      <div className='bg-[#363641] flex flex-col justify-center items-center h-[85vh] w-[500px] rounded-2xl '>
             <Logo/>

             <h2 className='m-4 text-2xl font-[500]'>Create a Book</h2>

             <form className='w-[70%]'> 
                    {/* <h1 className='mt-8 text-3xl text-center font-[500]'>{heading}</h1> */}
                        <br/>
                    <label className='text-sm'>Book Title</label> <br/>
                    <input type="text" className='border  h-10 mt-[4px] rounded-[8px] w-[100%]' />
                
                    <br/> <br/>
                    <label className='text-sm'>Book Auther</label> <br/>
                    <input type="text" className='border h-10 mt-[4px] rounded-[8px] w-[100%]' />
                    <br/> <br/>
                    <label className='text-sm'>No of chapters</label> <br/>
                    <input type="text" className='border h-10 mt-[4px] rounded-[8px] w-[100%]' />
                <div className='text-center mt-6'>
                <Button text="Create book"/>
                
                </div>
            </form>
      </div>
    </div>
  )
}

export default CreateBookPage
