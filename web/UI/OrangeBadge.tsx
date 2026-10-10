import type { ReactNode } from "react"

export const OrangeBadge = ({ children }: { children: ReactNode }) => (
  <span
    className="relative inline-block px-3 py-1 text-2xl md:text-3xl font-black tracking-widest uppercase text-white skew-x-[-6deg]"
    style={{ backgroundColor: "var(--red)" }}
  >
    <span className="inline-block skew-x-[6deg]">{children}</span>
  </span>
)
