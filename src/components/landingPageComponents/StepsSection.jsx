"use client";

import { motion } from "framer-motion";
import useLocoScroll from "@/hooks/useLocoScroll";

export function StepsSection() {
  useLocoScroll();

  const steps = [
    {
      number: "01",
      activeDots: 1,
      text: "You've tried being consistent, but burnout or your schedule wins.",
    },
    {
      number: "02",
      activeDots: 2,
      text: "You have a vision but lack the creative clarity to make it reality.",
    },
    {
      number: "03",
      activeDots: 3,
      text: "You're overwhelmed with ever evolving social media trends.",
    },
    {
      number: "04",
      activeDots: 4,
      text: "You want a team capable of executing your vision with little to no supervision.",
    },
  ];

  return (
    <section className="px-4">
      <div className="w-auto md:w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-7 rounded-xl shadow-md border border-gray-100 text-left hover:shadow-lg transition-shadow duration-300"
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
              <div className="flex justify-between items-center mb-6">
                {/* Step number */}
                <div className="text-xl font-semibold text-gray-600">
                  {step.number}
                </div>

                {/* Dots indicator */}
                <div className="flex gap-2">
                  {Array.from({ length: 4 }).map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`w-3 h-3 rounded-full ${
                        dotIndex < step.activeDots
                          ? "bg-gray-600"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Step text - Made larger */}
              <p className="text-gray-900 text-lg leading-relaxed font-[500]">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
