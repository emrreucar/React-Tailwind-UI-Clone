import React from 'react';

import Image2 from '../assets/Image2.png';
import Image3 from '../assets/Image3.png';

const Popular = () => {
  return (
    <div className='mt-[100px] w-full pl-0 pt-0 md:pl-40 md:pt-5'>
      <div>
        <h1 className='font-extrabold text-4xl'>Popular Items</h1>
        <p className='mt-5 text-gray-500 mb-8'>Most Ordered Items</p>
      </div>
      <div className='cards grid md:grid-cols-4 sm:grid-cols-2'>
        <img src={Image2} alt="Image2" className='mb-8 w-[250px] h-[437px] ' />
        <img src={Image3} alt="Image3" className='mb-8 w-[250px] h-[437px] '/>
        <img src={Image2} alt="Image2" className='mb-8 w-[250px] h-[437px] '/>
        <img src={Image3} alt="Image3" className='mb-8 w-[250px] h-[437px] '/>
        <img src={Image2} alt="Image2" className='mb-8 w-[250px] h-[437px] '/>
        <img src={Image3} alt="Image3" className='mb-8 w-[250px] h-[437px] '/>
        <img src={Image2} alt="Image2" className='mb-8 w-[250px] h-[437px] '/>
        <img src={Image3} alt="Image3" className='mb-8 w-[250px] h-[437px] '/>
      </div>
    </div>
  )
}

export default Popular