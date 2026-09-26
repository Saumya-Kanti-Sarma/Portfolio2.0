import type { ReactNode } from "react"

/* ---------- Inline image that sits inside a line of text ---------- */
type InlineImageProps = {
  src: string
  alt?: string
  className?: string
}

export const InlineImage = ({ src, alt = "", className = "" }: InlineImageProps) => (
  <img
    src={src}
    alt={alt}
    className={`mx-1 inline-block h-[70px] w-[100px] rounded-md object-cover align-middle ${className}`}
  />
)

/* ---------- Word that shows an explanation card on hover ---------- */
type HoverTermProps = {
  children: ReactNode      // the trigger text, e.g. "VIBE CODER"
  title?: string           // bold lead-in inside the card
  description: ReactNode   // the explanation text
  className?: string       // extra styling for the trigger text
}

export const HoverTerm = ({ children, title, description, className = "" }: HoverTermProps) => (
  <span className="group relative inline-block">
    {/* trigger */}
    <span
      tabIndex={0}
      className={`cursor-default ${className}`}
    >
      {children}
    </span>

    {/* card: the pt-3 gap is part of the wrapper, so the cursor can travel onto the card without it closing */}
    <span
      role="tooltip"
      className="pointer-events-none invisible absolute left-0 top-full z-50 w-72 max-w-[80vw] pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
      {/* reset the h1's size/weight so the card text stays small and normal */}
      <span className="block rounded-lg border border-black/10 bg-white p-4 text-left text-sm font-normal normal-case leading-relaxed tracking-normal text-neutral-700 shadow-xl">
        {title && <strong className="font-semibold text-black">{title} </strong>}
        {description}
      </span>
    </span>
  </span>
)