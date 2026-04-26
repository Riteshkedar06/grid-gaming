"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { num: "500+", label: "Happy Gamers" },
  { num: "20+", label: "Games Available" },
  { num: "3", label: "Gaming Setups" },
  { num: "5★", label: "Google Rating" },
];

const testimonials = [
  {
    text: "We had a blast playing WWE on PS5! It was full of laughs, fights, and nonstop fun ",
    initials: "SM",
    name: "Soham Mothe.",
    role: "Regular Player",
  },
  {
    text: "Grid Gaming is the best gaming parlour in Navi Mumbai. I often come here to play fifa and Mortal kombat. The ambience and gaming experience is best in the locality and even the staff is very friendly. My favourite go to place for gaming.",
    initials: "AK",
    name: "Alakh Singh.",
    role: "Regular Player",
  },
  {
    text: "Clean setup, great staff, and zero lag gaming. Definitely my go-to place now.",
    initials: "PD",
    name: "Pratik D.",
    role: "Weekend Gamer",
  },
];

export default function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative bg-[#020408] py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-[0_0_10px_#facc15]" />

      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <p className="text-[10px] tracking-[4px] text-yellow-400 uppercase mb-3">
          {"// By the numbers"}
        </p>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12">
          Why Gamers Love Us
        </h2>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 border border-yellow-400/10 mb-16">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center p-8 border border-yellow-400/10 hover:bg-yellow-400/5 transition"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className={`
                  text-3xl md:text-4xl font-extrabold text-yellow-400 mb-2
                  transition-all duration-700
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
              >
                {s.num}
              </div>

              <p className="text-xs tracking-[2px] uppercase text-gray-400">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* TESTIMONIALS */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-[#06080f] border border-yellow-400/10 p-6 hover:border-yellow-400/40 hover:-translate-y-1 transition"
            >
              {/* Quote */}
              <div className="absolute text-5xl text-yellow-400/20 top-2 left-4">
                "
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6 pt-6">
                {t.text}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-xs font-bold">
                  {t.initials}
                </div>

                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
