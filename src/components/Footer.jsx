import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#282945]">
      <div className="w-3/5 m-auto text-center py-12">
        <div className="my-12">
          <img src="images/logo1.webp" alt="logo" className="m-auto" />
        </div>
        <div className="text-white space-y-3">
          <p className="text-2xl">BLAC & CO REAL ESTATE LLC DUBAI</p>
          <p className="text-sm">
            OFFICE # 2108, CONRAD BUSINESS TOWER, DUBAI, UNITED ARAB EMIRATES.
          </p>
          <p className="text-sm text-white text-opacity-60">
            COPYRIGHT © 2023 BLAC & CO REAL ESTATE LLC DUBAI - ALL RIGHTS
            RESERVED.
          </p>
        </div>
      </div>
    </div>
  );
}
