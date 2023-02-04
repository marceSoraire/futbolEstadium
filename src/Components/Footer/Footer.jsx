import React from 'react';
import { IoMailUnreadOutline } from "react-icons/io5";
import { BiCopyright } from "react-icons/bi";
import { BsFacebook, BsWhatsapp, BsInstagram } from 'react-icons/bs'


const Footer = () => {
  return (
    <div className='bg-gray-300 md:p-4 md:flex sm:justify-evenly'>
      <p className='hidden md:flex font-poppins text-lg text-center'><BiCopyright size={24} className='text-black' />CopyRight</p>
      <div className='hidden md:flex md:justify-between'>
        <p className='hidden md:flex font-poppins md:px-4 hover:text-yellow-900 cursor-pointer'><IoMailUnreadOutline size={24} className='mr-1 text-black' />Correo</p>
        <p className='hidden md:flex font-poppins md:px-4 hover:text-yellow-900 cursor-pointer'><BsWhatsapp size={24} className='mr-1 text-green-900' />what's app</p>
        <p className='hidden md:flex font-poppins md:px-4 hover:text-yellow-900 cursor-pointer'><BsInstagram size={24} className='mr-1 text-red-500' />Instragram</p>
        <p className='hidden md:flex font-poppins md:px-4 hover:text-yellow-900 cursor-pointer'><BsFacebook size={24} className='mr-1 text-blue-900' />Faceboock</p>
      </div>
      <div className='md:hidden mt-8 w-full p-8 flex justify-between'>
        <BsFacebook size={30} className='md:hidden hover:cursor-pointer text-blue-900' />
        <BsInstagram size={28} className='md:hidden hover:cursor-pointer text-red-500' />
        <BsWhatsapp size={28} className='md:hidden hover:cursor-pointer text-green-900' />
        <IoMailUnreadOutline size={30} className='md:hidden hover:cursor-pointer text-gray-900'/>
      </div>
      <p className='flex font-poppins justify-center text-lg text-center md:hidden'><BiCopyright size={24} className='text-black' />CopyRight</p>
    </div>
  )
}

export default Footer