"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#hero");

  useEffect(() => {
    if (pathname === "/projects") return;
    const handleScroll = () => {
      const sections = NAV_LINKS.filter((link) =>
        link.href.startsWith("#")
      ).map((link) => link.href.replace("#", ""));

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
        setActiveHash(`#${current}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);

    if (href.startsWith("#")) {
      if (pathname !== "/") {
        // Redirect to home and preserve hash
        router.push("/" + href);
      } else {
        setActiveHash(href);
        document
          .getElementById(href.replace("#", ""))
          ?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(href);
    }
  };

  const isActive = (href: string) => {
    if (href === "/projects") return pathname === "/projects";
    if (href.startsWith("#")) return pathname === "/" && activeHash === href;
    return false;
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900 dark:text-white">
            <Link href="/">AyushSoni</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => handleLinkClick(href)}
                className={`
                  cursor-pointer relative px-3 py-2 text-sm font-medium transition-colors
                  text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white
                  after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all
                  hover:after:w-full
                  ${
                    isActive(href)
                      ? "text-indigo-600 dark:text-indigo-400 after:w-full"
                      : ""
                  }
                `}
              >
                {label}
              </button>
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
              className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
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
              <button
                key={href}
                onClick={() => handleLinkClick(href)}
                className={`
                  cursor-pointer block w-full text-left px-3 py-2 rounded-md text-base font-medium
                  text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800
                  ${
                    isActive(href)
                      ? "bg-indigo-500 text-white dark:bg-indigo-400"
                      : ""
                  }
                `}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
