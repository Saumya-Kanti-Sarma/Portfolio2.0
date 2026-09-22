"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { navItems } from "./constants";

export function DesktopNavbar() {
  const pathname = usePathname();

  return (
    <div className="hidden w-full max-w-300 md:flex h-15 items-stretch gap-1.5">
      {/* Logo block */}
      <div className="flex items-center justify-center bg-[#282828] min-w-15 rounded-lg">
        <Link href="/" className="flex items-center">
          <Image
            src="/s-vector.svg"
            alt="Saumya Sarma Portfolio website logo"
            width={30}
            height={30}
          />
        </Link>
      </div>

      {/* Nav links */}
      <nav className="flex flex-1 items-center justify-center gap-8 bg-[#282828] rounded-lg">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "relative text-[0.92rem] font-medium tracking-wide transition-colors duration-150 pb-[2px]",
                isActive
                  ? "text-white after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-white after:content-['']"
                  : "text-white/70 hover:text-white",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Search */}
      <div className="flex items-center justify-center px-5 bg-[#282828] rounded-lg">
        <button
          type="button"
          aria-label="Search"
          className="text-white/80 hover:text-white transition-colors duration-150"
        >
          <FiSearch size={20} />
        </button>
      </div>
    </div>
  );
}
