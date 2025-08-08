import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-primary">MyApp</div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="py-2 text-gray-700 hover:text-primary">
            Home
          </a>
          <a href="#" className="py-2 text-gray-700 hover:text-primary">
            About
          </a>
          <a href="#" className="py-2 text-gray-700 hover:text-primary">
            Services
          </a>
          <a href="#" className="py-2 text-gray-700 hover:text-primary">
            Contact
          </a>
        </nav>
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`md:hidden flex flex-col justify-center items-center px-4 pb-3 space-y-3 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <a href="#" className="py-2 text-gray-700 hover:text-primary">
          Home
        </a>
        <a href="#" className="py-2 text-gray-700 hover:text-primary">
          About
        </a>
        <a href="#" className="py-2 text-gray-700 hover:text-primary">
          Services
        </a>
        <a href="#" className="py-2 text-gray-700 hover:text-primary">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
