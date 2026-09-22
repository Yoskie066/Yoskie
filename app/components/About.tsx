"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-28 lg:py-32"
    >
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            About <span className="text-white/90">Me</span>
          </h2>

          <div className="mx-auto mt-4 mb-8 h-0.5 w-20 bg-white/60" />

          <div className="glowing-border rounded-2xl border border-white/20 bg-black/80 p-6 shadow-xl backdrop-blur-sm sm:p-8 lg:p-10">
            <div className="space-y-6 text-left text-base leading-relaxed text-white/80 sm:text-lg">
              <p>
                Hi! I&apos;m{" "}
                <strong className="text-white">Einon Cris O. Alcantara</strong>, a
                Computer Science graduate from Cavite State University – Cavite
                City Campus and a <strong className="text-white">Full-Stack Web Developer</strong> focused on building modern, scalable, and user-centered web applications using <strong className="text-white">React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL,</strong> and <strong className="text-white">MySQL</strong>.
              </p>

              <p>
                I&apos;ve gained hands-on experience through an internship, online community, bootcamp and personal projects , developing applications with <strong className="text-white">REST APIs, authentication and authorization, Role-Based Access Control (RBAC), database integration, analytics, file management,</strong> and <strong className="text-white">AI-powered features</strong>, including <strong className="text-white">File Tracker</strong>, <strong className="text-white">Waste Track</strong>, <strong className="text-white">SixOneCafe</strong>, and <strong className="text-white">MindFul</strong>.
              </p>

              <p>
                I enjoy solving real-world problems through code, designing reliable backend systems, and creating intuitive user experiences. I&apos;m currently seeking opportunities as a <strong className="text-white">Junior Full-Stack Developer</strong> or <strong className="text-white">Web Developer</strong>, where I can contribute to a collaborative engineering team while continuing to grow toward becoming a <strong className="text-white">Software Engineer</strong>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}