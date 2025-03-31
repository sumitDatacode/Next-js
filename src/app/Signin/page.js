
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#1D1D2A] h-full w-full  flex justify-between'>
        <div className='relative top-50 left-50'>
            <div className='border'>
                  <h1 className='text-2xl tracking-wider font-[900] text-white'><span className='text-[#4A83F6]'>Book</span>Let<span class="w-2 h-2 ml- rounded-full bg-[#4A83F6] ml-0.5 inline-block"></span>

                  </h1>
                   <p className='absolute right-0'>by Datacode</p>
            </div>

             <div>
                 <h2>Login In To Get Inside</h2>

                 <form>
                    <label>Email</label>
                    <input type="email" />

                    <label>Password</label>
                    <input type="password" />
                 </form>
             </div>

        </div>

        <div>
           <img src="/images/Mask.png" alt="Mask" />
        </div>
    
    </div>
  )
}

export default page
