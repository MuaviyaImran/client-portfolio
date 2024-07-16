import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { personalData } from '../dataStore.js';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'About',href:'#about' },
    { id: 2, text: 'Experience',href:'#experience' },
    { id: 3, text: 'Skills',href:'#skills' },
    { id: 4, text: 'Projects',href:'#projects' },
    { id: 5, text: 'Education',href:'#education' },
    // { id: 6, text: 'Blogs',href:'#blogs' },
    { id: 6, text: 'Contact Me',href:'#contactMe' },
  ];

  return (
    <div className='bg-transparent flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white uppercase'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>{personalData.name}</h1>

      <ul className='hidden lg:flex gap-3'>
        {navItems.map(item => (
          <li
            key={item.id}
          >
            <a className='whitespace-nowrap cursor-pointer duration-300 hover:text-pink-600 text-sm transition-colors' href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>


      <div onClick={handleNav} className='block lg:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed lg:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>{personalData.name}</h1>

        {navItems.map(item => (
          <li
            key={item.id}
          >
            <a href={item.href} className='p-4 duration-300 hover:text-pink-600 cursor-pointer border-gray-600 text-sm transition-colors'>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;