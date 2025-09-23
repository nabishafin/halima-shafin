"use client";

import useLocoScroll from "@/hooks/useLocoScroll";
import Navbar from "@/components/sheared/Navbar";
import { Footer } from "@/components/sheared/Footer";
import FixedButton from "@/components/landingPageComponents/FixedButton";

export default function ClientLayout({ children, lato }) {
  useLocoScroll();

  return (
    <body className={`${lato.variable} antialiased`}>
      <Navbar />
      <main data-scroll-container>{children}</main>
      <Footer />
      <FixedButton />
    </body>
  );
}
