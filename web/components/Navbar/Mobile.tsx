"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { navItems } from "./constants";

export function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="w-full flex flex-col gap-1.5 md:hidden">
      {/* Mobile bar */}
      <div className="flex w-full h-15 items-center gap-1.5">
        {/* Logo block */}
        <div className="flex h-15 items-center justify-center bg-[#282828] min-w-15 rounded-lg shrink-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/s-vector.svg"
              alt="Saumya Sarma Portfolio website logo"
              width={30}
              height={30}
            />
          </Link>
        </div>

        {/* Menu bar */}
        <div className="flex flex-1 h-15 items-center justify-between px-3 bg-[#282828] rounded-lg">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center text-white/80 hover:text-white transition-colors"
          >
            <FiMenu size={20} />
          </button>

          <Link
            href="/"
            className="text-[1.1rem] font-bold tracking-tight text-white/90"
          >
            GatesNotes
          </Link>

          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center text-white/80 hover:text-white transition-colors"
          >
            <FiSearch size={20} />
          </button>
        </div>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <nav className="w-full dropdown-animate">
          <div className="bg-[#282828] rounded-lg overflow-hidden">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.href}>
                  {index !== 0 && <div className="mx-3 h-px bg-white/8" />}
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={[
                      "flex items-center justify-between px-4 py-3.5 text-[0.95rem] font-medium transition-colors duration-150",
                      isActive
                        ? "text-white"
                        : "text-white/60 hover:text-white hover:bg-white/5",
                    ].join(" ")}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </Link>
                </div>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}
