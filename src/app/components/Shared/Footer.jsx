import React from "react";
import { SiMatternet } from "react-icons/si";
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-300">
      <div className="w-11/12 mx-auto py-20">

        <div className=" flex flex-col md:flex-row  justify-between gap-6">
          {/* 1st section */}
          <div className="flex flex-col justify-start items-center  gap-1 cursor-pointer">
            <div className="flex items-center gap-2  w-[70%] mr-auto pb-3">
            <div className="text-red-600">
              <SiMatternet />
            </div>
            <h1 className="text-xl font-bold ">
              Shadow<span className="font-bold">Net</span>
            </h1>
            </div>

            <p className="w-[70%] mr-auto">LaslesVPN is a private virtual network that has unique features and has high security.</p>

            {/* Social media */}
            <div className="mr-auto flex justify-between gap-2 py-2">
              {/* Facebook */}
              <div>
                <a href="#"> <p className="h-8 w-8 text-xl rounded-full bg-white text-black shadow-2xl flex justify-center items-center"><RiFacebookFill /></p> </a>
              </div>
              {/* Twitter */}
              <div>
                <a href="#"> <p className="h-8 w-8 text-xl rounded-full bg-white text-black shadow-2xl flex justify-center items-center"><FaTwitter /></p> </a>
              </div>
              {/* Instragram */}
              <div>
                <a href="#"> <p className="h-8 w-8 text-xl rounded-full bg-white text-black shadow-2xl flex justify-center items-center"><FaInstagram /></p> </a>
              </div>

            </div>

            <div className="mr-auto">
              <p>©2025 ShadowNet</p>
            </div>
          </div>
          {/* 2nd section */}
          <div className="">
            <div>
              <h2 className="text-xl font-bold pb-3">Product</h2>

              <ul className="flex flex-col gap-1">
                <li>Download</li>
                <li>Locations</li>
                <li>Server</li>
                <li>Countries</li>
              </ul>
            </div>
          </div>
          {/* 3rd section */}
          {/* <div></div> */}
          {/* 4th section */}
          <div>
            <h2 className="text-xl font-bold pb-3">Earn Money</h2>

            <ul className="flex flex-col gap-1">
              <li>Affiliate</li>
              <li>Become Partner</li>
            </ul>
          </div>


        </div>

      </div>
    </div>
  );
};

export default Footer;
