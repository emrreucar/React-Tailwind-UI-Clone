import React from "react";

import { MdOutlineBakeryDining } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

import Logo from '../assets/logo.png'

const Navbar = () => {
  const links = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Menu",
    },
    {
      id: 3,
      name: "Contact",
    },
    {
      id: 4,
      name: "Shop",
    },
  ];

  return (
    <div className="w-full pl-0 pt-0 md:pl-40 md:pt-5">
      <div className="grid grid-cols-3">
        <div className="flex items-center justify-start">
          <img src={Logo} className="mr-1" />
          <p className="font-extrabold text-2xl ml-1">Foo</p>
        </div>
        <div>
          <ul className="flex items-center justify-start gap-10 ml-10 mt-2">
            {links.map((link) => (
              <li key={link.id} className="font-semibold cursor-pointer">
                {link.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-32">
          <div className="relative w-[200px] ">
            <AiOutlineSearch className="absolute top-[16px] left-[3px] text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search"
              className="rounded-xl mt-2 h-[36px] bg-[#FFF9F0] focus:outline-none text-black placeholder:pl-7 placeholder:text-black placeholder:font-semibold border-r-gray-800"
            />
            <FiShoppingCart className="absolute top-[17px] text-gray-500 right-[30px] " />
            <div className="rounded-full bg-red-500 w-[20px] h-[20px] text-[11px] flex items-center justify-center text-white absolute top-1 right-3 shadow-lg ">
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
