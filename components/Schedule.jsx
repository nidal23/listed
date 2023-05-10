import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const Schedule = () => {
  return (
    <div className="flex flex-col lg:w-[45%] h-90  md:ml-7 relative  m-auto p-6 border rounded-xl bg-white gap-2 md:w-[50%]">
      <div className="flex justify-center items-center py-2">
        <div className="flex-1 font-bold text-xl text-left">
          <h2>Today's Schedule</h2>
        </div>
        <div>
          <div className="text-gray-300 text-xs flex gap-1">
            See All{" "}
            <AiOutlineRight className="h-3 w-3 text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
      {/* schedules */}
      <div className="border-l-4 border-green-600">
        <div className="flex flex-col p-2">
          <div>
            <h2>Meeting with suppliers from Kuta Bali</h2>
          </div>
          <div className="text-gray-400">14:00 - 15:00</div>
          <div className="text-gray-400">at Sunset Road, Kuta, Bali</div>
        </div>
      </div>
      <div className="border-l-4 border-purple-600">
        <div className="flex flex-col p-2">
          <div>
            <h2>Meeting with suppliers from Kuta Bali</h2>
          </div>
          <div className="text-gray-400">14:00 - 15:00</div>
          <div className="text-gray-400">at Sunset Road, Kuta, Bali</div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
