"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export default function Home() {
  const fullText = "FullStack Web Developer";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 500);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 60 : 100);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8 py-16 relative">
      <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white/90">
              Hi, I'm{" "}
              <span className="text-white font-bold">
                Einon Cris O. Alcantara
              </span>
            </h2>

            <h1 className="mt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              <span>I'm a</span>
              <span className="text-white min-w-[220px] inline-block text-left">
                {displayedText}
                <span className="inline-block w-[2px] h-8 bg-white ml-1 animate-pulse" />
              </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-white/60 leading-relaxed">
              Welcome to my portfolio. This is where I showcase my work, ideas, and passion
              for creating meaningful digital experiences. Take a look around to explore my
              projects and see how I turn concepts into functional and user-friendly solutions.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                asChild
                className="rounded-full bg-white text-black font-semibold px-8 py-3 h-auto text-sm shadow-lg transition-all hover:scale-105 hover:bg-black hover:text-white hover:shadow-white/10 border border-white/20"
              >
                <a
                  href="/Einon_Cris_O.Alcantara-Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  CV Resume
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl" />
              
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 shadow-2xl shadow-white/5">
                <Image
                  src="/Einon_Profile.jpg"
                  alt="Einon Cris O. Alcantara"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 224px, 320px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}