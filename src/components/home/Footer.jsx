import React from 'react'
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='w-full px-8 py-4 bg-slate-600 text-white'>
        <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
                <p>All rights reserved</p>
                <MdOutlineCopyright />
                <p>AviTech {currentYear}</p>
            </div>
            <div>
                <p>Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer