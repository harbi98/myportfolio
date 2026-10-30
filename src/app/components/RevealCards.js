"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Each direct child slides up into place as it scrolls into view.
// Cards that enter together (same row) are staggered left to right.
export default function RevealCards({ className = "", children }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(ref.current.children);
      gsap.set(cards, { y: 100, autoAlpha: 0 });

      ScrollTrigger.batch(cards, {
        start: "top 92%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.12,
            overwrite: true,
          }),
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
