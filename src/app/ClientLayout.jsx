"use client";

import useLocoScroll from "@/hooks/useLocoScroll";
import Navbar from "@/components/sheared/Navbar";
import { Footer } from "@/components/sheared/Footer";
import FixedButton from "@/components/landingPageComponents/FixedButton";

export default function ClientLayout({ children }) {
  useLocoScroll();

  return (
    <div id="app">
      <Navbar />
      {/* Entire scrollable content including footer */}
      <main data-scroll-container>
        {children}
        <Footer />
      </main>

      {/* Floating button stays outside scroll */}
      <FixedButton />
    </div>
  );
}
