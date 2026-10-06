import Greetings from "./components/Greetings"

export const LeftIntroSide = () => {
  return (
    <aside className="flex flex-col gap-3">
      <span className="max-sm:hidden"><Greetings /></span>
      <p
        className="text-xl md:text-4xl font-semibold leading-snug hidden md:block"
        style={{ color: "var(--black)" }}
      >
        Welcome to my site
      </p>

      {/* "I am SAUMYA!" badge line */}
      <div className="flex items-center gap-3 flex-wrap">
        <span
          className="text-3xl md:text-4xl font-black leading-none"
          style={{ color: "var(--black)" }}
        >
          I am
        </span>
        <span
          className="relative inline-block px-3 py-1 text-2xl md:text-3xl font-black tracking-widest uppercase text-white skew-x-[-6deg]"
          style={{ backgroundColor: "var(--red)" }}
        >
          <span className="inline-block skew-x-[6deg]">Saumya!</span>
        </span>
      </div>

      <p
        className="text-sm md:text-base font-medium leading-relaxed mt-1"
        style={{ color: "var(--gray)" }}
      >
        A 21 years old software engineer<br />from Mumbai, INDIA
      </p>
    </aside>

  )
}
