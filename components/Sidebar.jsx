import React from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { AiFillSchedule } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="flex border-r-0.5 h-[90vh] text-white bg-black flex-col px-10 sm:px-3 rounded-xl md:justify-center md:items-center sm:justify-center sm:items-center">
      <div className="h-50 flex py-10">
        <Link href={"/"}>
          <span className=" text-3xl font-bold hidden lg:block">Board.</span>
        </Link>
      </div>

      <div>
        <ul className="flex flex-col gap-8 list-none m-0 p-0 cursor-pointer">
          <div className="">
            <li className="flex gap-2">
              <MdDashboard className="w-6 h-6" />
              <span className="hidden lg:block">Dashboard</span>
            </li>
          </div>
          <div>
            <li className="flex gap-2">
              <AiOutlineTransaction className="w-6 h-6" />
              <span className="hidden lg:block">Transactions</span>
            </li>
          </div>
          <div>
            <li className="flex gap-2">
              <AiFillSchedule className="w-6 h-6" />
              <span className="hidden lg:block">Schedules</span>
            </li>
          </div>
          <div>
            <li className="flex gap-2">
              <BiUserCircle className="w-6 h-6" />
              <span className="hidden lg:block">Users</span>
            </li>
          </div>
          <div>
            <li className="flex gap-2">
              <AiFillSetting className="w-6 h-6" />
              <span className="hidden lg:block">Settings</span>
            </li>
          </div>
        </ul>
      </div>
      <div className=" flex-1"></div>
      <div className="flex flex-col pb-10 gap-5">
        <div className="hidden lg:block">Help</div>
        <div className="hidden lg:block">Contact Us</div>
      </div>
    </div>
  );
};

export default Sidebar;