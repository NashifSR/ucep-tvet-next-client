"use client"
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathName = usePathname();
  // Define the navigation links in an array
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Take a Test", href: "/tests" },
    { name: "Q&A", href: "/questions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

//   if(pathName.includes("dashboard")){
//     return <DashboardLayout></DashboardLayout>
//   }

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-lg font-bold">
          TVET Learning
        </div>

        {/* Navigation Links */}
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
        <div className="md:hidden text-white">
          <button id="menu-toggle">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
