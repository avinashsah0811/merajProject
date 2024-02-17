import React from 'react'
import FeatureDiv from '../global components/FeatureDiv'

const Features = () => {
  
  return (
    <div className='bg-[#32289f] w-full p-8'>
        <div>
            <h1 className='text-6xl font-semibold text-white flex justify-center'>Features</h1>
            <div className='featureList'>
              <FeatureDiv title={'Natural Language Processing (NLP)'} text={'NLP enables the AI to understand and generate human-like language. It can analyze text data, extract key information, and generate summaries.'} />
              <FeatureDiv title={'Machine Learning (ML)'} text={'ML algorithms allow the AI to learn from data and make predictions or decisions. It can recognize patterns, classify data, and improve its performance over time.'} />
              <FeatureDiv title={'Computer Vision'} text={'Computer vision enables the AI to interpret and understand visual information from images or videos. It can recognize objects, detect faces, and analyze scenes.'} />
            </div>
        </div>
    </div>
  )
}

export default Features