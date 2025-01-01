"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [words] = useState(['Innovate', 'Transform', 'Create', 'Build']);
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => setScrollY(window.scrollY);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b  from-blue-950" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />

      {/* Animated pattern overlay */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.1
            }}
          >
            <Sparkles className="text-blue-400" size={Math.random() * 20 + 10} />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8 relative inline-block">
            <span className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-blue-400" />
            <span className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-blue-400" />
            <h2 className="text-blue-400 font-bold text-xl">Welcome to Cyber.ix</h2>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            We Help You{' '}
            <span className="relative inline-block min-w-[200px]">
              <span className="absolute transition-all duration-500 opacity-0 animate-slideUp">
                {words[currentWord]}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {words[currentWord]}
              </span>
            </span>
            <br />
            The Future
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Transform your digital vision into reality with our innovative solutions
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full overflow-hidden">
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              <span className="relative flex items-center text-white group-hover:text-blue-600 font-semibold transition-colors">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="px-8 py-4 border-2 border-white/20 rounded-full text-white hover:bg-white/10 transition-colors">
              View Our Work
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/60 rounded-full animate-scroll" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;