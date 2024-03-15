import React from "react";

export default function Banner(props) {
  return (
    <div className="bg-banner -mt-20">
      <div className="grid w-11/12 md:w-1/2 m-auto">
        <div className="px-5 pt-64 pb-24 space-y-5">
          <div>
            <h3 className="text-white text-3xl">WE MAKE REAL ESTATE</h3>
            <h1 className="text-themeOrange text-6xl">
              <strong>A BREEZE !</strong>
            </h1>
          </div>
          <div>
            <button
              onClick={props.onclick}
              className="text-white border border-themeOrange px-6 py-3 cursor-pointer"
            >
              Our Services
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
