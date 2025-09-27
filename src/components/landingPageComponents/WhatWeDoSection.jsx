"use client";

import useLocoScroll from "@/hooks/useLocoScroll";
import { motion } from "framer-motion";
import { CirclePlus } from "lucide-react";

// ✅ Dynamic import করা হলো
import bgImage from "../../../public/what-banner.png";

export function WhatWeDoSection() {
  useLocoScroll(); // optional for smooth scrolling

  const services = [
    "Re-define",
    "Re-design",
    "Re-present",
    "Re-scale",
    "Re-scale",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="us"
      className="relative text-white py-16 px-4 md:py-24 data-scroll-section bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage.src})` }} // ✅ dynamic image use
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative w-full lg:w-11/12 mx-auto">
        {/* Motion wrapper for content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Mobile View */}
          <div className="lg:hidden text-center space-y-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CirclePlus className="w-6 h-6 text-white" />
              <span className="text-lg font-semibold text-white">
                What we do
              </span>
            </div>

            <h2 className="text-3xl text-[#cfcfcf] font-bold leading-snug">
              From strategy to execution
              <br />
              tailored solutions across every brand touchpoint
            </h2>

            <div className="space-y-3 text-[#e0e0e0] text-md leading-relaxed">
              <p>
                At The Re: Initiative, we don’t just produce content — we build
                brand systems. Our model is designed for founders and companies
                who want more than visibility: they want presence, clarity, and
                growth.
              </p>
              <p>
                Every solution is bespoke, from a single campaign to a
                full-scale brand ecosystem. We align strategy, design,
                storytelling, and operations to ensure your brand shows up
                consistently, distinctively, and with intent.
              </p>
              <p>
                We close the gap between your brand’s vision and its execution,
                so your story is seen, heard, and remembered.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 w-full max-w-sm mx-auto">
              {services.map((service, index) => (
                <button
                  key={index}
                  className="bg-white text-black px-4 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors text-center"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch">
            <div className="col-span-2">
              <div className="flex items-center gap-2">
                <CirclePlus className="w-6 h-6 text-white" />
                <div className="text-2xl font-semibold text-white text-center">
                  What we do
                </div>
              </div>
            </div>

            <div className="col-span-7 space-y-8 lg:space-y-12">
              <h2 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold leading-tight">
                From strategy to execution
                <br />
                <span className="text-[#cfcfcf]">
                  tailored solutions across every brand touchpoint
                </span>
              </h2>

              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-[60%] space-y-4 md:space-y-4 text-[#e0e0e0] text-md md:text-base leading-relaxed">
                  <p>
                    At The Re: Initiative, we don’t just produce content — we
                    build brand systems. Our model is designed for founders and
                    companies who want more than visibility: they want presence,
                    clarity, and growth.
                  </p>
                  <p>
                    Every solution is bespoke, from a single campaign to a
                    full-scale brand ecosystem. We align strategy, design,
                    storytelling, and operations to ensure your brand shows up
                    consistently, distinctively, and with intent.
                  </p>
                  <p>
                    We close the gap between your brand’s vision and its
                    execution, so your story is seen, heard, and remembered.
                  </p>
                </div>

                <div className="lg:w-[20%]">
                  <div className="flex flex-col gap-3">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        className="bg-white text-black px-6 py-[7px] font-bold rounded-full text-sm hover:bg-gray-100 transition-colors text-center"
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-2 p-4 rounded-lg"></div>
            <div className="col-span-1 p-4 rounded-lg"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
