import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Yoskie Portfolio",
    template: "%s | Yoskie Portfolio",
  },
  description:
    "Welcome to my portfolio. This is where I showcase my work, ideas, and passion for creating meaningful digital experiences. Take a look around to explore my projects and see how I turn concepts into functional and user-friendly solutions.",
  keywords: ["portfolio", "web developer", "Yoskie", "creative", "projects"],
  authors: [{ name: "Yoskie" }],
  icons: {
    icon: "/Yoskie.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-black text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}