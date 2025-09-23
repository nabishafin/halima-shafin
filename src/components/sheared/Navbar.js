"use client";

import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full z-50">
      <nav className="bg-black/80 backdrop-blur-sm text-white">
        <div className="mx-auto w-auto md:w-10/12 px-6 py-6 flex items-center relative">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={120}
              height={60}
              priority
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-16 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
            <a href="#you" className="hover:text-gray-300 transition-colors">
              You
            </a>
            <a
              href="#clients"
              className="hover:text-gray-300 transition-colors"
            >
              Clients
            </a>
            <a href="#us" className="hover:text-gray-300 transition-colors">
              Us
            </a>
            <a
              href="#pricing"
              className="hover:text-gray-300 transition-colors"
            >
              Pricing
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 ml-auto"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-black/90 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-4 space-y-4">
            <a
              href="#you"
              className="block text-sm font-medium hover:text-gray-300 transition-colors py-2"
              onClick={closeMobileMenu}
            >
              You
            </a>
            <a
              href="#clients"
              className="block text-sm font-medium hover:text-gray-300 transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Clients
            </a>
            <a
              href="#us"
              className="block text-sm font-medium hover:text-gray-300 transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Us
            </a>
            <a
              href="#pricing"
              className="block text-sm font-medium hover:text-gray-300 transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Pricing
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
