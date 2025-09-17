"use client";

import useLocoScroll from "@/hooks/useLocoScroll";
import React, { use } from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  useLocoScroll();
  return (
    <div className="data-scroll-section">
      <nav className="sticky  text-white top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm  ">
        <div className="w-auto md:w-10/12 mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold">.C</div>
          <div className="hidden md:flex items-center space-x-12 text-sm font-[500]">
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
          <Button className="bg-white text-black hover:bg-gray-200">
            Connect
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
