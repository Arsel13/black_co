import React from "react";
import { BiChalkboard } from "react-icons/bi";

export default function Statement() {
  return (
    <div className="grid md:grid-cols-2 w-4/5 md:w-3/5 m-auto ">
      <div className="text-center space-y-4 p-5 border-b-2 md:border-b-0 md:border-r-2 border-themeOrange">
        <BiChalkboard className="text-themeOrange m-auto" size={60} />
        <h1 className="text-themeOrange text-2xl">MISSION STATEMENT</h1>
        <p className="text-sm font-semibold">
          The mission of BLAC & CO is to be the most successful real estate firm
          in Emirates.
        </p>
        <p className="text-sm">
          BLAC & CO Real Estate incorporates proven, professional state
          of-the-art techniques specialising in the marketing, listing and
          selling of new and resale luxury homes & apartments
        </p>
      </div>
      <div className="text-center space-y-4 p-5">
        <BiChalkboard className="text-themeOrange m-auto" size={60} />
        <h1 className="text-themeOrange text-2xl">VISION STATEMENT</h1>
        <p className="text-sm">
          Our vision is simple, to adapt and evolve to continue to offer beyond
          expectation service and results, through creative thinking,
          leadership, initiative, respect and passion. Our customer centric
          focus and continued evaluation and development and planning of
          everything we do, ensures that our customer experiences a level of
          service
        </p>
      </div>
    </div>
  );
}
