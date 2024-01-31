import React from "react";

export default function Team() {
  return (
    <div className="w-4/5 md:w-3/5 m-auto py-12">
      <h1 className="text-3xl md:text-6xl text-themeOrange text-center mb-16">OUR TEAM</h1>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
        <div className="flex gap-4">
          <div className="relative z-10 bg-white rounded-fullest">
            <img src="/images/team1.webp" alt="" className="h-[96px] w-[96px] object-contain rounded-fullest border-2 border-black" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">MUHAMMAD QASIM ZULFIQAR</p>
            <p className="bg-themeOrange -ml-6 pl-6 pr-5 text-white">FOUNDER & CEO</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="relative z-10 bg-white rounded-fullest">
            <img src="/images/team2.webp" alt="" className="h-24 w-24 object-contain rounded-fullest border-2 border-black" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">FAHAD SHAHBAZ</p>
            <p className="bg-[#282945] -ml-6 pl-6 pr-5 text-white">EXECUTIVE BOARD MEMBER</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="relative z-10 bg-white rounded-fullest">
            <img src="/images/team3.webp" alt="" className="h-24 w-24 object-contain rounded-fullest border-2 border-black" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">PRIYA VASWANI</p>
            <p className="bg-[#282945] -ml-6 pl-6 pr-5 text-white">SENIOR HR MANAGER</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="relative z-10 bg-white rounded-fullest">
            <img src="/images/team4.webp" alt="" className="h-24 w-24 object-contain rounded-fullest border-2 border-black" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">ZARAK SHEIKH</p>
            <p className="bg-[#282945] -ml-6 pl-6 pr-5 text-white">SENIOR PROPERTY CONSULTANT</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="relative z-10 bg-white rounded-fullest">
            <img src="/images/team5.webp" alt="" className="h-24 w-24 object-contain rounded-fullest border-2 border-black" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">SYEDA ALIZA</p>
            <p className="bg-[#282945] -ml-6 pl-6 pr-5 text-white">SENIOR INVESTMENT ADVISOR</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="relative z-10 bg-white rounded-fullest">
            <img src="/images/team6.webp" alt="" className="h-24 w-24 object-contain rounded-fullest border-2 border-black" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-bold">QUSAI ALHASSANI</p>
            <p className="bg-[#282945] -ml-6 pl-6 pr-5 text-white">SENIOR PROPERTY CONSULTANT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
