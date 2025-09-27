"use client";

import { motion } from "framer-motion";
import useLocoScroll from "@/hooks/useLocoScroll";
import Image from "next/image";
import { useState } from "react";

import customer1 from "../../../public/customer-1.jpg";
import customer2 from "../../../public/customer-2.jpg";
import customer3 from "../../../public/customer-3.jpg";
import customer4 from "../../../public/customer-4.jpg";
import customer5 from "../../../public/customer-5.jpg";
import customer6 from "../../../public/customer-6.jpg";

import custologo1 from "../../../public/custo-logo-1.png";
import custologo2 from "../../../public/custo-logo-2.avif";
import custologo3 from "../../../public/custo-logo-3.png";
import custologo4 from "../../../public/custo-logo-4.avif";
import custologo5 from "../../../public/custo-logo-5.avif";
import custologo6 from "../../../public/custo-logo-6.png";

export function ClientsSection() {
  useLocoScroll(); // locomotive optional
  const [hoveredItem, setHoveredItem] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      name: "Bozoma St John",
      subtitle: "/Badass Workshop",
      image: customer1,
      logo: custologo1,
      dots: ["#FF6B9D", "#4ECDC4", "#45B7D1"],
    },
    {
      id: 2,
      name: "Amanda DuPont - Lelive",
      subtitle: "/Lelive",
      image: customer2,
      logo: custologo2,
      dots: ["#FF8A65", "#66BB6A", "#AB47BC"],
    },
    {
      id: 3,
      name: "Bozoma St John",
      subtitle: "/Badass Workshop",
      image: customer3,
      logo: custologo3,
      dots: ["#FF6B9D", "#4ECDC4", "#45B7D1"],
    },
    {
      id: 4,
      name: "Amanda DuPont - Lelive",
      subtitle: "/Lelive",
      image: customer4,
      logo: custologo4,
      dots: ["#FF8A65", "#66BB6A", "#AB47BC"],
    },
    {
      id: 5,
      name: "Bozoma St John",
      subtitle: "/Badass Workshop",
      image: customer5,
      logo: custologo5,
      dots: ["#FF6B9D", "#4ECDC4", "#45B7D1"],
    },
    {
      id: 6,
      name: "Amanda DuPont - Lelive",
      subtitle: "/Lelive",
      image: customer6,
      logo: custologo6,
      dots: ["#FF8A65", "#66BB6A", "#AB47BC"],
    },
  ];

  return (
    <section id="clients" className="data-scroll-section py-0 md:py-10 px-4">
      <div className="w-full lg:w-11/12 mx-auto">
        {/* Title Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center mb-12">
          <div></div> {/* 1st column empty for spacing */}
          <motion.div
            className="col-span-2 flex justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-5xl md:text-[90px] lg:text-[120px] font-bold text-black leading-[1]">
              .Clients
            </h2>
          </motion.div>
          <motion.div
            className="lg:text-right px-0 md:ml-10 flex items-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-gray-500 text-sm max-w-sm lg:ml-auto font-bold leading-relaxed">
              From start ups to industry experts, we've helped over 470 leaders
              and companies show up online with clarity and quality.
            </p>
          </motion.div>
        </div>

        {/* Clients Grid */}
        <section>
          <div className="mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-4">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* Header */}
                  <div className="flex justify-between items-center bg-white px-4 py-4 mb-2 rounded-lg shadow-sm">
                    <div>
                      <h3 className="text-xl font-semibold text-black">
                        {item.name}
                        <span className="ml-2 text-gray-500 font-semibold text-sm">
                          {item.subtitle}
                        </span>
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      {item.dots.map((color, index) => (
                        <div
                          key={index}
                          className="w-3 h-3 rounded-full transition-all duration-300"
                          style={{
                            backgroundColor:
                              hoveredItem === item.id ? color : "#9CA3AF",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl aspect-[6/6] border-4 border-white">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={900} // Increased size
                      height={900} // Increased size
                      className={`w-full h-full object-cover object-[center_20%] transition-all duration-500 ease-out ${
                        hoveredItem === item.id
                          ? "scale-95 blur-sm"
                          : "scale-100 blur-0"
                      }`}
                    />

                    {/* Logo overlay */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
                        hoveredItem === item.id
                          ? "opacity-100 scale-125"
                          : "opacity-40 scale-100"
                      }`}
                    >
                      <Image
                        width={500}
                        height={600}
                        src={item.logo || "/placeholder.svg"}
                        alt={`${item.name} logo`}
                        className="max-w-[200px] max-h-[100px] object-contain filter brightness-0 invert"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
