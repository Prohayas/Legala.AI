"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // icons

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Roadmap", href: "/roadmap" },
];

const Navbar = () => {
  const [nav, setNav] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4 py-12 flex items-center justify-between z-50">
      {/* Desktop nav */}
      <nav className="hidden md:flex w-full justify-center gap-x-28 uppercase text-md text-white">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setNav(item.label.toLowerCase())}
            className={`hover:underline ${
              nav === item.label.toLowerCase()
                ? "text-blue-custom font-semibold"
                : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="md:hidden ml-auto text-white">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-6 gap-6 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                setNav(item.label.toLowerCase());
                setIsOpen(false);
              }}
              className={`uppercase text-white text-lg hover:underline ${
                nav === item.label.toLowerCase()
                  ? "text-blue-custom font-semibold"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
