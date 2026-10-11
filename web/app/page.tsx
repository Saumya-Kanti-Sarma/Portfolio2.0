import Image from "next/image";
import Badge from "./components/Badge/Badge";
import Link from "next/link";
import ProjectsGrid from "./components/ProjectsGrid";
import "./page.css";

const blogs = [
  {
    title: "Team FEYNMAN live long | a tail of SIH 2026",
    image: "/portfolio/hackathon.jpeg",
    alt: "SIH2026 internal round hackathon team.",
  },
  {
    title: "Why I still write codes & notes manually",
    image: "/portfolio/college-group.png",
    alt: "saumya and his team collage image",
  },
  {
    title: "A journey of 3000 km that took me away...",
    image: "/portfolio/right-looking.png",
    alt: "Saumya's portfolio",
  },
];

const projects = [
  {
    title: "OpenNarrator | Offline 1st TTS software ",
    picture: "/projects/opennarrator.png",
    url: "https://opennarrator.com",
    description:
      "An offline-first desktop text-to-speech app for turning PDFs and other reading into an audiobook-like listening experience. OpenNarrator uses Kokoro TTS for voice generation and Tauri to deliver a lightweight desktop app.",
    technologies: ["Tauri", "Kokoro TTS", "Text to speech"],
  },
  {
    title: "Any Dark | Browser extension that gives darkmode to any site",
    picture: "/projects/anydark.png",
    url: "https://anydark.pages.dev",
    description:
      "A browser extension that makes websites easier to browse in the dark. It applies dark-mode styling by adjusting page colors while preserving the original appearance of images and other media.",
    technologies: ["JavaScript", "Browser extension", "Dark mode"],
  },
  {
    title: "Code Plexx | My personal blogging website",
    picture: "/projects/codeplexx.png",
    url: "https://codeplexx.vercel.app/",
    description:
      "A full-stack technology blogging platform inspired by TechCrunch. Code Plexx brings together a Next.js and TypeScript frontend with MongoDB and Supabase.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Supabase"],
  },
  {
    title: "Int2Words | Python package to convert number to words",
    picture: "/projects/int2word.png",
    url: "https://pypi.org/project/int2word/",
    description:
      "A lightweight Python package that converts integer values into readable English words—for example, turning 123 into “one hundred and twenty-three.”",
    technologies: ["Python", "PyPI"],
  },
  {
    title: "Next CLI Toolkit | SDK for NextJS developers",
    picture: "/projects/nexxt-cli-toolkit.png",
    url: "https://www.npmjs.com/package/next-cli-toolkit",
    description:
      "A small command-line tool for generating Next.js routes and components, including .tsx, .jsx, and .css files, from a single command.",
    technologies: ["Next.js", "Node.js", "CLI", "npm"],
  },
  {
    title: "Meta Menus | Free digital menu for restaurants  ",
    picture: "/projects/meta-menus.png",
    description:
      "A full-stack digital menu experience for restaurants. Guests can browse dishes, search or filter the menu, and view full- and half-portion prices.",
    technologies: ["React", "Next.js", "MongoDB", "Supabase"],
  },
]

export default function HomePage() {
  return (
    <main className="home-page">

      <div className="child-section home-content">
        <section className="hero" aria-labelledby="intro-title">
          <div className="hero-copy">

            <h1 id="intro-title" className="hero-title">
              <span>Hi, I&apos;m</span>
              <Badge text="SAUMYA SARMA" />
            </h1>
            <h2>I&apos;m a full-stack engineer who builds almost anything.</h2>
            <p className="hero-lede">
              Websites, applications, browser extensions, software, servers,
              SDKs — just name it.
            </p>
          </div>
          <div className="hero-image">
            <Image
              src="/portfolio/right-looking.png"
              fill
              alt="Saumya Kanti Sarma profile image"
            />
          </div>
        </section>

        <div >
          <p className="text-4xl text-(--light-gray) font-medium">
            &quot;I was a{" "}
            <span
              className="vibe-term"
              tabIndex={0}
              aria-describedby="vibe-coder-tooltip"
            >
              <span className="vibe-highlight">vibe coder</span>
              <span
                className="vibe-tooltip"
                id="vibe-coder-tooltip"
                role="tooltip"
              >
                Vibe coder (pre LLM era definition): Developers who
                occasionally code in an unstructured, improvisational style
                without a detailed plan, enjoying the process of building new
                tools and technologies for self-paced or open-source projects.
              </span>
            </span>{" "}
            before vibe coding was a thing. I started my coding journey in
            8th grade after getting inspired by Iron Man{" "}
            <span className="inline-image-frame">
              <Image
                src="/text-images/ironman.png"
                width={100}
                height={60}
                alt="Iron Man"
              />
            </span>{" "}
            and wanting to build
            my own JARVIS. I began learning Python through YouTube <Link
              className="text-[#3d30f59f]"
              href={"https://www.codewithharry.com"}
              target="_blank">
              (CodeWithHarry)
            </Link>{" "}
            <span className="inline-image-frame">
              <Image
                src="/text-images/cwh.png"
                width={100}
                height={100}
                alt="code with harry"
                className="object-cover object-top"
              />
            </span>{" "} and never
            looked back....&quot;
            <Link href={"#"}
              className="text-xl text-[#3d30f59f]"
            >read the full article</Link>
          </p>
          <br />
          <Image
            loading="lazy"
            src="/portfolio/banner.png"
            height={1200}
            width={1200}
            alt="Saumya Kanti Sarma profile image"
          />
        </div>
        <br />
        <section className="blogs-section" aria-labelledby="blogs-title">
          <div className="blogs-heading">
            <h1 className="text-(--red) font-black">NOTES FROM THE BUILD</h1>
            <h2 id="blogs-title"> read my ideas, thoughts and experiments.</h2>
          </div>
          <div className="blog-grid">
            {blogs.map((blog) => (
              <article className="blog-card" key={blog.title}>
                <Image
                  src={blog.image}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  alt={blog.alt}
                />
                <h3>{blog.title}</h3>
              </article>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href={"#"} className="w-full flex justify-center">
              <button className="bg-(--red) p-5 rounded-xl text-white text-2xl w-full mt-5 max-w-150 cursor-pointer">
                Read My Articles </button>
            </Link>
          </div>
        </section>
        {/* Projects */}
        <section className="w-full">
          <br />
          <h1 className="text-(--red) font-black">PROJECTS AND SIDE HUSTLES</h1>
          <h3>
            A few things I&apos;ve built, from developer tools to products for
            everyday use.
          </h3>
          <Image
            className="projects-banner"
            src="/portfolio/projects-banner.jpg"
            alt="Saumya's software projects"
            width={1400}
            height={200}
          />
          <p className="text-4xl text-(--light-gray) font-medium">
            Most of my projects are solutions of the problems that I&apos;ve faced/encountered and wanted to give a better way to approach the problem. For example while building {" "}
            <Link
              href={"https://meta-menus.pages.dev"}
              className="text-[#3d30f59f]"
            >(Meta menus)</Link>
            {" "}
            <span className="inline-image-frame">
              <Image
                src="/projects/meta-menus.png"
                width={100}
                height={60}
                alt="meta menu"
              />
            </span>
            I went to a restaurant where I saw a qr code placed on table and upon scanning it, a canva template popped up...  <Link href={"#"}
              className="text-xl text-[#3d30f59f]"
            >read the full article</Link>
          </p>
          <ProjectsGrid projects={projects} />
        </section>

      </div>

    </main>
  );
}