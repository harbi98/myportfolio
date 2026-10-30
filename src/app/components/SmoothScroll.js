"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

const NAV_OFFSET = 80; // height of the sticky nav

// Lenis smooth scrolling, driven by GSAP's ticker so ScrollTrigger animations
// (like the typing bio) stay perfectly in sync with the smoothed scroll.
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    });

    // Smooth-scroll in-page links like #about, leaving room for the sticky nav.
    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href");
      const el = id === "#top" ? null : document.querySelector(id);
      if (id !== "#top" && !el) return;
      e.preventDefault();
      // compute the destination ourselves (Lenis' element mode double-counts offsets)
      const y = el ? el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET : 0;
      lenis.scrollTo(y);
      history.replaceState(null, "", id);
    };
    document.addEventListener("click", onClick);

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      document.removeEventListener("click", onClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
