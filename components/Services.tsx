"use client";

const services = [
  {
    num: "01",
    icon: "🎯",
    title: "Esports Tournament Hosting",
    desc: "Weekly tournaments for BGMI, Valorant, FIFA & more with exciting prizes.",
    tag: "Popular",
    featured: true,
  },
  {
    num: "02",
    icon: "🖥️",
    title: "High-End Gaming PCs",
    desc: "Play on powerful systems with smooth performance and zero lag.",
    tag: "Available",
  },
  {
    num: "03",
    icon: "🎮",
    title: "Multiplayer Gaming",
    desc: "Play with friends in a fun and competitive environment.",
    tag: "Hot",
  },
  {
    num: "04",
    icon: "💺",
    title: "Comfort Setup",
    desc: "Ergonomic chairs and chill atmosphere for long sessions.",
    tag: "Comfort",
  },
  {
    num: "05",
    icon: "🎉",
    title: "Events & Parties",
    desc: "Birthday parties, team events, and custom gaming experiences.",
    tag: "Events",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#020408] py-20 px-6 md:px-16">
      {/* HEADER */}
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <p className="text-[10px] tracking-[4px] text-yellow-400 uppercase mb-3">
            {"// what we offer"}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Our Services
          </h2>
        </div>

        <a
          href="#contact"
          className="border border-yellow-400/30 px-5 py-2 text-xs tracking-[2px] uppercase text-yellow-400 hover:bg-yellow-400/10 transition"
        >
          Get In Touch →
        </a>
      </div>

      {/* GRID */}
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.num}
            className={`
              relative p-6 border border-yellow-400/10 bg-[#06080f]
              hover:border-yellow-400/40 hover:bg-yellow-400/5
              transition-all duration-300
              ${s.featured ? "md:col-span-2" : ""}
            `}
          >
            {/* Top line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-yellow-400 scale-x-0 origin-left group-hover:scale-x-100 transition" />

            <p className="text-[10px] tracking-[3px] text-yellow-400 mb-4">
              {s.num}
            </p>

            <div className="text-3xl mb-3">{s.icon}</div>

            <h3 className="text-white font-bold mb-2 text-sm">{s.title}</h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              {s.desc}
            </p>

            <span className="text-[10px] tracking-[2px] uppercase border border-yellow-400/30 px-3 py-1 text-yellow-400">
              {s.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
