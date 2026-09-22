"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, GraduationCap, Rocket, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ExperienceItem {
  year: string;
  duration: string;
  title: string;
  company: string;
  icon: React.ElementType;
  description: string;
  highlights: string[];
  techStack?: string[];
}

const experiences: ExperienceItem[] = [
  {
    year: "2022",
    duration: "2 months",
    title: "Internship / Team Co-Leader",
    company: "Melham Construction Corporation",
    icon: Briefcase,
    description:
      "Started my professional journey as an intern and co-leader of a small development team tasked with building the company's official website. Contributed to planning, development, and deployment while ensuring all deliverables met the client's expectations.",
    highlights: [
      "Co-developed the MCC Website Webpage as the team's main project",
      "Prepared progress reports to track project milestones and team output",
      "Debugged and resolved issues across the website's frontend and backend",
      "Collaborated with team members during daily standup meetings",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    year: "2023",
    duration: "5 months",
    title: "Backend Developer",
    company: "Online Community",
    icon: Code2,
    description:
      "Joined an online developer community where I collaborated on various projects and learned the fundamentals of backend development. This was where I first encountered PHP, Laravel, and MySQL — building real systems from scratch, including web servers with structured architecture.",
    highlights: [
      "Built web servers with controllers, routes, and middleware architecture",
      "Implemented database migrations using Laravel and MySQL",
      "Configured local development environments using XAMPP",
      "Contributed to collaborative and open-source side projects",
    ],
    techStack: ["PHP", "Laravel", "MySQL", "XAMPP"],
  },
  {
    year: "2024",
    duration: "6 months",
    title: "Bootcamp / Full-Stack Development",
    company: "Uplift Code Camp",
    icon: GraduationCap,
    description:
      "Completed an intensive 6-month full-stack development bootcamp focused on the MERN stack. Built production-ready web applications and worked on a group capstone project called Careerly Application, where I served as a Frontend Developer.",
    highlights: [
      "Completed 6 months of rigorous full-stack training",
      "Served as Frontend Developer for the Careerly Application group project",
      "Created multiple web apps with React, Node.js, Express.js, and MongoDB",
      "Applied Tailwind CSS for responsive and modern UI design",
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
  {
    year: "2025",
    duration: "10 months",
    title: "Freelance Developer",
    company: "Self-Employed",
    icon: Rocket,
    description:
      "Expanded my technical foundation by exploring modern technologies beyond the MERN stack, then applied this knowledge to build my undergraduate thesis — File Tracker, a Management Information System for academic file and task monitoring.",
    highlights: [
      "Explored modern technologies including Next.js, TypeScript, Prisma, and Docker",
      "Developed File Tracker — my undergraduate thesis (2025–2026)",
      "Built a Management Information System with faculty and admin roles for tracking academic files and deadlines",
      "Implemented an analytics dashboard using the MERN stack with Chart.js",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Chart.js",
      "Tailwind CSS",
      "Next.js",
      "TypeScript",
      "Prisma",
      "Docker",
    ],
  },
  {
    year: "2026",
    duration: "6 months · Ongoing",
    title: "Personal Projects",
    company: "Self-Initiated",
    icon: Sparkles,
    description:
      "Applied the modern technologies I explored in 2025 by building diverse full-stack projects that showcase different stacks, design approaches, and problem domains. Each project uses a different tech combination, demonstrating flexibility across the modern web ecosystem.",
    highlights: [
      "Developed Waste Track — a PERN stack SaaS platform applying Express.js and PostgreSQL",
      "Created SixOneCafe Landing Page — an UI-focused project applying Next.js and Framer Motion",
      "Built MindFul — an AI-powered wellness platform applying Prisma, MySQL, and the Gemini API",
      "Continuously exploring modern tools: TypeScript, Docker, Material UI, and Shadcn UI",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "MySQL",
      "Docker",
      "Gemini API",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-black text-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            My <span className="text-white/90">Experience</span>
          </h2>
          <div className="w-20 h-0.5 bg-white/60 mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line - Left aligned */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-white/20" />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Timeline Dot with Icon */}
                  <div className="absolute left-4 sm:left-6 top-6 -translate-x-1/2 z-10">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black border-2 border-white/40 ring-4 ring-black flex items-center justify-center shadow-lg shadow-white/5">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>

                  {/* Card */}
                  <Card
                    className={cn(
                      "bg-black/80 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300",
                      "hover:shadow-lg hover:shadow-white/5 hover:-translate-y-2"
                    )}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                        <span className="px-3 py-1 text-xs font-bold tracking-wider text-black bg-white rounded-full">
                          {exp.year}
                        </span>
                      </div>
                      <CardTitle className="text-lg sm:text-xl font-bold text-white">
                        {exp.title}
                      </CardTitle>
                      <p className="text-sm text-white/60 font-medium">
                        {exp.company}
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-white/70 text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {exp.highlights.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs sm:text-sm text-white/60"
                          >
                            <span className="text-white/80 mt-1">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      {exp.techStack && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.techStack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 text-[10px] sm:text-xs font-medium text-white/70 border border-white/20 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Duration - nasa dulo na */}
                      <div className="pt-3 mt-3 border-t border-white/10">
                        <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-medium text-white/50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          {exp.duration}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}