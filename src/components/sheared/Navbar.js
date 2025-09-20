"use client";

import useLocoScroll from "@/hooks/useLocoScroll";
import React, { use } from "react";

const Navbar = () => {
  useLocoScroll();
  return (
    <div className="">
      <nav className="  text-white left-0 right-0  bg-black/80 sticky top-0 backdrop-blur-sm z-40  ">
        <div className="w-auto md:w-10/12 mx-auto px-6 py-6 flex items-center justify-between">
          <div className="text-2xl font-bold">.C</div>
          <div className="hidden md:flex items-center space-x-36 text-sm font-[500]">
            <a href="#you" className=" transition-colors">
              You
            </a>
            <a href="#clients" className=" transition-colors ">
              Clients
            </a>
            <a href="#us" className=" transition-colors">
              Us
            </a>
            <a href="#pricing" className=" transition-colors">
              Pricing
            </a>
          </div>
          <div className=" text-black bg-black/80 backdrop-blur-sm "></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
