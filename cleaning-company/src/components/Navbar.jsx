import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg flex flex-col md:flex-row justify-between items-center w-sc">
      {" "}
      {/* Added shadow-lg */}
      <div className="flex justify-between w-full items-center">
        <h2 className="text-xl font-bold">
          <a href="/">Berakah</a>
        </h2>

        {/* Burger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰ {/* Unicode burger icon */}
        </button>
      </div>
      {/* Mobile Menu */}
      <nav
        className={`md:hidden flex flex-col gap-4 items-center overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <a href="/" className="hover:text-green-300 ">
          Home
        </a>
        <a href="/#services" className="hover:text-green-300 ">
          Services
        </a>
      
        <a href="/#contact" className="hover:text-green-300">
          Contact
        </a>
      </nav>
      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6 justify-center">
        <a href="/" className="hover:text-green-300">
          Home
        </a>
        <a href="#services" className="hover:text-green-300 ">
          Services
        </a>
      
        <a href="/#contact" className="hover:text-green-300">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
