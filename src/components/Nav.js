import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-900 fixed w-full z-50 shadow-lg">
      
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-500">
          <a href="#home">MyPortfolio</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-cyan-500">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-500">
            About
          </a>
          <a href="#project" className="hover:text-cyan-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-500">
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <a href="#home" className="block px-6 py-2 hover:bg-cyan-500">
            Home
          </a>
          <a href="#about" className="block px-6 py-2 hover:bg-cyan-500">
            About
          </a>
          <a href="#projects" className="block px-6 py-2 hover:bg-cyan-500">
            Projects
          </a>
          <a href="#contact" className="block px-6 py-2 hover:bg-cyan-500">
            Contact
          </a>
        </div>
      )}

      {/* Zigzag Image */}
      <div
        className="bg-gray-1000 h-1 sm:h-2 w-full absolute left-0 top-0 z-10 mt-16"
        style={{
          backgroundImage: "url('zigzag.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          opacity: 1, // Adjust transparency
        }}
      ></div>
    </nav>
  );
};

export default Nav;
