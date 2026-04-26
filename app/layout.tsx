import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "700", "900"],
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Grid Gaming | Best Gaming Café in Panvel",
  description:
    "Play on high-end gaming PCs in Panvel. Affordable pricing, multiplayer games, tournaments, and chill gaming vibe at Grid Gaming.",
  keywords: [
    "gaming cafe panvel",
    "gaming setup panvel",
    "pc gaming cafe navi mumbai",
    "grid gaming",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${orbitron.variable} 
          ${rajdhani.variable}
          bg-[#020408] text-white antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
