// app/layout.tsx
import type { Metadata } from "next";
import { Anton, Inter, JetBrains_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const displayFont = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const oswaldFont = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Iron Pulse | Strength & Conditioning Gym",
  description: "Coached strength and conditioning gym. Lift heavy, recover smart, repeat.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} ${oswaldFont.variable} h-full antialiased`}
    >
      <body className="font-sans bg-background text-foreground antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}