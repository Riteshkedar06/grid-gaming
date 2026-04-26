import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Achievements />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
