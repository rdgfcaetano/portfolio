"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Building2, GraduationCap, UserRound } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const aboutParagraphs = [
  "Sou estudante de Sistemas de Informação na UFRRJ e atualmente desenvolvedor Front-end na Signal Jr.",
  "Tenho interesse em desenvolvimento web, experiência do usuário, arquitetura Front-end e soluções que gerem impacto para clientes reais.",
  "Tenho experiência prática com React, Next.js, Java, SQL e Git, participando do desenvolvimento de aplicações e trabalhando em equipe utilizando metodologias ágeis.",
  "Busco evoluir constantemente como desenvolvedor e contribuir para projetos desafiadores.",
];

const profileItems = [
  {
    label: "Nome",
    value: "Rodrigo Caetano",
    icon: UserRound,
  },
  {
    label: "Cargo",
    value: "Desenvolvedor Front-end",
    icon: BriefcaseBusiness,
  },
  {
    label: "Empresa",
    value: "Signal Jr.",
    icon: Building2,
  },
  {
    label: "Universidade",
    value: "UFRRJ",
    icon: GraduationCap,
  },
  {
    label: "Disponibilidade",
    value: "Estágio",
    icon: BriefcaseBusiness,
  },
];

export function About() {
  return (
    <Section id="sobre" className="min-h-0">
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="flex flex-col gap-7"
        >
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium tracking-wide text-accent">
              Sobre
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Sobre mim
            </h2>
          </div>

          <div className="flex max-w-3xl flex-col gap-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 }}
        >
          <Card className="relative overflow-hidden p-6 sm:p-7">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
            />

            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                  Perfil
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  Informações
                </h3>
              </div>
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                Front-end
              </span>
            </div>

            <dl className="flex flex-col divide-y divide-white/10">
              {profileItems.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-foreground sm:text-base">
                      {value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </Card>
        </motion.div>
      </Container>
    </Section>
  );
}
