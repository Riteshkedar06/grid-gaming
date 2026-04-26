export default function Footer() {
  return (
    <footer className="relative bg-[#020408] px-6 md:px-16 py-6">
      {/* Top glowing line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-[0_0_10px_#facc15]" />

      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="text-yellow-400 font-extrabold tracking-[3px] text-sm md:text-base">
          GRID<span className="text-yellow-300">.</span>GG
        </div>

        {/* Links */}
        <div className="flex gap-6 flex-wrap justify-center">
          {["About", "Services", "Achievements", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-gray-400 text-xs tracking-[2px] uppercase font-semibold hover:text-yellow-400 transition"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-gray-500 text-xs text-center md:text-right">
          © 2026 Grid Gaming. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
