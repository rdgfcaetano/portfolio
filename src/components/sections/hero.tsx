"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { HeroIllustration } from "@/components/sections/hero-illustration";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[60svh] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(124,58,237,0.16),transparent)]"
      />

      <Container className="relative grid grid-cols-1 items-center gap-16 py-32 lg:grid-cols-2 lg:gap-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6 text-center lg:text-left"
        >
          <motion.span
            variants={itemVariants}
            className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground lg:mx-0"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Disponível para novos projetos
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Olá, eu sou{" "}
            <span className="bg-gradient-to-r from-accent to-indigo-400 bg-clip-text text-transparent">
              Rodrigo Caetano
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg font-medium text-muted-foreground sm:text-xl"
          >
            Desenvolvedor Front-end na Signal Jr.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0"
          >
            Sou estudante de Sistemas de Informação na Universidade Federal
            Rural do Rio de Janeiro e atualmente atuo como Desenvolvedor
            Front-end na Signal Jr, desenvolvendo soluções web utilizando
            React e Next.js para clientes reais.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-2 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <motion.a
              href="#projetos"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={`${buttonVariants({ variant: "primary", size: "lg" })} group`}
            >
              Ver Projetos
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </motion.a>

            <motion.a
              href="/curr%C3%ADculo-rodrigo-caetano.pdf"
              download
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={`${buttonVariants({ variant: "outline", size: "lg" })} group`}
            >
              Download Currículo
              <Download className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.3 }}
          className="relative mx-auto aspect-square w-full max-w-sm sm:max-w-md lg:mx-0 lg:aspect-auto lg:h-[420px] lg:max-w-none"
        >
          <HeroIllustration />
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute inset-x-0 bottom-10 flex justify-center"
      >
        <ChevronDown className="h-5 w-5 animate-bounce text-muted-foreground" />
      </motion.div>
    </section>
  );
}
