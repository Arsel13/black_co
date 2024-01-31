import React from "react";
import { BsTelephone } from "react-icons/bs";
import { IoMailUnreadOutline } from "react-icons/io5";

export default function Header() {
  return (
    <div className="relative z-50">
      <header className="grid grid-cols-2  w-11/12 md:w-3/5  m-auto p-2 md:p-5">
        <div className="flex items-center">
          <img className="w-44" src="/images/logo1.webp" alt="logo" />
        </div>
        <div className="flex items-center justify-end gap-10">
          <div className="flex gap-x-3">
            <div className="flex justify-center items-center h-10 w-10 border border-themeOrange rounded-fullest">
              <a href="tel:+97143827888"><BsTelephone className="text-themeOrange text-2xl" /></a>
            </div>
            <div className="hidden md:block">
              <p className="text-xs text-themeBlack2">24/7 Helpline</p>
              <a className="p-2" href="tel:+97143827888">+97143827888</a>
            </div>
          </div>
          <div className="flex gap-x-3">
            <div className="flex justify-center items-center h-10 w-10 border border-themeOrange rounded-fullest">
              <a className="p-2" href="mailto:info@blac-co.com"><IoMailUnreadOutline className="text-themeOrange text-2xl" /></a>
            </div>
            <div className="hidden md:block">
              <p className="text-xs text-themeBlack2">Email Support</p>
              <a href="mailto:info@blac-co.com">info@blac-co.com</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
