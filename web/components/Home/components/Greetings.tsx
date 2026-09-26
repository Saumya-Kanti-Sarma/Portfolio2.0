"use client"

import { useEffect, useState } from "react"

const greetings = [
  { text: "Hello:)", lang: "en", font: "'Inter'" },
  { text: "नमस्ते", lang: "hi", font: "'Noto Sans Devanagari'" },      // Hindi
  { text: "Hola!", lang: "en", font: "'Inter'" },                       // Spanish
]

// Split into grapheme clusters so conjuncts and vowel signs don't break mid-typing
const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" })
const items = greetings.map((g) => ({
  ...g,
  chars: Array.from(segmenter.segment(g.text), (s) => s.segment),
}))

const TYPE_MS = 150    // speed of typing each character
const DELETE_MS = 80   // speed of erasing each character
const HOLD_MS = 1000   // pause once the full word is typed
const GAP_MS = 250     // pause on the empty line before the next word

const Greetings = () => {
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const total = items[index].chars.length
    let t: ReturnType<typeof setTimeout>

    if (!deleting) {
      if (count < total) {
        t = setTimeout(() => setCount((c) => c + 1), TYPE_MS)
      } else {
        t = setTimeout(() => setDeleting(true), HOLD_MS)
      }
    } else {
      if (count > 0) {
        t = setTimeout(() => setCount((c) => c - 1), DELETE_MS)
      } else {
        t = setTimeout(() => {
          setDeleting(false)
          setIndex((i) => (i + 1) % items.length)
        }, GAP_MS)
      }
    }

    return () => clearTimeout(t)
  }, [index, count, deleting])

  const current = items[index]

  return (
    <h1
      lang={current.lang}
      className="text-6xl md:text-8xl font-black leading-tight tracking-tight min-h-[1.3em]"
      style={{
        color: "var(--black)",
        fontFamily: `${current.font}, system-ui, sans-serif`,
      }}
    >
      {current.chars.slice(0, count).join("")}
      <span className="animate-blink font-thin">|</span>
    </h1>
  )
}

export default Greetings