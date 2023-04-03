import React from "react";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import Image1 from "../assets/Image1.png";
import Image1_1 from "../assets/Image1_1.png";
import Image1_2 from "../assets/Image1_2.png";
import Image1_3 from "../assets/Image1_3.png";

const TrendFood = () => {
  return (
    <div className="w-full pl-0 pt-0 md:pl-40 md:pt-5">
      <div>
        <h2 className="font-extrabold text-4xl">Todays Trending Food</h2>
        <p className="mt-2">Peoples loves it most the past week...</p>
      </div>
      <div className="flex">
        <div className=" w-[475px] h-[491px] border-1 border-gray-500 mt-4">
          <img src={Image1} />
          <div className="w-full bg-white">
            <div className=" w-[99.79px] h-[87px] flex items-center justify-start mx-[12%] gap-5">
              <img src={Image1_1} alt="Image1.1" />
              <img src={Image1_2} alt="Image1.2" />
              <img src={Image1_3} alt="Image1.3" />
            </div>
          </div>
        </div>
        <div className="ml-10 mt-2">
          <h1 className="text-2xl font-extrabold">Basomoti Kacchi Biriyani</h1>
          <p className="text-[#FEBB41] mt-2 font-semibold text-xl">$1050</p>
          <div className="flex flex-row mt-10 text-black gap-1 ">
            <div className="flex gap-1">
              <AiFillStar size={25} />
              <AiFillStar size={25} />
              <AiFillStar size={25} />
              <AiFillStar size={25} />
              <AiFillStar size={25} />
            </div>
            <div className="ml-8">
              <p>
                5.0 out of (1256){" "}
                <a href="#" className="text-[#382274] font-semibold ">
                  Reviews
                </a>
              </p>
            </div>
          </div>

          <div className="mt-72">
            <p className="text-xl font-semibold">Select Quantity</p>
            <div className="flex items-center gap-3">
              <div className=" w-[24px] h-[20px] border-2 flex items-center justify-center mt-2 border-gray-400 ">
                <p className="text-[12px] text-gray-400 ">0.5</p>
              </div>
              <div className=" w-[24px] h-[20px] border-2 flex items-center justify-center mt-2 border-gray-400 ">
                <p className="text-[12px] text-gray-400 ">1</p>
              </div>
              <div className=" w-[24px] h-[20px] border-2 flex items-center justify-center mt-2 border-black ">
                <p className="text-[12px] text-gray-400 ">2</p>
              </div>
              <div className=" w-[24px] h-[20px] border-2 flex items-center justify-center mt-2 border-gray-400 ">
                <p className="text-[12px] text-gray-400 ">5</p>
              </div>
              <div className=" w-[24px] h-[20px] border-2 flex items-center justify-center mt-2 border-gray-400 ">
                <p className="text-[12px] text-gray-400 ">10</p>
              </div>
              <div className=" w-[24px] h-[20px] border-2 flex items-center justify-center mt-2 border-gray-400 ">
                <p className="text-[12px] text-gray-400 ">20</p>
              </div>
            </div>

            <div className="mt-5 border-2 border-gray-400 h-[87px] w-[625px] grid grid-cols-2 ">
              <div className="border-r-2 border-gray-400 flex justify-center items-center">
                <AiOutlineHeart className="text-[#EC2633] w-[53px] h-[34px] cursor-pointer" />
              </div>
              <div className="flex justify-center items-center">
                <AiOutlineShoppingCart className="text-[#FEBB41] w-[53px] h-[34px] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendFood;
