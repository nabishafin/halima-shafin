"use client";

import { motion } from "framer-motion";
import useLocoScroll from "@/hooks/useLocoScroll";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import customer1 from "../../../public/customer-1.avif";

export function RatingSection() {
  useLocoScroll(); // Locomotive scroll enable

  // Sample user avatars - replace with real user images if available
  const userAvatars = [customer1, customer1, customer1, customer1];

  return (
    <div className="data-scroll-section">
      <section className="w-full md:w-10/12 mx-auto rounded-2xl shadow-lg p-8 bg-white my-20">
        {/* Large Rating Display */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-baseline justify-start gap-1 mb-60">
            <span className="text-7xl font-extrabold text-gray-900">5</span>
            <span className="text-3xl text-gray-500 font-bold">/5</span>
          </div>
        </motion.div>

        {/* User Avatars and Rating Info */}
        <motion.div
          className="flex items-center justify-start gap-4 mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* User Avatars */}
          <div className="flex -space-x-2">
            {userAvatars.map((avatar, index) => (
              <motion.div
                key={index}
                className="relative w-12 h-12"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src={avatar}
                  alt={`User ${index + 1}`}
                  fill
                  className="rounded-full border-2 border-white shadow-sm object-cover"
                />
              </motion.div>
            ))}

            {/* Count Badge */}
            <motion.div
              className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center text-xs font-semibold border-2 border-white shadow-sm"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              4700+
            </motion.div>
          </div>

          {/* Rating Stars and Text */}
          <motion.div
            className="flex flex-col items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-xs text-gray-600">
              Trusted by{" "}
              <span className="font-semibold">clients worldwide</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Google Rating Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Button
            className="bg-black hover:bg-black text-white py-3 px-8 rounded-xl font-medium w-full"
            size="lg"
          >
            Google rating
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
