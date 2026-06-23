"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaEnvelope, FaLinkedin, FaGithub, FaGitlab } from "react-icons/fa";

const contacts = [
  {
    name: "Gmail",
    icon: <FaEnvelope className="w-5 h-5" />,
    link: "mailto:aeinoncris@gmail.com",
    label: "aeinoncris@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/einon-cris-alcantara-6623b52bb/",
    label: "Einon Cris Alcantara",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="w-5 h-5" />,
    link: "https://github.com/Yoskie066",
    label: "Yoskie066",
  },
  {
    name: "GitLab",
    icon: <FaGitlab className="w-5 h-5" />,
    link: "https://gitlab.com/aeinoncris",
    label: "Einon Cris Alcantara",
  },
];

export default function Contact() {
  return (
    <section id="contactUs" className="bg-black text-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Get in <span className="text-white/90">Touch</span>
          </h2>
          <div className="w-20 h-0.5 bg-white/60 mx-auto mt-4" />

        </motion.div>

        <motion.div
          className="max-w-md mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                className="group w-full rounded-full bg-white text-black font-semibold px-6 py-3 h-auto text-sm shadow-lg transition-all hover:scale-105 hover:bg-black hover:text-white hover:shadow-white/10 border border-white/20 justify-start gap-4"
              >
                <a
                  href={contact.link}
                  target={contact.name !== "Gmail" ? "_blank" : undefined}
                  rel={contact.name !== "Gmail" ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center"
                >
                  <span className="text-black group-hover:text-white transition-colors">
                    {contact.icon}
                  </span>
                  <span className="flex flex-col items-start">
                    <span className="font-semibold text-sm group-hover:text-white transition-colors">
                      {contact.name}
                    </span>
                    <span className="text-xs text-black/60 group-hover:text-white/70 transition-colors">
                      {contact.label}
                    </span>
                  </span>
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}