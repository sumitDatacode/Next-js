import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import ProfileImg from '../assets/images/profile.png'
// import Logo from './Logo';
// import DashboardIcon from '../assets/images/Dashboard-icon.png'
// import Bookmark from '../assets/images/bookmark.png'
// import Collection from '../assets/images/collection.png'
// import { FaSearch, FaBell } from "react-icons/fa";
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';

const Navbar = () => {
  return (
    <div className='flex justify-between  h-full   m-auto'>
        <Sidebar/>

          <TopNavbar/>
 
    </div>
  )
}

export default Navbar
