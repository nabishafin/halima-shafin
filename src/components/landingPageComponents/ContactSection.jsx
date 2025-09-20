"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import useLocoScroll from "@/hooks/useLocoScroll";

export function ContactSection() {
  useLocoScroll();

  // Framer Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative overflow-hidden ">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/main-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full md:w-11/12 lg:w-10/12 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[90vh]">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-3xl p-12 shadow-2xl max-w-xl mx-auto lg:mx-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">
              Can't find what you want?
            </h2>

            <form className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 mb-3"
                >
                  Your name*
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Full name"
                  className="w-full py-4 px-4 text-lg"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900 mb-3"
                >
                  E-mail*
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  className="w-full py-4 px-4 text-lg"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900 mb-3"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="w-full min-h-[160px] resize-none py-4 px-4 text-lg"
                  rows={6}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white py-6 rounded-full text-lg font-semibold"
              >
                Send Message
              </Button>
            </form>

            <p className="text-sm text-gray-500 mt-6 text-center">
              By submitting, you agree to our{" "}
              <a href="#" className="underline hover:text-gray-700">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="underline hover:text-gray-700">
                Privacy Policy
              </a>
              .
            </p>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="text-white space-y-16 lg:space-y-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div>
              <h1 className="text-7xl lg:text-8xl font-extrabold leading-tight mb-8">
                Let's talk.
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-300">
                Tell us about your project, whether it's a vlog, documentary, or
                a TikTok short.
              </p>
            </div>

            <div className="space-y-10">
              {/* Quick Response */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Quick response.
                  </h3>
                  <p className="text-gray-300 text-lg">
                    If you're ready to create and collaborate, we'd love to hear
                    from you.
                  </p>
                </div>
              </div>

              {/* Clear Next Steps */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Clear next steps.
                  </h3>
                  <p className="text-gray-300 text-lg">
                    After your discovery call, we'll provide you with a detailed
                    plan and timeline.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
