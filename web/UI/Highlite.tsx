import type { ReactNode } from "react"

export const Highlight = ({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) => (
  <span
    className={`px-1 text-black bg-[linear-gradient(transparent_0,#fde047_0)] ${className}`}
  >
    {children}
  </span>
)