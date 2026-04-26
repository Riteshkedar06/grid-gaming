"use client";

import Image from "next/image";
import Background from "/public/assets/background.png";
import Character from "/public/assets/char.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <Image
        src={Background}
        alt="Background image"
        fill
        className="object-cover absolute inset-0 z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20">
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center md:text-left mt-20 md:mt-0">
          <p className="text-yellow-400 tracking-[4px] text-sm mb-4">
            GAMING HUB
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-white">
            Dominate <br />
            <span className="text-yellow-400 drop-shadow-[0_0_25px_#facc15]">
              The Grid.
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-md">
            Where elite players forge legends. Train, compete, and rise through
            the ranks with the most electrifying gaming community.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-yellow-400 text-black px-6 py-3 font-semibold">
              EXPLORE NOW
            </button>

            <button className="border border-yellow-400 px-6 py-3 text-yellow-400">
              CONTACT US
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full md:w-[60%] flex justify-end items-end mt-10 md:mt-0">
          <Image
            src={Character}
            alt="Character"
            width={900}
            height={900}
            priority
            className="
              object-contain
              w-[320px] sm:w-[420px] md:w-[600px] lg:w-[750px]
              scale-110 md:scale-125
              translate-x-10 md:translate-x-20
              drop-shadow-[0_0_60px_#facc15]
            "
          />
        </div>
      </div>
    </section>
  );
}
