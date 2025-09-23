"use client";

import { useEffect } from "react";

export default function useLocoScroll() {
  useEffect(() => {
    let scroll;

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      await import("locomotive-scroll/dist/locomotive-scroll.css");

      const scrollEl = document.querySelector("[data-scroll-container]");
      if (!scrollEl) return;

      scroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1.2,
        lerp: 0.08,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      });

      // Global access এর জন্য window object এ store করি
      window.locomotiveScroll = scroll;

      scroll.update();

      // Page load হওয়ার পর scroll update করি
      setTimeout(() => {
        scroll.update();
      }, 100);
    })();

    return () => {
      if (scroll) {
        scroll.destroy();
        window.locomotiveScroll = null;
      }
    };
  }, []);
}
