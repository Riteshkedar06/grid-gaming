"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Achievements", href: "#achievements" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        "about",
        "services",
        "achievements",
        "pricing",
        "contact",
      ];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 
        flex items-center justify-between 
        px-6 md:px-16 py-4 
        transition-all duration-300
        ${scrolled ? "bg-black/90 backdrop-blur-lg border-b border-gray-800 py-3" : ""}
      `}
    >
      {/* LOGO */}
      <div className="font-[Orbitron] text-2xl font-black tracking-[4px] text-yellow-400 uppercase">
        GRID<span className="text-yellow-400">.</span>GG
      </div>

      {/* LINKS */}
      <ul
        className={`
          flex gap-10 
          md:static fixed inset-0 
          md:flex-row flex-col 
          items-center justify-center 
          bg-black/95 md:bg-transparent
          transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
        `}
      >
        {navLinks.map((l) => {
          const isActive = active === l.href.replace("#", "");

          return (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(l.href);
                }}
                className={`
                  relative text-sm font-semibold tracking-[2px] uppercase
                  ${isActive ? "text-yellow-400" : "text-gray-400 hover:text-yellow-400"}
                  
                  after:absolute after:left-0 after:bottom-0 
                  after:h-[1px] after:w-full 
                  after:bg-yellow-400 
                  after:scale-x-0 after:origin-left
                  after:transition-transform after:duration-300
                  
                  ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"}
                `}
              >
                {l.label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          handleClick("#contact");
        }}
        className="hidden md:inline-block bg-yellow-400 text-black px-6 py-2 text-xs font-bold tracking-[2px] uppercase hover:shadow-[0_0_20px_#facc15]"
      >
        Join Now
      </a>

      {/* HAMBURGER */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1 z-50"
      >
        <span
          className={`w-6 h-[2px] bg-yellow-400 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
        />
        <span
          className={`w-6 h-[2px] bg-yellow-400 ${menuOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`w-6 h-[2px] bg-yellow-400 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
        />
      </button>
    </nav>
  );
}
