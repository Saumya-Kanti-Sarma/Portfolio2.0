import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link href="/s-vector.svg" />
        <title> Saumya Kanti Sarma&apos;s Portfolio Website</title>

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
