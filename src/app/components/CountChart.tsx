"use client";
import React from "react";
import { dataCountChart } from "../constant";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Image from "next/image";

const CountChart = () => {
  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };
  return (
    <div className="bg-white rounded-xl full h-full p-4">
      {/* title */}
      <div className=""></div>
      {/* end of title */}
      <h1 className="text-lg font-semi-bold">Students</h1>
      <Image alt="more dark" src="/moreDark.png" width={20} height={20} />
      {/* chart */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer className="w-full h-[75%]">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={dataCountChart}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="uv"
            />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
        alt="male female comparison"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src="/maleFemale.png"
          width={50}
          height={50}
        />
      </div>
      {/* end of chart */}

      {/* bottom */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-6 bg-skyBg rounded-full" />
          <h1 className="font-bold">1234</h1>
          <h2 className="text-xs text-gray">Male</h2>
        </div>

        <div className="flex flex-col gap-1">
          <div className="w-5 h-6 bg-skyBg rounded-full" />
          <h1 className="font-bold">1234</h1>
          <h2 className="text-xs text-gray">Female</h2>
        </div>
      </div>

      {/* end of bottom */}
    </div>
  );
};

export default CountChart;
