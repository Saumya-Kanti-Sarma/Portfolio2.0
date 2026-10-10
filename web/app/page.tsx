import Image from "next/image";
import Badge from "./components/Badge/Badge";
import Link from "next/link";

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
        </section>
      </div>
    </main>
  );
}