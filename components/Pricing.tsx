"use client";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#020408] py-20 px-6 md:px-16 text-center"
    >
      {/* Heading */}
      <p className="text-[10px] tracking-[4px] text-yellow-400 uppercase mb-3">
        {"// pricing"}
      </p>

      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-10">
        Simple & Affordable
      </h2>

      {/* Pricing Card */}
      <div className="max-w-md mx-auto border border-yellow-400/20 bg-[#06080f] p-10">
        <p className="text-gray-400 mb-2">Gaming Price</p>

        <h3 className="text-5xl font-extrabold text-yellow-400 mb-2">₹80</h3>

        <p className="text-gray-400 mb-6">per hour</p>

        <div className="text-gray-400 text-sm space-y-2 mb-8">
          <p>✔ High-end gaming PCs</p>
          <p>✔ All popular games available</p>
          <p>✔ Comfortable seating</p>
          <p>✔ Clean & chill environment</p>
        </div>

        <button className="bg-yellow-400 text-black px-6 py-3 font-semibold w-full">
          Visit Now
        </button>
      </div>

      {/* Extra Info */}
      <p className="text-gray-500 text-sm mt-6">
        Special discounts available for long sessions & groups
      </p>
    </section>
  );
}
