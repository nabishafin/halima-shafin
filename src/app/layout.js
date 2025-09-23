"use client";

import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/sheared/Navbar";
import { Footer } from "@/components/sheared/Footer";
import useLocoScroll from "@/hooks/useLocoScroll";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

export default function RootLayout({ children }) {
  useLocoScroll();

  return (
    <html lang="en" className={lato.variable}>
      <head>{/* meta, links, etc. */}</head>
      <body className={lato.className}>
        <Navbar />
        <div data-scroll-container>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
