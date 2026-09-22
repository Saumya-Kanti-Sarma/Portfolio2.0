import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <div className="h-dvh w-full text-black">
          {/* shown only when viewport < 200px */}
          <div className="tiny-screen-block fixed inset-0 z-50 flex-col items-center justify-center bg-white text-white text-center px-2">
            <Image src={"/meme.png"} alt="Annoyned Saumya becasye you are too much smalling his site :)" height={100} width={100} />
            <p className="text-xl font-semibold leading-snug text-black">
              stop messing with my layout
            </p>
          </div>

          <div className="tiny-screen-hide">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
