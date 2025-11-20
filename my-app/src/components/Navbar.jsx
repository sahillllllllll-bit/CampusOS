import React, { useState } from 'react'
import { Menu, MoonStar, Sun, X } from 'lucide-react';

import '../index.css'

const Navbar = () => {
  const [dark, setdark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const togglemode = () => {
    setdark(!dark);
  };
  return (
    <div>
      <div className=' font-stack text-4xl flex gap-5 h-20 bg-white items-center w-screen fixed z-10 '  >
        <div className='flex justify-start ml-5 '>
          <div className='lobster text-xl h-10 flex items-center'>CAMPUS</div>
          <div className='anton text-blue-400'>OS</div>
        </div>
        <div className='flex lobster text-xl items-center w-full justify-center  '>
          <ul className={`md:flex md:gap-10 absolute md:static  w-full md:w-auto left-0 md:left-auto top-16 md:top-auto transition-all duration-300 ${
          isOpen ? "block" : "hidden" }`}>
            <li className='text-gray-400  hover:text-black'>Apps</li>
            <li className='text-gray-400  hover:text-black'>Community</li>
            <li className='text-gray-400  hover:text-black'>Pricing</li>
            <li className='text-gray-400  hover:text-black'>Contact</li>
            <li className='text-gray-400  hover:text-black'>Profile</li>


        <div className='flex lobster text-xl  gap-5  absolute right-24 '>
          <button className='hover:shadow pl-1.5 pt-0.6 pb-1 pr-1.5 rounded'>Sign in</button>
          <button className='bg-blue-400 pl-1.5 pt-0.6 pb-1 pr-1.5 rounded hover:bg-blue-800'>Try it free</button>

        </div>
        <div className='lobster text-xl mr-5 absolute right-3'>
          <button onClick={togglemode}>
            {dark ? <MoonStar /> : <Sun />}
          </button>
        </div>
          </ul>
        </div>
        <button
          className="md:hidden text-xl mr-5"
          onClick={toggleMenu}
        >
         {isOpen?<X />:<Menu/>}
        </button>

        
      </div>
    </div>
  )
}

export default Navbar;