import React from 'react';

const Footer = () => {
  // Define footer navigation links
  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" }
  ];

  // Define social media links
  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com", icon: "fab fa-facebook-f", color: "text-blue-600" },
    { name: "Twitter", href: "https://twitter.com", icon: "fab fa-twitter", color: "text-blue-400" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "fab fa-linkedin-in", color: "text-blue-700" }
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Footer Left - About */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold">TVET Learning</h3>
          <p className="mt-2 text-gray-400">
            Empowering students with knowledge to excel in technical education and beyond.
          </p>
        </div>

        {/* Footer Middle - Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-400 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Footer Right - Social Media Icons */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 hover:${link.color}`}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-gray-500">
        <p>&copy; {new Date().getFullYear()} TVET Learning. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
