import Image from 'next/image'


export default function CentralIntroSide() {
  return (
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
      <div>
        <p className='text-black'>
          <i>
            "miracles happens everyday"
          </i>
        </p>
      </div>
    </div>
  )
}
