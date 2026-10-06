import { Highlight } from "@/UI/Highlite"
import { HoverTerm, InlineImage } from "./components/InlineParts"

const BottomIntroSlide = () => (
  <div className="mt-6.5 p-2.5 rounded-lg max-[760px]:text-center">
    <h1 className="text-lg md:text-2xl  leading-snug max-w-[1050px]">
      "I was a{" "}
      <HoverTerm
        title="Vibe coder (pre-AI)"
        description="Developers who occasionally code in an unstructured, improvisational style without a detailed plan, enjoying the process of building new tools and technologies for self-paced or open-source projects."
      >
        <span className="font-bold">
          <Highlight>
            VIBE CODER
          </Highlight>
        </span>
      </HoverTerm>{" "}
      way before vibe coding was a thing. Being a nerdy CS freak since my pre school days. I started coding at the age of 14 on my uncle's desktop.
      I started with CMD commands just to look like a hacker among my friends. It was PYTHON who made me fall in love with coding..."" <button className="text-lg text-[#aeaeae]">read more</button>
    </h1>
  </div>
)

export default BottomIntroSlide