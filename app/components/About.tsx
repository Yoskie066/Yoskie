

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
                Hi! I'm <strong className="text-white">Einon Cris O. Alcantara</strong>, a Computer Science student
                at Cavite State University – Cavite City Campus. I am passionate about
                technology and software development, with a strong interest in building
                modern, scalable, and user-friendly web applications.
              </p>

              <p>
                My expertise includes the <strong className="text-white">MERN Stack</strong> (MongoDB, Express.js, React, and
                Node.js) and <strong className="text-white">PERN Stack</strong> (PostgreSQL, Express.js, React, and Node.js),
                along with other modern web technologies. I have experience developing
                both frontend and backend applications, designing RESTful APIs, and
                creating responsive and interactive user interfaces.
              </p>

              <p>
                I enjoy solving real-world problems through code, continuously learning
                new technologies, and improving my skills as a developer. Whether it's
                building intuitive user experiences on the frontend or developing robust
                backend systems, I am always eager to take on new challenges.
              </p>

              <p>
                My goal is to become a highly skilled <strong className="text-white">Software Developer</strong> and eventually
                pursue a career as a <strong className="text-white">Software Engineer</strong>, where I can contribute to
                innovative projects, create impactful solutions, and grow alongside a
                talented team of professionals.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}