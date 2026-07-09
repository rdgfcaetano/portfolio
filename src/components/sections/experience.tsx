"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Calendar, GitBranch, Sparkles } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const responsibilities = [
  "Desenvolvimento utilizando React e Next.js",
  "Construção de componentes reutilizáveis",
  "Desenvolvimento de interfaces responsivas",
  "Integração entre páginas",
  "Versionamento utilizando Git e GitHub",
  "Trabalho em equipe seguindo metodologias ágeis",
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Git",
  "GitHub",
  "Tailwind CSS",
];

export function Experience() {
  return (
    <Section id="experiencia" className="min-h-0">
      <Container className="flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="flex flex-col gap-4"
        >
          <span className="text-sm font-medium tracking-wide text-accent">
            Trajetória
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Experiência
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
            className="relative pl-8 sm:pl-10"
          >
            <div
              aria-hidden="true"
              className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-accent via-white/15 to-transparent sm:left-4"
            />
            <div className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-background shadow-[0_0_0_6px_rgba(124,58,237,0.08)] sm:left-1">
              <span className="h-2 w-2 rounded-full bg-accent" />
            </div>

            <Card className="relative overflow-hidden p-6 sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent/70 via-white/20 to-transparent"
              />

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-accent">
                      <BriefcaseBusiness className="h-4 w-4" />
                      Signal Jr.
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                        Desenvolvedor Front-end
                      </h3>
                      <p className="mt-2 text-sm font-medium text-muted-foreground">
                        NIVELA - Território & Patrimônio
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 text-accent" />
                    2025 - Atual
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  <p>
                    Atuo no desenvolvimento do front-end de uma aplicação web
                    para um cliente da área de engenharia agronômica.
                  </p>
                  <p>
                    O projeto tem como objetivo fortalecer a presença digital da
                    empresa, divulgar seus serviços e gerar novos leads através
                    de uma plataforma moderna.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <GitBranch className="h-4 w-4 text-accent" />
                    Responsabilidades
                  </div>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 }}
            className="lg:pt-16"
          >
            <Card className="flex flex-col gap-5 p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    Stack
                  </p>
                  <h3 className="text-base font-semibold text-foreground">
                    Tecnologias
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <Badge
                    key={technology}
                    className="border-white/10 bg-white/[0.03] px-3 py-1.5 text-foreground transition-colors duration-200 hover:border-accent/40 hover:text-accent"
                  >
                    {technology}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.aside>
        </div>
      </Container>
    </Section>
  );
}
