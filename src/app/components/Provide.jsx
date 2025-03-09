import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const Provide = () => {
  return (
    <div>
      <div className="py-5 px-4">
        <div className="flex flex-col md:flex-row justify-between gap-2">
          {/* 1st section */}
          <div className="flex justify-center items-center w-[100%] mx-auto">
            <div className="flex justify-center items-center mx-auto">
              <Image
                src="/provide.svg"
                width={250}
                height={250}
                alt="Provide "
              />
            </div>
          </div>
          {/* 2nd section */}
          <div className="w-[100%]">
            <h2 className="text-2xl font-bold">
              We Provide Many <br />
              Features You Can Use
            </h2>
            <p className="w-[100%] md:w-[60%] text-gray-600">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>

            <ul className="space-y-2 pt-2">
              <li className="flex items-center gap-2 "> <p className="h-4 w-4 text-xs flex justify-center items-center text-white bg-green-500 rounded-full"><FaCheck /></p>  Powerfull online protection.</li>
              <li className="flex items-center gap-2 "> <p className="h-4 w-4 text-xs flex justify-center items-center text-white bg-green-500 rounded-full"><FaCheck /></p>  Internet without borders.</li>
              <li className="flex items-center gap-2 "> <p className="h-4 w-4 text-xs flex justify-center items-center text-white bg-green-500 rounded-full"><FaCheck /></p>  Supercharged VPN</li>
              <li className="flex items-center gap-2 "> <p className="h-4 w-4 text-xs flex justify-center items-center text-white bg-green-500 rounded-full"><FaCheck /></p>  No specific time limits.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
