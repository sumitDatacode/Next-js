
import React from 'react'

const page = () => {
  return (
    <div className='bg-[rgb(29,29,42)] h-full w-full items-center  flex justify-between'>
        <div className=' relative left-50 w-[400px] ' >
          
              <div className='text-center'>
                   <h1 className='text-[#4A83F6] text-2xl font-[900] tracking-wide '>Book<span className='text-white'>Let</span><span className='bg-[#4A83F6] inline-block w-1 h-1 ml-1'></span></h1>
                   <p className='ml-[26px]'>by DataCode</p>
              </div>

              <form>
                <h1 className='mt-8 text-3xl text-center'>Login In To Get Inside</h1>
                    <br/>
                <label className='text-sm'>Email</label> <br/>
                <input type="email" className='border h-10 mt-[4px] rounded-[8px] w-full' />
                 <br/> <br/>
                <label className='text-sm'>Password</label> <br/>
                <input type="password" className='border h-10 mt-[4px] rounded-[8px] w-full' />



                <button className='mt-10 bg-[#4A83F6] w-30 p-2 rounded-full ml-[40%] '>LogIn</button>
              </form>
        </div>


        <div >
          <img src="/images/Mask.png" className=' object-cover object-top h-[100vh] w-[50vw]'/>
        </div>
    </div>
  )
}

export default page
