"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-bg-dark/90 backdrop-blur-md py-4 border-b border-text-cream/10"
          : "bg-gradient-to-b from-black/80 via-black/30 to-transparent py-6"
      }`}
    >
      <div className="container-wide flex items-center justify-between drop-shadow-md">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-heading tracking-tighter text-primary">
            MARINATION
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-heading tracking-widest hover:text-primary transition-colors"
          >
            HOME
          </Link>
          <Link
            href="/menu"
            className="text-sm font-heading tracking-widest hover:text-primary transition-colors"
          >
            MENU
          </Link>
          <Link
            href="/#catering"
            className="text-sm font-heading tracking-widest hover:text-primary transition-colors"
          >
            CATERING
          </Link>
          <Link
            href="/#locations"
            className="text-sm font-heading tracking-widest hover:text-primary transition-colors"
          >
            LOCATIONS
          </Link>
          <Link
            href="/#about"
            className="text-sm font-heading tracking-widest hover:text-primary transition-colors"
          >
            ABOUT
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/menu" className="btn-primary py-2 px-6 text-xs">
            ORDER ONLINE
          </Link>
          
          <button className="md:hidden text-text-cream">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
