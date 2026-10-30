"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

// Typewriter reveal bound to scroll: characters appear one at a time as the
// text scrolls through the viewport (and "un-type" when scrolling back up),
// with a blinking block cursor following the last typed character.
export default function RevealText({ as: Tag = "p", className = "", children }) {
  const wrapRef = useRef(null);
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useGSAP(
    () => {
      const wrap = wrapRef.current;
      const cursor = cursorRef.current;
      let idleTimer;

      // Keep the cursor solid while typing; blink again once scrolling pauses.
      const holdBlink = () => {
        cursor.style.animation = "none";
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => (cursor.style.animation = ""), 450);
      };

      const placeCursor = (chars, count) => {
        const box = wrap.getBoundingClientRect();
        const ref = chars[Math.max(count - 1, 0)];
        if (!ref) return;
        const r = ref.getBoundingClientRect();
        gsap.set(cursor, {
          x: (count === 0 ? r.left : r.right) - box.left,
          y: r.top - box.top + r.height * 0.1,
          height: r.height * 0.8,
          width: chars[0].getBoundingClientRect().width * 0.9, // monospace: one character wide
          autoAlpha: 1,
        });
      };

      const split = SplitText.create(textRef.current, {
        type: "words,chars", // words keep letters from breaking across lines
        autoSplit: true,
        onSplit: (self) => {
          const chars = self.chars;
          let typed = -1;
          gsap.set(chars, { autoAlpha: 0 });

          return gsap.to(
            {},
            {
              ease: "none",
              scrollTrigger: {
                trigger: wrap,
                start: "top 80%",
                end: "bottom 45%",
                scrub: true,
                onUpdate: (st) => {
                  const count = Math.round(st.progress * chars.length);
                  if (count === typed) return;
                  chars.forEach((c, i) => {
                    c.style.visibility = i < count ? "inherit" : "hidden";
                    c.style.opacity = i < count ? 1 : 0;
                  });
                  typed = count;
                  placeCursor(chars, count);
                  holdBlink();
                },
                onRefresh: (st) => {
                  typed = -1;
                  st.vars.onUpdate(st);
                },
              },
            }
          );
        },
      });

      return () => {
        clearTimeout(idleTimer);
        split.revert();
      };
    },
    { scope: wrapRef }
  );

  return (
    <div ref={wrapRef} className="relative">
      <Tag ref={textRef} className={className}>
        {children}
      </Tag>
      <span
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none invisible absolute top-0 left-0 animate-blink bg-fg"
      />
    </div>
  );
}
