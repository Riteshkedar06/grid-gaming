"use client";

import { useState } from "react";

const contactItems = [
  { icon: "📞", label: "Call Us", value: "+91 95944 14875" },
  { icon: "✉️", label: "Email", value: "hello@gridgaming.gg" },
  {
    icon: "📍",
    label: "Location",
    value:
      "Shop no.: 13, CHS, Plot no.: 133, Sector 1E, Kalamboli, Panvel, Maharashtra 410218",
  },
  { icon: "🕐", label: "Hours", value: "10 AM – 2 AM Daily" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSent(true);

    setTimeout(() => setSent(false), 3000);

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative bg-[#020408] py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Background text */}
      <div className="absolute bottom-[-3rem] right-[-2rem] text-[20vw] font-extrabold text-yellow-400/5 select-none pointer-events-none">
        GRID
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <p className="text-[10px] tracking-[4px] text-yellow-400 uppercase mb-3">
          {"// reach out"}
        </p>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
          Let’s Connect.
        </h2>

        <p className="text-gray-400 mb-12 max-w-md">
          Ready to play? Drop us a message or contact us directly — we respond
          fast.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT - INFO */}
          <div className="flex flex-col gap-4">
            {contactItems.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-4 p-4 border border-yellow-400/10 hover:border-yellow-400/40 hover:bg-yellow-400/5 transition"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 text-black text-lg font-bold">
                  {c.icon}
                </div>

                <div>
                  <p className="text-[10px] tracking-[3px] text-yellow-400 uppercase">
                    {c.label}
                  </p>
                  <p className="text-white font-semibold text-sm">{c.value}</p>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="flex gap-3 mt-4">
              {["IG", "YT", "DC", "TW"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-yellow-400/30 text-yellow-400 text-xs font-bold hover:bg-yellow-400 hover:text-black transition"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="flex flex-col gap-4">
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="bg-[#06080f] border border-yellow-400/10 focus:border-yellow-400 text-white px-4 py-3 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="bg-[#06080f] border border-yellow-400/10 focus:border-yellow-400 text-white px-4 py-3 outline-none"
              />
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="bg-[#06080f] border border-yellow-400/10 focus:border-yellow-400 text-white px-4 py-3 outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="bg-[#06080f] border border-yellow-400/10 focus:border-yellow-400 text-white px-4 py-3 outline-none"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              className="bg-[#06080f] border border-yellow-400/10 focus:border-yellow-400 text-white px-4 py-3 outline-none min-h-[130px]"
            />

            {/* Submit */}
            <button
              onClick={handleSubmit}
              className="bg-yellow-400 text-black font-semibold py-3 hover:shadow-[0_0_20px_#facc15] transition"
            >
              {sent ? "Message Sent ✓" : "Send Message →"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
