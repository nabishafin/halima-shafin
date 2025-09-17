"use client";

import { motion } from "framer-motion";
import useLocoScroll from "@/hooks/useLocoScroll";
import { CirclePlus } from "lucide-react";

export function ContentSection() {
  useLocoScroll(); // Optional

  return (
    <div className="data-scroll-section">
      <section className="flex items-center justify-center px-6 py-20 ">
        <div className="w-full md:w-10/12 mx-auto text-center">
          {/* Top indicator */}
          <motion.div
            className="flex items-center justify-start gap-2 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="">
              <CirclePlus className="w-6 h-6 text-black" />
            </div>
            <span className="text-2xl font-[600] text-[#686868">
              We've met you before
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-3xl md:text-4xl lg:text-6xl font-[700] text-balance leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-black">You've got the ability,</span>{" "}
            <span className="text-[#686868]">
              but your Content isn't reflecting your brilliance.
            </span>
          </motion.h1>
        </div>
      </section>
    </div>
  );
}
