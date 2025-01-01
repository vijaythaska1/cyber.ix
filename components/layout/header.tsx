"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import  logo   from "@/app/assets/conpanylogo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // Handle menu toggle with logging to debug
  const handleMenuToggle = () => {
    console.log('Menu button clicked'); // Helpful for debugging
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`  fixed w-full z-50  duration-300 ${scrolled
     ? 'bg-gradient-to-b from-blue-950 to-gray-900 shadow-lg backdrop-blur-md'
        : 'bg-gradient-to-b from-blue-950 to-gray-900/90 backdrop-blur-sm'
      }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 ">
          {/* Logo and Brand */}
          <Link
            href="/"
            className="flex items-center space-x-3 text-2xl font-bold"
          >
            <div className="relative w-10 h-10">
              <Image
                src={logo}
                alt="Cyber.ix Logo"
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Cyber.ix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-gray-200 hover:text-white transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
            ))}
            <Button
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
            >
              Get Started
            </Button>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <div className="block md:hidden">
            <button
              type="button"
              onClick={handleMenuToggle}
              className="inline-flex items-center justify-center p-3 rounded-md text-white hover:text-blue-400 hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div
              className={`
              md:hidden 
              fixed inset-x-0 top-20 
              bg-gray-900/95 backdrop-blur-md
              transition-all duration-300 ease-in-out
              transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
              border-t border-gray-800
              shadow-xl
            `}
              id="mobile-menu"
            >
              <nav className="container mx-auto px-6 py-6">
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-200 hover:text-white hover:bg-gray-800/50 transition-all duration-200 px-4 py-2 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    className="mt-4 w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
                  >
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}