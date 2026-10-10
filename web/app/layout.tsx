import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <div className="h-dvh w-full text-black flex justify-center items-center ">
          {children}
        </div>
      </body>
    </html>
  );
}
