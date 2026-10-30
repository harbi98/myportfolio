"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur transition-colors ${
        scrolled || open ? "border-line bg-bg/85" : "border-transparent bg-bg/0"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#top" className="font-mono text-lg font-semibold tracking-tight">
          harvey<span className="text-muted">.dev</span>
        </a>

        <ul className="hidden items-center gap-8 font-mono text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-muted transition-colors hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 h-px w-5 bg-fg transition-transform ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-fg transition-transform ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-line px-6 pb-6 font-mono md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-4 text-lg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
