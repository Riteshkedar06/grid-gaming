"use client";

import Image from "next/image";

const features = [
  {
    icon: "🖥️",
    title: "High-End Gaming PCs",
    desc: "Experience ultra-smooth gameplay with powerful rigs, high refresh rate monitors, and zero lag performance.",
  },
  {
    icon: "🎮",
    title: "Wide Game Library",
    desc: "Play popular titles like BGMI, Valorant, FIFA, and more — solo or with friends in multiplayer mode.",
  },

  {
    icon: "💸",
    title: "Affordable Pricing",
    desc: "Enjoy premium gaming at budget-friendly prices with special offers and hourly packages.",
  },
  {
    icon: "🤝",
    title: "Friendly Staff",
    desc: "Our team is always ready to help — from setup to game support, we’ve got your back.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#020408] py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-[0_0_10px_#facc15]" />

      <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="relative bg-[#06080f] border border-gray-800 aspect-[4/5] flex items-center justify-center overflow-hidden">
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(250,204,21,0.15),transparent_60%)]" />

            {/* Corners */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-yellow-400" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-yellow-400" />

            <Image
              src="/assets/char.png"
              alt="Gaming cafe setup"
              width={400}
              height={500}
              className="w-[85%] h-[85%] object-contain relative z-10 drop-shadow-[0_0_25px_#facc15]"
            />

            {/* Label */}
            <div className="absolute bottom-6 left-6 bg-black/80 border border-gray-700 px-4 py-2 backdrop-blur-md">
              <div className="text-[10px] tracking-[3px] text-yellow-400 uppercase">
                Experience
              </div>
              <div className="text-sm font-bold text-white mt-1">
                Premium Gaming Setup
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="absolute top-6 right-0 bg-black/90 border border-gray-700 px-4 py-2 flex items-center gap-2 backdrop-blur-md">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_10px_#facc15]" />

            <span className="text-[10px] tracking-[2px] uppercase text-yellow-400 font-semibold">
              Open Daily
            </span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <div className="text-[10px] tracking-[4px] uppercase text-yellow-400 mb-4">
            {"// About our gaming cafe"}
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            Your Ultimate <br /> Gaming Spot.
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            Step into a space built for gamers. Whether you&apos;re here to
            chill, compete, or play with friends, our gaming café offers
            high-performance systems, a wide range of games, and a comfortable,
            welcoming environment right here in Panvel.
          </p>

          {/* FEATURES */}
          <div className="flex flex-col gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex gap-4 p-5 border border-yellow-400/10 hover:border-yellow-400/40 hover:bg-yellow-400/5 transition"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-yellow-400/30 bg-yellow-400/10 text-lg">
                  {f.icon}
                </div>

                <div>
                  <div className="text-sm font-bold text-white mb-1">
                    {f.title}
                  </div>
                  <div className="text-sm text-gray-400 leading-relaxed">
                    {f.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
