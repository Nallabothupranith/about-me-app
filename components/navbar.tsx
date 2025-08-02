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
              className="relative px-5 py-2 rounded-xl text-base font-semibold text-gray-900 dark:text-white transition-all duration-300 overflow-hidden group border border-white/20 dark:border-gray-700/40 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700 bg-gradient-to-br from-white/70 via-blue-100/60 to-white/30 dark:from-gray-800/80 dark:via-blue-900/40 dark:to-gray-900/10 hover:from-blue-200 hover:via-white hover:to-blue-100 dark:hover:from-blue-900 dark:hover:via-gray-800 dark:hover:to-blue-900/30 backdrop-blur-xl"
              style={{
                display: "inline-block",
                boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
              }}
            >
              <span className="relative z-10 drop-shadow-md group-hover:text-blue-600 dark:group-hover:text-blue-300">
                {link.name}
              </span>
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
        <div className="md:hidden bg-gradient-to-br from-white/90 via-blue-100/80 to-white/60 dark:from-gray-900/95 dark:via-blue-900/60 dark:to-gray-900/40 backdrop-blur-2xl border-t border-white/20 dark:border-gray-700/40 shadow-2xl animate-fade-in-down">
          <div className="flex flex-col gap-3 px-4 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative px-5 py-3 rounded-xl text-lg font-semibold text-gray-900 dark:text-white transition-all duration-300 overflow-hidden group border border-white/20 dark:border-gray-700/40 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700 bg-gradient-to-br from-white/70 via-blue-100/60 to-white/30 dark:from-gray-800/80 dark:via-blue-900/40 dark:to-gray-900/10 hover:from-blue-200 hover:via-white hover:to-blue-100 dark:hover:from-blue-900 dark:hover:via-gray-800 dark:hover:to-blue-900/30 backdrop-blur-xl"
                onClick={() => setTimeout(() => setOpen(false), 100)}
              >
                <span className="relative z-10 drop-shadow-md group-hover:text-blue-600 dark:group-hover:text-blue-300">
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
