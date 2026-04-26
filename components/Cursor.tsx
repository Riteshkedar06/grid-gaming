"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const ringPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
    };

    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.1;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.1;

      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + "px";
        ringRef.current.style.top = ringPos.current.y + "px";
      }

      requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = "translate(-50%, -50%) scale(2)";
      }
      if (ringRef.current) {
        ringRef.current.style.width = "56px";
        ringRef.current.style.height = "56px";
      }
    };

    const onLeave = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
      if (ringRef.current) {
        ringRef.current.style.width = "36px";
        ringRef.current.style.height = "36px";
      }
    };

    document.addEventListener("mousemove", onMove);

    const interactives = document.querySelectorAll("a, button, .interactive");

    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);

      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });

      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* DOT */}
      <div
        ref={dotRef}
        className="
          hidden md:block
          fixed w-2.5 h-2.5 
          bg-yellow-400 
          rounded-full 
          pointer-events-none 
          z-[9999] 
          -translate-x-1/2 -translate-y-1/2
          transition-transform duration-150
          shadow-[0_0_10px_#facc15,0_0_20px_#facc15]
        "
      />

      {/* RING */}
      <div
        ref={ringRef}
        className="
          hidden md:block
          fixed w-9 h-9 
          border border-yellow-400 
          rounded-full 
          pointer-events-none 
          z-[9998]
          -translate-x-1/2 -translate-y-1/2
          transition-all duration-200
          opacity-50
        "
      />
    </>
  );
}
