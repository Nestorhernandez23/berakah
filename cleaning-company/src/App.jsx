"use client";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import { Car } from "lucide-react";

function App() {
  return (
    <div>
      <Navbar />
      <div className="w-full flex flex-col items-center md: gap-1 bg-white">
        <Hero />
        <Services />
        <Pricing />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
