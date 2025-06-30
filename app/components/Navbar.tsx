"use client";

import Link from "next/link";
import React, { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Roadmap", href: "/roadmap" },
];

const Navbar = () => {
  const [nav, setNav] = useState("/");
  return (
    <header className="flex items-center justify-between w-full max-w-4xl">
      <nav className="flex w-full justify-center gap-x-28 uppercase text-md text-white">
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
    </header>
  );
};

export default Navbar;
