import React from "react";

import Image4 from '../assets/Image4.png';

const Contact = () => {
  return (
    <div className="w-full flex pl-0 pt-0 md:pl-40 md:pt-5">
      <div className="left">
        <div className="title mt-16">
          <h1 className="text-4xl font-extrabold">Contact Us</h1>
          <p className="mt-8 text-gray-500">
            Need an experienced and skilled hand with custom IT projects? <br />{" "}
            Fill out the form to get a free consulatation.
          </p>
        </div>
        <div className="inputs mt-10 flex flex-col">
          <input
            type="text"
            className="bg-transparent border-b-2 border-[#737B7D] focus:outline-none w-[548px] mb-10"
            placeholder="Your Company Name"
          />
          <input
            type="text"
            className="bg-transparent border-b-2 border-[#737B7D] focus:outline-none w-[548px] mb-10"
            placeholder="Nature of Business"
          />
          <div className="flex flex-row">
            <input
              type="text"
              className="bg-transparent border-b-2 border-[#737B7D] focus:outline-none w-[357px] mb-10"
              placeholder="Address"
            />

            <input
              type="text"
              className="bg-transparent border-b-2 border-[#737B7D] focus:outline-none w-[167px] ml-[24px] mb-10"
              placeholder="Postcode"
            />
            
          </div>
          <input
            type="text"
            className="bg-transparent border-b-2 border-[#737B7D] focus:outline-none w-[548px] mb-10"
            placeholder="Contact Name"
          />
          <input
            type="text"
            className="bg-transparent border-b-2 border-[#737B7D] focus:outline-none w-[548px] mb-10"
            placeholder="Contact Phone"
          />
          <input
            type="email"
            className="bg-transparent border-b-2 border-[#737B7D] focus:outline-none w-[548px] mb-10"
            placeholder="Contact Email"
          />
        </div>

        <div className="flex">
          <input type="checkbox" className="mr-2" /> 
          <p>I want to protect my data by signing an NDA</p>
        </div>

        <div className="mt-10">
          <button className="mx-auto w-[642px] h-[64px] p-[16px] bg-[#008F17] text-white ">SUBMIT</button>
        </div>
      </div>
      <div className="right mt-16 ml-[222px] ">
        <div className="infos">
          <h1 className="mb-5 font-semibold">Offices</h1>
          <p>United States</p>
          <p>500 5th Avenue Suite 400, NY 10110</p>
          <br />
          <p>United Kingdom</p>
          <p>High St, Bromley BR1 1DN</p>
           <br />
          <p>France</p>
          <p>80 avenue des Terroris de France, Paris</p>
          <br />
          <img src={Image4} alt="map" />
        </div>

      </div>
    </div>
  );
};

export default Contact;
