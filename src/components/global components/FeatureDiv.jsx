import React from 'react'
import { MdMenuBook } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import { GiCyberEye } from "react-icons/gi";

const FeatureDiv = ({title, text}) => {
  let iconComponent;

  // Determine which icon to display based on the title
  switch (title) {
    case 'Natural Language Processing (NLP)':
      iconComponent = <MdMenuBook className='text-[50px] mr-8' />;
      break;
    case 'Machine Learning (ML)':
      iconComponent = <FaNetworkWired className='text-[50px] mr-8' />;
      break;
    case 'Computer Vision':
      iconComponent = <GiCyberEye className='text-[50px] mr-8' />;
      break;
    default:
      iconComponent = null;
  }
  return (
    <div className='bg-[#34c0e3] p-10 text-sm font-light rounded-[10px] hover:bg-[#ff004f] hover:translate-y-[-10px] text-[#fff] trans '>
      {iconComponent}
      <h2 className=' text-3xl font-medium mb-4'>{title}</h2>
      <p className='text-sm mb-5'>{text}</p>
      <a href="#">Learn more</a>
    </div>
  )
}

export default FeatureDiv