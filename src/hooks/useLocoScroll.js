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

      scroll.update();
    })();

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
}
