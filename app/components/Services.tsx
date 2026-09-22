"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Link as LinkIcon,
  Cloud,
  Layout,
  Layers,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Frontend Development",
    description:
      "Building responsive UIs with React, Next.js, TypeScript, Tailwind CSS, Material UI, and Shadcn UI.",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Backend Development",
    description:
      "Developing server-side apps with Node.js, Express.js, PHP, Laravel, and Prisma ORM.",
  },
  {
    icon: <LinkIcon className="w-6 h-6" />,
    title: "API Integration",
    description:
      "Integrating RESTful APIs, OAuth authentication, and third-party services.",
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Deployment & Hosting",
    description:
      "Deploying web apps on Vercel and Render with Git and cloud databases.",
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "UI/UX Design",
    description:
      "Designing clean interfaces with Material UI, Shadcn UI, and Tailwind CSS — responsive and accessible.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Full-Stack Development",
    description:
      "End-to-end development using MERN, PERN, and PHP/Laravel stacks with MongoDB, PostgreSQL, and MySQL.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-black text-white py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            What <span className="text-white/90">I Do?</span>
          </h2>
          <div className="w-20 h-0.5 bg-white/60 mx-auto mt-4" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className={cn(
                "group relative bg-black/80 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 h-full",
                "hover:shadow-lg hover:shadow-white/5 hover:-translate-y-2"
              )}>
                <style jsx>{`
                  @keyframes borderGlow {
                    0% {
                      border-color: rgba(180, 180, 180, 0.2);
                      box-shadow: 0 0 0px rgba(200, 200, 200, 0);
                    }
                    50% {
                      border-color: rgba(220, 220, 220, 0.7);
                      box-shadow: 0 0 20px rgba(200, 200, 200, 0.3);
                    }
                    100% {
                      border-color: rgba(180, 180, 180, 0.2);
                      box-shadow: 0 0 0px rgba(200, 200, 200, 0);
                    }
                  }
                  .glowing-border {
                    animation: borderGlow 2.5s ease-in-out infinite;
                  }
                `}</style>

                <CardHeader className="items-center text-center pt-6">
                  <div className="flex justify-center text-white mb-2">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="text-center pb-6">
                  <p className="text-white/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}