"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const pathName = usePathname();

  // State to track mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define the navigation links in an array
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Take a Test", href: "/tests" },
    { name: "Q&A", href: "/questions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Login", href: "/login" },
  ];

  // Toggle function for mobile menu
  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="text-white text-lg font-bold">TVET</div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white hover:text-blue-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="text-white md:hidden">
          <button
            id="menu-toggle"
            onClick={toggleNav}
            className="focus:outline-none"
          >
            ☰
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute transition right-0 top-full mt-2 bg-white p-4 rounded shadow-md ">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-black hover:text-blue-200 mb-2 last:mb-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
