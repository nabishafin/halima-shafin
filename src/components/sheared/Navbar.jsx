"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [locomotiveScroll, setLocomotiveScroll] = useState(null);

  useEffect(() => {
    // Locomotive Scroll instance পাওয়ার জন্য
    const checkForScroll = () => {
      if (window.locomotiveScroll) {
        setLocomotiveScroll(window.locomotiveScroll);
      }
    };

    // Locomotive Scroll load হওয়ার জন্য অপেক্ষা করি
    const interval = setInterval(() => {
      checkForScroll();
      if (window.locomotiveScroll) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Updated scroll function for Locomotive Scroll
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section && locomotiveScroll) {
      // Locomotive Scroll এর scrollTo method ব্যবহার করি
      locomotiveScroll.scrollTo(section, {
        offset: -100, // navbar height এর জন্য offset
        duration: 1000,
        easing: [0.25, 0.0, 0.35, 1.0],
      });
    } else if (section) {
      // Fallback: যদি Locomotive Scroll available না থাকে
      const yOffset = -100;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full z-[9999] bg-black/80 backdrop-blur-sm">
      <nav className="text-white">
        <div className="mx-auto w-auto md:w-10/12 px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Video Logo */}
            <div className="text-3xl font-bold flex-shrink-0 ">
              <div className="flex gap-1 items-center justify-center">
                <div className="border-3 px-1 ">Re:</div>
                <div>interactive</div>
              </div>
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center space-x-32 text-xl font-semibold">
              <button
                className="hover:text-gray-300 transition-colors cursor-pointer"
                onClick={() => scrollToSection("#you")}
              >
                You
              </button>
              <button
                className="hover:text-gray-300 transition-colors cursor-pointer"
                onClick={() => scrollToSection("#clients")}
              >
                Clients
              </button>
              <button
                className="hover:text-gray-300 transition-colors cursor-pointer"
                onClick={() => scrollToSection("#us")}
              >
                Us
              </button>
              <button
                className="hover:text-gray-300 transition-colors cursor-pointer"
                onClick={() => scrollToSection("#pricing")}
              >
                Pricing
              </button>
            </div>

            {/* Right side spacer for balance (desktop only) */}
            <div className="hidden md:block flex-shrink-0 w-[120px]"></div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
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
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-black/90 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-4 space-y-4">
            <button
              className="block text-sm font-medium hover:text-gray-300 transition-colors py-2 w-full text-left"
              onClick={() => {
                closeMobileMenu();
                scrollToSection("#you");
              }}
            >
              You
            </button>
            <button
              className="block text-sm font-medium hover:text-gray-300 transition-colors py-2 w-full text-left"
              onClick={() => {
                closeMobileMenu();
                scrollToSection("#clients");
              }}
            >
              Clients
            </button>
            <button
              className="block text-sm font-medium hover:text-gray-300 transition-colors py-2 w-full text-left"
              onClick={() => {
                closeMobileMenu();
                scrollToSection("#us");
              }}
            >
              Us
            </button>
            <button
              className="block text-sm font-medium hover:text-gray-300 transition-colors py-2 w-full text-left"
              onClick={() => {
                closeMobileMenu();
                scrollToSection("#pricing");
              }}
            >
              Pricing
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
