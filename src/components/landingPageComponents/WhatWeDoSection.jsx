"use client";

import useLocoScroll from "@/hooks/useLocoScroll";
import { motion } from "framer-motion";
import { CirclePlus } from "lucide-react";

// ✅ Dynamic import করা হলো
import bgImage from "../../../public/what-banner.png";

export function WhatWeDoSection() {
  useLocoScroll(); // optional for smooth scrolling

  const services = [
    "Shorts",
    "Campaigns",
    "Podcasts",
    "Event reels",
    "Corporate",
    "More",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="relative  text-white py-16 px-4 md:py-24 data-scroll-section bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage.src})` }} // ✅ dynamic image use
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 "></div>

      <div className="relative w-full md:w-10/12 mx-auto">
        {/* Motion wrapper for content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* তোমার বাকি content একই থাকলো */}
          <div className="lg:hidden text-center space-y-6">
            <div className="flex items-center justify-start gap-2 mb-4">
              <CirclePlus className="w-4 h-4 text-white" />
              <span className="text-md font-[600] text-white">What we do</span>
            </div>

            <h2 className="text-3xl text-[#cfcfcf] font-bold leading-snug">
              Think uber <br />
              and amazon. <br />
              <span className="text-white">but for .Content</span>
            </h2>

            <div className="space-y-2 text-[#e0e0e0] text-md leading-relaxed">
              <p>
                Created to address a clear need: providing strategy-led content
                creation for busy entrepreneurs and innovative companies who
                understand the importance of content but lack the time to
                produce it themselves.
              </p>
              <p>
                Our productized model merges the on-demand convenience of Uber
                with the streamlined efficiency of Amazon, delivering
                high-quality, platform-ready content at scale.
              </p>
              <p>
                We close the gap between your brand vision and content
                execution, ensuring you stay visible and relevant.
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

          {/* Desktop view */}
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
              <h2 className="text-4xl text-[#cfcfcf] md:text-5xl lg:text-6xl font-bold leading-tight">
                Think uber
                <br />
                and amazon.
                <br />
                <span className="text-white">but for .Content</span>
              </h2>

              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-[60%] space-y-4 md:space-y-4 text-[#e0e0e0] text-md md:text-base leading-relaxed">
                  <p>
                    Created to address a clear need: providing strategy-led
                    content creation for busy entrepreneurs and innovative
                    companies who understand the importance of content but lack
                    the time to produce it themselves.
                  </p>
                  <p>
                    Our productized model merges the on-demand convenience of
                    Uber with the streamlined efficiency of Amazon, delivering
                    high-quality, platform-ready content at scale.
                  </p>
                  <p>
                    We close the gap between your brand vision and content
                    execution, ensuring you stay visible and relevant.
                  </p>
                </div>

                <div className="lg:w-[20%]">
                  <div className="flex flex-col gap-3">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        className="bg-white text-black px-6 py-[7px] rounded-full text-sm font-medium hover:bg-gray-100 transition-colors text-center"
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
