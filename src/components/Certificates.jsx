import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Certificates() {
  return (
    <div className="w-4/5 md:w-3/5 m-auto py-4 md:py-12 space-y-5">
      <h1 className="text-3xl md:text-6xl font-bold text-center">
        Our Certificates
      </h1>
      <p className="text-center">
        <span className="text-themeOrange">Blac & Co </span>
        is commited becoming the brokrage of choice and peruses excellence.
      </p>
      <Swiper navigation={true} modules={[Navigation]} className="">
        <SwiperSlide className="h-[40vh] md:h-[70vh]">
          <div>
            <img src="/images/certificate1.webp" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[40vh] md:h-[70vh]">
          <div>
            <img src="/images/certificate2.webp" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
