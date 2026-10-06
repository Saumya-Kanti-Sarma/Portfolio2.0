import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";

const VISITOR_COUNT = 302;
const VISITOR_ORDINAL = "nd";

export default function RightIntroSide() {
  return (
    <aside className="flex flex-col gap-6 max-[760px]:items-center max-[760px]:text-center">
      {/* Visitor count — hidden on phones, visible sm and up */}
      <div className="hidden sm:block">
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
  )
}
