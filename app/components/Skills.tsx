"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLaravel,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiNextdotjs,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiVercel,
  SiRender,
  SiShadcnui,
  SiPostman,
} from "react-icons/si";

interface SkillItem {
  name: string;
  icon: React.ElementType;
  color?: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    ],
  },
  {
    title: "UI & Styling",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
      { name: "Shadcn UI", icon: SiShadcnui, color: "#FFFFFF" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
    ],
  },
  {
    title: "Database & ORM",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
    ],
  },
  {
    title: "Tools & Deployment",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Render", icon: SiRender, color: "#FFFFFF" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-black py-20 text-white sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            Technical <span className="text-white/90">Skills</span>
          </h2>

          <div className="mx-auto mt-4 h-0.5 w-20 bg-white/60" />
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.1,
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Category Title */}
              <div className="mb-5 flex items-center gap-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/90">
                  {category.title}
                </h3>

                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Skills Grid */}
              <motion.div
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  staggerChildren: 0.1,
                }}
                viewport={{ once: true, amount: 0.1 }}
              >
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                      viewport={{ once: true }}
                      className="h-full"
                    >
                      <div className="group relative flex h-full min-h-[160px] flex-col items-center justify-center rounded-2xl border border-white/20 bg-black/80 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-white/40 hover:shadow-lg hover:shadow-white/5">
                        {/* Icon */}
                        <Icon
                          className="h-12 w-12 transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14"
                          style={{
                            color: skill.color || "#FFFFFF",
                          }}
                        />

                        {/* Skill Name */}
                        <span className="mt-4 text-center text-sm font-medium text-white/80 transition-colors duration-300 group-hover:text-white">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}