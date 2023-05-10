import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-50 flex items-center text-sm">
      <div className=" w-full p-5 flex items-center justify-between md:w-full">
        <div className="text-xl font-bold ">Dashboard</div>
        <div className="max-w-md mx-auto mr-3">
          <div className="relative flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <AiOutlineSearch className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className=" peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            />
          </div>
        </div>
        <div>
          <AiOutlineBell className="w-6 h-6 " />
        </div>
        <div className="px-4">
          <Image
            src="/profile1.jpg"
            className=" rounded-full"
            width={40}
            height={40}
            alt="profile picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
