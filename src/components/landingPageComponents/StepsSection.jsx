"use client";

import { motion } from "framer-motion";
import useLocoScroll from "@/hooks/useLocoScroll";

export function StepsSection() {
  useLocoScroll();

  const steps = [
    {
      number: "01",
      title: "Re-define",
      text: "Clarity is strategy. We align your brand’s story, structure, and positioning so it speaks with intent.",
      activeDots: 1,
    },
    {
      number: "02",
      title: "Re-design",
      text: "From product to packaging, every detail is meticulously tailored — turning vision into assets that endure.",
      activeDots: 2,
    },
    {
      number: "03",
      title: "Re-present",
      text: "Visibility with precision. We translate your brand story into campaigns, content, and storytelling that cut through the noise.",
      activeDots: 3,
    },
    {
      number: "04",
      title: "Re-scale",
      text: "Growth with clarity. We design marketing and partnerships that transform visibility into market position and market position into measurable growth.",
      activeDots: 4,
    },
    {
      number: "05",
      title: "Re-structure",
      text: "Growth demands structure. We design the operations, systems, and workflows that let your business scale without breaking.",
      activeDots: 5,
    },
  ];

  return (
    <section id="you" className="px-4">
      <div className="w-auto lg:w-11/12 mx-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
 gap-2"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-3 sm:p-5 rounded-xl text-left hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              {/* Number and dots in a row */}
              <div className="flex justify-between items-center mb-4">
                {/* Step number */}
                <div className="text-lg sm:text-xl font-semibold text-[#686868]">
                  {step.number}
                </div>

                {/* Dots indicator */}
                <div className="flex gap-1 sm:gap-2">
                  {Array.from({ length: 5 }).map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full ${
                        dotIndex < step.activeDots
                          ? "bg-[#686868]"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step title */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#686868] mb-2">
                {step.title}
              </h3>

              {/* Step text */}
              <p className="text-sm sm:text-base md:text-base leading-relaxed font-medium text-[#686868]">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
