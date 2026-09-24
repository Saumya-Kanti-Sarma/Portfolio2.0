import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";

const VISITOR_COUNT = 302;
const VISITOR_ORDINAL = "nd";

export default function HomePage() {
  return (
    <main className="w-full h-full  flex items-center justify-center px-4 py-8 md:py-0 ">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-center">

        {/* ── Left: intro text ── */}
        <aside className="flex flex-col gap-3">
          <h1
            className="text-6xl md:text-8xl font-black leading-none tracking-tight"
            style={{ color: "var(--black)" }}
          >
            Hello!
          </h1>
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

        {/* ── Center: photo in red circle ── */}
        <div className="flex flex-col items-center gap-4">
          <div
            className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden"
            style={{ backgroundColor: "var(--red)" }}
          >
            <Image
              src="/portfolio/right-looking.png"
              alt="Saumya Sarma, a software engineer from Mumbai, India"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Pagination dots */}
          <div className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--red)" }}
            />
            <span className="w-2 h-2 rounded-full bg-black/20" />
            <span className="w-2 h-2 rounded-full bg-black/20" />
          </div>
        </div>

        {/* ── Right: visitor count + socials ── */}
        <aside className="flex flex-col gap-6">
          {/* Visitor count */}
          <div>
            <p
              className="text-2xl md:text-3xl font-black leading-snug"
              style={{ color: "var(--black)" }}
            >
              {/* desktop: "You're my 302nd visitor..." */}
              <span className="hidden md:inline">
                You&apos;re my{" "}
                <span
                  className="inline-flex items-start px-3 py-0.5 text-white font-black skew-x-[-6deg]"
                  style={{ backgroundColor: "var(--red)" }}
                >
                  <span className="inline-block skew-x-[6deg]">
                    {VISITOR_COUNT}
                    <sup className="text-xs font-bold ml-0.5">{VISITOR_ORDINAL}</sup>
                  </span>
                </span>
                {" "}visitor...
              </span>
              {/* mobile: "Total Visits: 302nd" */}
              <span className="inline md:hidden">
                Total Visits:{" "}
                <span
                  className="inline-flex items-start px-3 py-0.5 text-white font-black skew-x-[-6deg]"
                  style={{ backgroundColor: "var(--red)" }}
                >
                  <span className="inline-block skew-x-[6deg]">
                    {VISITOR_COUNT}
                    <sup className="text-xs font-bold ml-0.5">{VISITOR_ORDINAL}</sup>
                  </span>
                </span>
              </span>
            </p>

            <p
              className="text-2xl md:text-3xl font-black leading-snug hidden md:block"
              style={{ color: "var(--black)" }}
            >
              Wanna checkout my
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-start gap-6">
            <Link
              href="/my-projects"
              className="flex flex-col items-center gap-1.5 group"
            >
              <span
                className="flex items-center justify-center w-10 h-10 rounded-full text-white text-base transition-opacity group-hover:opacity-80"
                style={{ backgroundColor: "var(--black)" }}
              >
                <GoProjectRoadmap size={18} />
              </span>
              <span
                className="text-xs font-semibold"
                style={{ color: "var(--black)" }}
              >
                Projects
              </span>
            </Link>

            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 group"
            >
              <span
                className="flex items-center justify-center w-10 h-10 rounded-full text-white text-base transition-opacity group-hover:opacity-80"
                style={{ backgroundColor: "var(--black)" }}
              >
                <FaGithub size={18} />
              </span>
              <span
                className="text-xs font-semibold"
                style={{ color: "var(--black)" }}
              >
                Git-Hub
              </span>
            </Link>

            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 group"
            >
              <span
                className="flex items-center justify-center w-10 h-10 rounded-full text-white text-base transition-opacity group-hover:opacity-80"
                style={{ backgroundColor: "var(--black)" }}
              >
                <FaLinkedinIn size={18} />
              </span>
              <span
                className="text-xs font-semibold"
                style={{ color: "var(--black)" }}
              >
                Linkedin
              </span>
            </Link>
          </div>
        </aside>

      </div>
    </main>
  );
}
