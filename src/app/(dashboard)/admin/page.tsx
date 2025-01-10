"use client";
import React from "react";
import UserCard from "@/app/components/UserCard";
import CountChart from "@/app/components/CountChart";
import AttendantChart from "@/app/components/AttendantChart";
import FinanceChart from "@/app/components/FinanceChart";
const Adminpage = () => {
  return (
    <div className="p-4 flex gap-4  flex-col md:flex-row">
      {/* left side */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        Left
        {/* to avoid the overflow or shrinked of this component, we have to use flex-wrap */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard typeRole="student" age="2" />
          <UserCard typeRole="teacher" age="2" />
          <UserCard typeRole="parent" age="2" />
          <UserCard typeRole="staff" age="2" />
        </div>
        {/* middle chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* attendance chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendantChart />
          </div>
        </div>
        {/* end of middle chart */}
        {/* bottom chaert */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* right side */}
      <div className="w-full lg:w-1/3">Right</div>
    </div>
  );
};

export default Adminpage;
