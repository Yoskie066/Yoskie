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
  highlights: string[];
  techStack?: string[];
}

const experiences: ExperienceItem[] = [
  {
    year: "2022",
    duration: "July – August 2022",
    title: "Internship / Co-Leader",
    company: "Melham Construction Corporation",
    icon: Briefcase,
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
    duration: "January – May 2023",
    title: "Backend Developer",
    company: "Online Community",
    icon: Code2,
    highlights: [
      "Built web servers with controllers, routes, and middleware architecture",
      "Implemented database migrations using Laravel and MySQL",
      "Configured local development environments using XAMPP",
      "Contributed to collaborative and open-source projects with co-members",
    ],
    techStack: ["PHP", "Laravel", "MySQL", "XAMPP"],
  },
  {
    year: "2024",
    duration: "July – December 2024",
    title: "Bootcamp / Full-Stack Development",
    company: "Uplift Code Camp",
    icon: GraduationCap,
    highlights: [
      "Completed 6 months of rigorous full-stack training focused on the MERN stack",
      "Served as Frontend Developer for the Careerly Application group project (November – December 2024)",
      "Created multiple web apps with React, Node.js, Express.js, and MongoDB",
      "Applied Tailwind CSS for responsive and modern UI design",
    ],
    techStack: ["React", "Tailwind CSS" , "Node.js", "Express.js", "MongoDB", "RestAPI" , "Gemini API", "Git"],
  },
  {
    year: "2025",
    duration: "March 2025 – 2026",
    title: "Freelance Developer",
    company: "Self-Employed",
    icon: Rocket,
    highlights: [
      "Explored and applied modern web tech (March–July 2025), building sample apps using Next.js, TypeScript and PostgreSQL to broaden full-stack capabilities",
      "Architected and built File Tracker (Sept 2025–2026), a web-based Management Information System (MIS) for CvSU - Cavite City Campus to centralize academic document workflows and deadline tracking",
      "Engineered Role-Based Access Control (RBAC) in File Tracker using the MERN stack for Faculty and Admin (IT Secretary) roles, incorporating full file lifecycle management (File Upload, Task Deliverable, Archiving, and History)",
      "Built an Admin Analytics Dashboard with Chart.js and Tailwind CSS for File Tracker to monitor department-wide submission rates for core task deliverables (Syllabus, TOS, Exams, Instructional Materials)",
      "Developed an automated notice & notification system for File Tracker to deliver real-time deadline reminders to faculty and send instant upload alerts to administrators",
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
      "PostgreSQL",
      "RestAPI",
      "Git"
    ],
  },
  {
    year: "2026",
    duration: "March 2026 – September 2026",
    title: "Personal Projects",
    company: "Self-Employed",
    icon: Sparkles,
    highlights: [
      "Architected and built Waste Track (March–June 2026), a full-stack waste management platform featuring dual-authentication (JWT & Google Auth), Role-Based Access Control (RBAC), interactive activity timeline, and PostgreSQL-powered Admin Analytics with Excel data exports",
      "Designed and deployed SixOneCafe (June–July 2026), a high-performance, mobile-responsive landing page for a local business in Cavite, featuring conversion-focused menu showcases and customer testimonials using Next.js and Tailwind CSS",
      "Developed MindFul (September 2026), an AI-driven mental wellness platform integrating Gemini API to generate context-aware guidance based on user dashboard analytics, daily mood, energy levels, and stress logs",
      "Engineered a centralized Admin Operations Hub and daily journaling system for MindFul using Prisma ORM, MySQL, Material UI, and Node.js to oversee user accounts, aggregate journal trends, and audit AI interaction logs",
    ],
    techStack: [
      "React",
      "TailwindCSS",
      "Material UI",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Prisma",
      "Chart.js",
      "PostgreSQL",
      "MySQL",
      "RestAPI",
      "Gemini API",
      "Git"
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