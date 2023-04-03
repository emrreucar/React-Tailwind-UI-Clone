import React from "react";

import ShapeIcon from "../assets/ShapeIcon.png";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <section className="md:h-[582px] md:w-[1511px] bg-[#1E2833] mt-[146px] ">
    <div className="pl-0 pt-0 md:pl-40 md:pt-5">
      <div className="border-b-2 border-gray-700 mt-[63px] ">
        <img src={ShapeIcon} alt="icon" className="mb-10" />
      </div>

      <div className="grid md:grid-cols-2">
        <div className="left">
          <h1 className="text-white text-2xl mt-[45px] ">
            Subscribe to our <br /> newsletter
          </h1>
          <div className="flex">
            <input
              type="email"
              className="bg-transparent border-b-2 border-[#737B7D] focus:outline-none w-[303px] mt-10"
              placeholder="Email address"
            />
            <button className="w-[52px] h-[52px] rounded-[8px] text-[#5E4DCD] bg-[#FFD2DD] flex justify-center items-center mt-[20px] ">
              <MdOutlineKeyboardArrowRight size={25} />
            </button>
          </div>

          <div className="mt-[121px] text-white flex gap-10">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="right md:grid grid-cols-3 sm:grid-cols-2">
          <div>
            <h1 className="text-[#FFD2DD] mt-[45px]">Services</h1>
            <ul className="text-white mt-3">
              <li className="mb-4">Email Marketing</li>
              <li className="mb-4">Campaigns</li>
              <li className="mb-4">Branding</li>
              <li>Offline</li>
            </ul>
          </div>
          <div>
            <h1 className="text-[#FFD2DD] mt-[45px]">About</h1>
            <ul className="text-white mt-3">
              <li className="mb-4">Our Story</li>
              <li className="mb-4">Benefits</li>
              <li className="mb-4">Team</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h1 className="text-[#FFD2DD] mt-[45px]">Help</h1>
            <ul className="text-white mt-3">
              <li className="mb-4">FAQs</li>
              <li className="mb-4">Contact Us</li>
            </ul>
          </div>
          <div className="icons flex justify-end items-center mt-20 mr-[-370px] gap-6 text-white">
            <FaFacebookF size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
