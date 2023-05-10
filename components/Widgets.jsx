import React from "react";
import { BsCashCoin } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { AiOutlineLike } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";

const Widgets = ({ type }) => {
  let data;
  // revenue, transaction, likes, users
  switch (type) {
    case "revenue":
      data = {
        title: "Total Revenue",
        isMoney: true,
        number: "3,920",
        bg: "bg-green-200",
        icon: <BsCashCoin className="text-lg" />,
      };
      break;
    case "transaction":
      data = {
        title: "Total Transaction",
        isMoney: false,
        number: "2,400",
        bg: "bg-blue-200",
        icon: <GrTransaction className="text-lg" />,
      };
      break;
    case "likes":
      data = {
        title: "Total Likes",
        isMoney: false,
        number: "12,332",
        bg: "bg-red-200",
        icon: <AiOutlineLike className="text-lg" />,
      };
      break;
    case "users":
      data = {
        title: "Total Users",
        isMoney: false,
        number: "549",
        bg: "bg-yellow-200",
        icon: <FiUsers className="text-lg" />,
      };
      break;
    default:
      break;
  }

  return (
    <div
      className={`flex justify-between flex-1 p-7 md:p-3 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] ${data.bg} rounded-lg `}
    >
      <div className="flex flex-col justify-between gap-4">
        <span className="font-semibold text-sm text-black">{data.title}</span>
        <span>
          {data.isMoney && "$"}{" "}
          <span className="font-semibold text-lg">{data.number}</span>
        </span>
      </div>
      <div className="text-lg hidden md:block">{data.icon}</div>
    </div>
  );
};

export default Widgets;