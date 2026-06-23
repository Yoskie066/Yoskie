"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  techStack: string[];
}

const projects: Project[] = [
  {
    title: "Careerly Application",
    description:
      "Careerly is a career development platform featuring a resume builder with PDF export, an AI-powered interview system that generates questions with real-time feedback and ratings, and a job finder that allows users to search, view, and apply to specific job listings, streamlining the job application process.",
    image: "/Careerly_Application.png",
    github: "https://github.com/Yoskie066/Careerly",
    demo: "https://try-careerly.vercel.app/",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Tailwind CSS",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful API",
      "Gemini API",
      "Vercel",
    ],
  },
  {
    title: "File Tracker",
    description:
      "File Tracker is a Management Information System (MIS) web application designed for academic file and task monitoring with two user roles: Faculty and Admin. Faculty users can submit subjects, upload files, and track the status of their task deliverables, while Admin users can manage faculty accounts, review submitted files, set deadlines, configure system variables, and access analytics for monitoring performance and submissions. The system is built to streamline document submission workflows, improve tracking efficiency, and enhance administrative oversight within an academic environment.",
    image: "/File_Tracker.png",
    github: "https://github.com/Yoskie066/File-Tracker",
    demo: "https://file-tracker-f94d.onrender.com/auth/login",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Tailwind CSS",
      "Chart.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful API",
      "Render",
    ],
  },
  {
    title: "Waste Track",
    description:
      "Waste Track is a SaaS-based waste management platform with Google authentication for both users and admins. Users can submit, collect, and report waste activities, which are then reflected in the system dashboard for tracking and monitoring. Admin users can manage user roles, oversee waste reports and collection activities, and access analytics for data-driven decision-making. The platform is designed to improve waste management efficiency through centralized tracking, reporting, and analytics.",
    image: "/Waste_Track.png",
    github: "https://github.com/Yoskie066/Waste-Track",
    demo: "https://waste-track-lilac.vercel.app/",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Tailwind CSS",
      "Chart.js",
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "RESTful API",
      "Cloudinary",
      "OAuth",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "SixOneCafe Landing Page",
    description:
      "SixOneCafe is a responsive landing page website designed for a café business, featuring sections for About, Menu, Online Orders, Testimonials, and Contact Information. The platform provides a clean and user-friendly interface to showcase café offerings, highlight customer reviews, and enable potential customers to explore products and place orders easily. It is built with modern web development practices to ensure responsiveness, accessibility, and an engaging user experience across all devices.",
    image: "/SixOneCafe_LandingPage.png",
    github: "https://github.com/Yoskie066/SixOneCafe",
    demo: "https://six-one-cafe.vercel.app/",
    techStack: [
      "HTML",
      "CSS",
      "TypeScript",
      "Git",
      "React.js",
      "Next.js",
      "Framer Motion",
      "Vercel",
    ],
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = projects.length;

  const startAutoPlay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const resetAutoPlay = () => {
    if (isAutoPlaying) {
      stopAutoPlay();
      startAutoPlay();
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    resetAutoPlay();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    resetAutoPlay();
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    resetAutoPlay();
  };

  return (
    <section id="projects" className="bg-black text-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            My <span className="text-white/90">Projects</span>
          </h2>
          <div className="w-20 h-0.5 bg-white/60 mx-auto mt-4" />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden"
              >
                <div className="relative w-full h-64 sm:h-80 bg-black flex items-center justify-center overflow-hidden">
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority={currentIndex === 0}
                    loading={currentIndex === 0 ? "eager" : "lazy"}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {projects[currentIndex].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {projects[currentIndex].techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[10px] sm:text-xs font-medium text-white/70 border border-white/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4">
                    <Button
                      asChild
                      className="rounded-full bg-white text-black font-semibold px-5 py-2 h-auto text-sm shadow-lg transition-all hover:scale-105 hover:bg-black hover:text-white hover:shadow-white/10 border border-white/20"
                    >
                      <a
                        href={projects[currentIndex].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <FaGithub className="w-4 h-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      asChild
                      className="rounded-full bg-white text-black font-semibold px-5 py-2 h-auto text-sm shadow-lg transition-all hover:scale-105 hover:bg-black hover:text-white hover:shadow-white/10 border border-white/20"
                    >
                      <a
                        href={projects[currentIndex].demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 sm:-left-6 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full p-2 hover:bg-white/20 transition-all z-10"
            aria-label="Previous project"
          >
            <FaChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full p-2 hover:bg-white/20 transition-all z-10"
            aria-label="Next project"
          >
            <FaChevronRight className="w-5 h-5 text-white" />
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-6"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}