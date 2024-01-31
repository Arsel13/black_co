import React from "react";

export default function About() {
  return (
    <div className="grid md:grid-cols-2 items-center w-11/12 md:w-3/5 m-auto py-4 md:py-12 ">
      <div className="space-y-3 md:space-y-10 p-4">
        <h1 className="text-themeOrange text-3xl md:text-6xl">About Us</h1>
        <p className="font-semibold text-xl">
          <span className="text-themeOrange">BLAC & CO</span> &nbsp; is the
          brightest and sprightly growing Real estate Brokerage Company in
          Emirates.
        </p>
        <p className="text-sm">
          <span className="text-themeOrange">BLAC & CO</span>  is committed becoming the brokerage of choice and peruses
          excellence through dedication and experience. Our Real estate
          management, our services ensure that our customers re- ceive a fair
          service with a reasonable time fr.
        </p>
      </div>
      <div className="p-4 flex justify-center">
        <img src="/images/about.webp" alt="about" width={300} />
      </div>
    </div>
  );
}
