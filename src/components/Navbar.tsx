"use client";

import React, { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  // Handle initial active link based on URL hash when component mounts
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash && NAV_LINKS.some((link) => link.href === hash)) {
      setActiveLink(hash);
    }

    // Set up scroll event listener to update active link
    const handleScroll = () => {
      // Find which section is currently in view
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));

      // We'll find the section closest to the top of the viewport
      let current = "";
      let minDistance = Infinity;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Calculate distance from top of viewport (with some offset)
          const distance = Math.abs(rect.top - 100);
          if (distance < minDistance) {
            minDistance = distance;
            current = section;
          }
        }
      });

      if (current) {
        setActiveLink(`#${current}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-gray-900 dark:text-white">
            <a href="#hero">AyushSoni</a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className={`
                  relative px-3 py-2 text-sm font-medium transition-colors
                  text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all
                  hover:after:w-full
                  ${
                    activeLink === href
                      ? "text-indigo-600 dark:text-indigo-400 after:w-full"
                      : ""
                  }
                `}
              >
                {label}
              </a>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <div className="px-3 py-2">
              <ModeToggle />
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => handleLinkClick(href)}
                className={`
                  block px-3 py-2 rounded-md text-base font-medium
                  text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800
                  ${
                    activeLink === href
                      ? "bg-indigo-500 text-white dark:bg-indigo-400"
                      : ""
                  }
                `}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
