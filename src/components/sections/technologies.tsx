"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const iconBaseUrl =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const technologies = [
  {
    name: "React",
    icon: `${iconBaseUrl}/react/react-original.svg`,
  },
  {
    name: "Next.js",
    icon: `${iconBaseUrl}/nextjs/nextjs-original.svg`,
    invertIcon: true,
  },
  {
    name: "TypeScript",
    icon: `${iconBaseUrl}/typescript/typescript-original.svg`,
  },
  {
    name: "JavaScript",
    icon: `${iconBaseUrl}/javascript/javascript-original.svg`,
  },
  {
    name: "Java",
    icon: `${iconBaseUrl}/java/java-original.svg`,
  },
  {
    name: "Python",
    icon: `${iconBaseUrl}/python/python-original.svg`,
  },
  {
    name: "MySQL",
    icon: `${iconBaseUrl}/mysql/mysql-original.svg`,
  },
  {
    name: "PostgreSQL",
    icon: `${iconBaseUrl}/postgresql/postgresql-original.svg`,
  },
  {
    name: "Git",
    icon: `${iconBaseUrl}/git/git-original.svg`,
  },
  {
    name: "GitHub",
    icon: `${iconBaseUrl}/github/github-original.svg`,
    invertIcon: true,
  },
  {
    name: "HTML",
    icon: `${iconBaseUrl}/html5/html5-original.svg`,
  },
  {
    name: "CSS",
    icon: `${iconBaseUrl}/css3/css3-original.svg`,
  },
  {
    name: "Tailwind CSS",
    icon: `${iconBaseUrl}/tailwindcss/tailwindcss-original.svg`,
  },
  {
    name: "React Native",
    icon: `${iconBaseUrl}/react/react-original.svg`,
  },
];

export function Technologies() {
  return (
    <Section id="tecnologias" className="min-h-0">
      <Container className="flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="flex flex-col gap-4"
        >
          <span className="text-sm font-medium tracking-wide text-accent">
            Stack
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Tecnologias
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-7">
          {technologies.map((technology, index) => (
            <motion.div
              key={technology.name}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{
                duration: 0.45,
                ease: EASE_OUT,
                delay: index * 0.035,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-4 shadow-[0_14px_44px_rgba(0,0,0,0.16)] transition-colors duration-300 hover:border-accent/35"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />
                <div className="absolute -top-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-accent/15 blur-2xl" />
              </div>

              <div className="relative flex min-h-24 flex-col items-center justify-center gap-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-colors duration-300 group-hover:border-accent/25 group-hover:bg-white/[0.05]">
                  <Image
                    src={technology.icon}
                    alt=""
                    aria-hidden="true"
                    width={28}
                    height={28}
                    unoptimized
                    className={`h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110 ${
                      technology.invertIcon ? "invert" : ""
                    }`}
                  />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {technology.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
