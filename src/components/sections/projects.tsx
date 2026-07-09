"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    name: "NIVELA",
    description:
      "Desenvolvimento de um website institucional para uma empresa da área de engenharia agronômica, focado em divulgação de serviços e captação de novos clientes.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    accent: "from-emerald-400/20 via-accent/20 to-cyan-400/20",
    projectUrl: "https://github.com/rdgfcaetano/Nivela",
    githubUrl: "https://github.com/rdgfcaetano/Nivela",
  },
  {
    name: "GymManager",
    description:
      "Sistema desktop desenvolvido em Java Swing para gerenciamento de academias. Possui controle de alunos, funcionários, planos, treinos e banco de dados.",
    technologies: ["Java", "Swing", "MySQL"],
    accent: "from-orange-400/20 via-red-400/10 to-accent/20",
    projectUrl: "https://github.com/rdgfcaetano/GymManager",
    githubUrl: "https://github.com/rdgfcaetano/GymManager",
  },
  {
    name: "Signal Finance",
    description:
      "Aplicativo mobile em desenvolvimento. Atuei como gerente do projeto, realizando organização da equipe, planejamento das entregas e acompanhamento das sprints. !Projeto atualmente pausado para realização do *Nivela*! ",
    technologies: ["React Native", "TypeScript", "Git"],
    accent: "from-blue-400/20 via-accent/20 to-fuchsia-400/20",
    projectUrl: "https://github.com/rdgfcaetano/Signal-Finance",
    githubUrl: "https://github.com/rdgfcaetano/Signal-Finance",
  },
];

export function Projects() {
  return (
    <Section id="projetos" className="min-h-0">
      <Container className="flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="flex flex-col gap-4"
        >
          <span className="text-sm font-medium tracking-wide text-accent">
            Portfólio
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Projetos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{
                duration: 0.55,
                ease: EASE_OUT,
                delay: index * 0.08,
              }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition-shadow duration-300 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(0,0,0,0.34)]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
              </div>

              <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-white/[0.03]">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                <div className="absolute inset-6 rounded-2xl border border-white/10 bg-background/35 shadow-2xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-[1.03]">
                  <div className="flex h-full flex-col justify-between p-5">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-24 rounded-full bg-white/25" />
                      <div className="h-2 w-36 rounded-full bg-white/15" />
                      <div className="h-2 w-20 rounded-full bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-1 flex-col gap-5 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      className="bg-white/[0.03] text-muted-foreground"
                    >
                      {technology}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`${buttonVariants({ variant: "primary", size: "sm" })} flex-1`}
                  >
                    Ver Projeto
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`${buttonVariants({ variant: "outline", size: "sm" })} flex-1`}
                  >
                    GitHub
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
