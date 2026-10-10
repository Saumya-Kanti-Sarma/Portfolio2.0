import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saumya Sarma | Full-Stack Engineer",
  description:
    "Meet Saumya Kanti Sarma, also known as Saumya Sarma — a full-stack engineer building websites, applications, browser extensions, software, servers, and SDKs.",
  keywords: [
    "Saumya Sarma",
    "Saumya Kanti Sarma",
    "who is Saumya Sarma",
    "Saumya Sarma portfolio",
    "full-stack engineer",
    "software engineer",
    "web developer",
  ],
  openGraph: {
    title: "Saumya Sarma | Full-Stack Engineer",
    description:
      "The portfolio of Saumya Kanti Sarma, a full-stack engineer who builds across the web and software stack.",
    type: "website",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/s-vector.svg" />
      </head>
      <ThemeProvider
        attribute="data-theme"
        enableSystem={false}
        defaultTheme="light">
        <body className="font-sans">
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
