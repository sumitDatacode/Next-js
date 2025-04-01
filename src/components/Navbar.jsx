import React from 'react';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className='text-2xl flex justify-between w-[90%] mt-6 m-auto' >
        <div>
          Logo
        </div>

         <div className='flex gap-10 text-lg'>
            <Link href="/">Home</Link>
            <Link href="/Book">Book</Link>
            <Link href="/CreateBook">CreateBook</Link>
            <Link href="/Dashboard">Dashboard</Link>
            <Link href="/Login">Login</Link>
            <Link href="/Signup">Signup</Link>
            <Link href="/MyCollection">My COllection</Link>
          </div> 
    </div>
  )
}

export default Navbar
