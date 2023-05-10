import React from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { AiFillSchedule } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div className="flex border-r-0.5 h-screen text-white bg-black flex-col px-10 rounded-xl">
      <div className="h-50 flex py-10">
        <Link href={"/"}>
          <span className=" text-3xl font-bold">Board.</span>
        </Link>
      </div>

      <div>
        <ul className="flex flex-col gap-8 list-none m-0 p-0 cursor-pointer">
          <div className="">
            <li className="flex gap-2">
              <MdDashboard className="w-6 h-6" />
              <span>Dashboard</span>
            </li>
          </div>
          <div>
            <li className="flex gap-2">
              <AiOutlineTransaction className="w-6 h-6" />
              <span>Transactions</span>
            </li>
          </div>
          <div>
            <li className="flex gap-2">
              <AiFillSchedule className="w-6 h-6" />
              <span>Schedules</span>
            </li>
          </div>
          <div>
            <li className="flex gap-2">
              <BiUserCircle className="w-6 h-6" />
              <span>Users</span>
            </li>
          </div>
          <div>
            <li className="flex gap-2">
              <AiFillSetting className="w-6 h-6" />
              <span>Settings</span>
            </li>
          </div>
        </ul>
      </div>
      <div className=" flex-1"></div>
      <div className="flex flex-col pb-10 gap-5">
        <div>Help</div>
        <div>Contact Us</div>
      </div>
    </div>
  );
};

export default Sidebar;