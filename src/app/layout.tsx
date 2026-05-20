import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "2pmFIX — People Operations for Founders Building Something Lasting",
  description:
    "2pmFIX is a People Operations consulting boutique helping founders and organizational leaders translate human potential into business outcomes. Future-focused. Inspire curiosity. eXtreme impact.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
