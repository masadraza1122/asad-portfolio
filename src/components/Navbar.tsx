"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 transition-all duration-500 pt-4">
      <nav
        className={`w-full max-w-[1100px] rounded-2xl transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.6),_0_0_80px_rgba(167,139,250,0.04)] py-3"
            : "bg-white/[0.02] backdrop-blur-md border border-white/[0.04] py-3"
        }`}
      >
        <div className="flex items-center justify-between px-6">
          {/* Logo */}
          <a href="#home" className="text-lg font-bold tracking-tight">
            M<span className="text-gradient">.</span>
            <span className="text-gray-400 font-normal ml-1 hidden sm:inline">
              Asad Raza
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-gray-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/[0.05] transition-all duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex text-xs font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-[#a78bfa] to-[#60a5fa] text-white glow-sm hover:brightness-110 transition-all duration-300"
            >
              Hire Me
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 cursor-pointer"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-[72px] z-40 transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`relative mx-4 mt-3 rounded-2xl bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.6)] p-6 transition-all duration-300 ${
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg text-gray-400 hover:text-white px-4 py-3 rounded-xl hover:bg-white/[0.05] transition-all duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t border-white/[0.06]">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center text-sm font-medium px-4 py-3 rounded-xl bg-gradient-to-r from-[#a78bfa] to-[#60a5fa] text-white glow-sm"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
