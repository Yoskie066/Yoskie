"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-black text-white overflow-hidden py-20 sm:py-28 lg:py-32">
      <style jsx>{`
        @keyframes borderGlow {
          0% {
            border-color: rgba(180, 180, 180, 0.3);
            box-shadow: 0 0 0px rgba(200, 200, 200, 0);
          }
          50% {
            border-color: rgba(220, 220, 220, 0.8);
            box-shadow: 0 0 25px rgba(200, 200, 200, 0.4);
          }
          100% {
            border-color: rgba(180, 180, 180, 0.3);
            box-shadow: 0 0 0px rgba(200, 200, 200, 0);
          }
        }
        .glowing-border {
          animation: borderGlow 2.5s ease-in-out infinite;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            About <span className="text-white/90">Me</span>
          </h2>

          <div className="w-20 h-0.5 bg-white/60 mx-auto mt-4 mb-8" />

          <div className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl glowing-border">
            <div className="space-y-5 text-white/80 leading-relaxed text-base sm:text-lg text-left">
              <p>
                Hi! I'm <strong className="text-white">Einon Cris O. Alcantara</strong>, a Computer Science graduate
                from Cavite State University – Cavite City Campus. I'm passionate about
                technology and software development, with a strong focus on building
                modern, scalable, and user-friendly web applications.
              </p>

              <p>
                My journey started in <strong className="text-white">2022</strong> during my internship at
                Melham Construction Corporation, where I served as a team co-leader
                building the company's official website. The following year, I dove into
                backend development through an online community — learning <strong className="text-white">PHP</strong>,
                <strong className="text-white"> Laravel</strong>, and <strong className="text-white">MySQL</strong> while building web servers with
                proper MVC architecture, controllers, routes, middleware, and database
                migrations.
              </p>

              <p>
                In <strong className="text-white">2024</strong>, I completed an intensive 6-month full-stack bootcamp
                at <strong className="text-white">Uplift Code Camp</strong>, where I mastered the <strong className="text-white">MERN Stack</strong>
                (MongoDB, Express.js, React, and Node.js) and served as Frontend Developer
                for the Careerly Application group project. Since then, I've expanded into
                the <strong className="text-white">PERN Stack</strong> (PostgreSQL, Express.js, React, and Node.js) and
                explored modern tools like <strong className="text-white">Next.js</strong>, <strong className="text-white">TypeScript</strong>, and <strong className="text-white">Prisma</strong>.
              </p>

              <p>
                In <strong className="text-white">2025</strong>, I expanded my technical foundation by exploring modern
                technologies beyond the MERN stack, then applied this knowledge to build
                my undergraduate thesis — <strong className="text-white">File Tracker</strong>, a Management Information
                System for academic file and task monitoring with faculty and admin roles.
              </p>

              <p>
                Today, I'm applying the technologies I explored by building diverse
                projects that showcase different stacks and design approaches — including
                <strong className="text-white"> Waste Track</strong> (PERN SaaS platform), <strong className="text-white">SixOneCafe</strong> (modern
                landing page), and <strong className="text-white">MindFul</strong> (AI-powered wellness and journaling
                platform with Gemini API).
              </p>

              <p>
                I enjoy solving real-world problems through code, continuously learning
                new technologies, and improving my craft as a developer. Whether it's
                crafting intuitive user experiences on the frontend or architecting
                robust backend systems, I'm always eager to take on new challenges.
              </p>

              <p>
                My goal is to grow into a highly skilled <strong className="text-white">Software Developer</strong> and
                eventually pursue a career as a <strong className="text-white">Software Engineer</strong>, where I can
                contribute to innovative projects, build impactful solutions, and grow
                alongside a talented team of professionals.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}