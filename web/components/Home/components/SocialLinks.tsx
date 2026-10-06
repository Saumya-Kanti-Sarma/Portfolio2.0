import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";

export default function SocialLinks() {
  return (
    <div className="home-social-links flex items-start gap-6">
      <Link
        href="/my-projects"
        className="home-social-link flex flex-col items-center gap-1.5 group"
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
        href="https://github.com/Saumya-Kanti-Sarmax`"
        target="_blank"
        rel="noopener noreferrer"
        className="home-social-link flex flex-col items-center gap-1.5 group"
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
        href="https://www.linkedin.com/in/saumya-sarma/"
        target="_blank"
        rel="noopener noreferrer"
        className="home-social-link flex flex-col items-center gap-1.5 group"
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
  );
}
