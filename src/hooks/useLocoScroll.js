"use client";

import { useEffect } from "react";

export default function useLocoScroll() {
  useEffect(() => {
    let scroll;

    const initializeScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      await import("locomotive-scroll/dist/locomotive-scroll.css");

      const scrollEl = document.querySelector("[data-scroll-container]");
      if (!scrollEl) return;

      // ছোট delay diye initialize
      setTimeout(() => {
        scroll = new LocomotiveScroll({
          el: scrollEl,
          smooth: true,
          multiplier: 1.2,
          lerp: 0.08,
          smartphone: { smooth: true },
          tablet: { smooth: true },
        });

        window.locomotiveScroll = scroll;

        // Proper update
        scroll.update();
        requestAnimationFrame(() => {
          scroll.update();
        });
      }, 100); // <-- ei delay khub important
    };

    initializeScroll();

    return () => {
      if (scroll) {
        scroll.destroy();
        window.locomotiveScroll = null;
      }
    };
  }, []);
}
