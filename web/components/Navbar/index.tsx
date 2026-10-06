"use client";

import { DesktopNavbar } from "./Desktop";
import { MobileNavbar } from "./Mobile";

export function Navbar() {
  return (
    <header className="w-full text-white px-3 py-2 flex flex-col items-center md:flex-row md:justify-center md:py-0 md:h-17.5 z-100">
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
}
