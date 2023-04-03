import React from "react";

import { BsFillPlayFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import HeroImage from '../assets/heroBackground.png';

const Hero = () => {
  return (
    <div className="w-full flex pl-0 pt-0 md:pl-40 md:pt-5">
      <div>
        <div className="flex flex-row gap-5 mt-[100px] ">
          <h1 className="text-6xl font-black text-[#FF7E00] ">Fast</h1>
          <h1 className="font-semibold text-2xl text-[#2F2F2F] ">
            Food <br /> Delivery
            <div className="w-[200px] h-[200px] ml-[30px] mt-[-180px] flex items-center justify-center relative ">
            <svg
              width="130"
              height="104"
              viewBox="0 0 130 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.11791 80.35C10.6151 94.798 36.0603 116.733 69.8636 88.8891M69.8636 88.8891C112.118 54.0841 70.3623 30.0933 45.1766 46.3154C19.9908 62.5374 40.8052 92.9181 69.8636 88.8891ZM69.8636 88.8891C81.6657 89.039 108.254 86.17 120.19 73.4949C135.11 57.651 127.5 21.4384 116 1.43842"
                stroke="#C4C4C4"
                stroke-opacity="0.7"
                stroke-width="3"
                stroke-dasharray="9 9"
              />
            </svg>

            <svg
              width="34"
              height="38"
              viewBox="0 0 34 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-4 right-8"
            >
              <path
                d="M1.44701 7.669C1.86968 0.953612 9.88936 -2.27188 14.844 2.28075L30.4583 16.628C34.7902 20.6084 33.4887 27.7458 28.0306 29.941L11.0844 36.7568C5.62637 38.952 -0.254531 34.7034 0.11501 28.8321L1.44701 7.669Z"
                fill="#C4C4C4"
                fill-opacity="0.7"
              />
            </svg>
          </div>
          </h1>
        </div>
          <p className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, aperiam.
          </p>

          <div className="flex flex-row items-center justify-start mt-5">
            <button className="p-3 w-[150px] m-2 bg-[#2F2F2F] text-white shadow-xl rounded-full">Order Now</button>
            <button className="flex items-center justify-center">
              <BsFillPlayFill className="w-[30px] h-[30px] mr-4 ml-4 bg-white rounded-full text-[10px] text-[#2F2F2F] "/>
              Watch Video
            </button>

          </div>
            <div className="flex flex-row mt-10 text-[#FEBB41] gap-1 ">
              <AiFillStar size={25}/>
              <AiFillStar size={25}/>
              <AiFillStar size={25}/>
              <AiFillStar size={25}/>
              <AiFillStar size={25}/>
            </div>
            <p className="font-semibold mt-2">5 star rating</p>
            <p className="mt-1">based on 1788 reviews</p>
      </div>
      <div>
        <img src={HeroImage} alt="hero background" className="w-[700px] h-[662px] " />
      </div>
    </div>
  );
};

export default Hero;
