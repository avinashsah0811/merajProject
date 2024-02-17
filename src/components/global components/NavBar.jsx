import React from 'react'
import logo from '../../assets/images/png/logo-no-background.png'

const NavBar = () => {
  return (
    <div className='w-full h-20 bg-[#32289f] flex justify-between items-center px-8'>
        <div>
            <img src={logo} alt="" className='w-40' />
        </div>
        <div>
            <ul className='flex gap-4 text-2xl font-medium text-white'>
                <li className='cursor-pointer relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'>About Us</li>
                <li className='cursor-pointer relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'>Features</li>
                <li className='cursor-pointer relative after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300'>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar