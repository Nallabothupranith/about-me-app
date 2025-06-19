"use client";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "Articles", href: "/articles" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full sticky top-0 z-30 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border-b border-white/30 dark:border-gray-700/60 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3">
        {/* Logo/Brand */}
        <Link
          href="/"
          className="font-extrabold text-2xl tracking-tight text-gray-900 dark:text-white flex items-center gap-2 drop-shadow-sm"
          style={{ letterSpacing: "0.04em" }}
        >
          <span className="inline-block font-mono text-blue-500">&lt;</span>
          <span className="inline-block font-sans">Pranith</span>
          <span className="inline-block font-mono text-pink-500">/&gt;</span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-2 lg:gap-6 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-xl text-base font-medium text-gray-800 dark:text-gray-100 transition-all duration-200 hover:bg-white/40 dark:hover:bg-gray-800/40 hover:backdrop-blur-md hover:shadow-md hover:text-blue-600 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700"
              style={{ display: "inline-block" }}
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            className="p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white/40 dark:bg-gray-800/40 backdrop-blur-md shadow-md"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open navigation menu"
          >
            <svg
              className="w-7 h-7 text-gray-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl border-t border-white/30 dark:border-gray-700/60 shadow-2xl animate-fade-in-down">
          <div className="flex flex-col gap-2 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-3 rounded-xl text-lg font-medium text-gray-900 dark:text-gray-100 transition-all duration-200 hover:bg-white/40 dark:hover:bg-gray-800/40 hover:backdrop-blur-md hover:shadow-md hover:text-blue-600 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
