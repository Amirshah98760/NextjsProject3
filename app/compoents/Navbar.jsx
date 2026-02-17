"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

  return (
    <div className="fixed left-0 right-0 z-10">
      <nav className="bg-amber-500 p-4 flex items-center justify-between">
        <h2 className="text-white text-3xl">Logo</h2>

        <ul className="flex space-x-4">
          {links.map((link) => {
            const active = pathname === link.path;

            return (
              <li
                key={link.path}
                className="flex items-center gap-1 flex-col"
              >
                <Link
                  href={link.path}
                  className="text-white font-bold"
                >
                  {link.name}
                </Link>

                {active && (
                  <hr className="w-2/4 h-[2px] bg-white border-none" />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;