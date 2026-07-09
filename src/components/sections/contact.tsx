"use client";

import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Send } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EMAIL = "rodrigofcaetano14@gmail.com";
const RESUME_URL = "/curr%C3%ADculo-rodrigo-caetano.pdf";

const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/rdgfcaetano",
    icon: Github,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rodrigo-caetano-ba64b6367/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
  {
    label: "Currículo",
    href: RESUME_URL,
    icon: Download,
    download: true,
  },
];

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent("Contato pelo portfólio");
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
    );

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <Section id="contato" className="relative min-h-0 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-px w-[min(920px,80vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <div className="absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute bottom-12 right-[12%] h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <Container className="relative grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,1fr)] lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="flex flex-col gap-7"
        >
          <div className="flex flex-col gap-4">
            <span className="text-sm font-medium tracking-wide text-accent">
              Contato
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Vamos conversar?
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Estou sempre aberto para conversar sobre tecnologia,
              desenvolvimento de software, oportunidades de estágio ou novos
              projetos.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            {contactLinks.map(({ label, href, icon: Icon, external, download }) => (
              <motion.a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                download={download}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 420, damping: 24 }}
                className={`${buttonVariants({
                  variant: label === "Email" ? "primary" : "outline",
                  size: "md",
                })} group`}
              >
                <Icon className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
                {label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-card/90 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur sm:p-6"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
            <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="relative flex flex-col gap-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Nome
                </span>
                <input
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  className="h-11 rounded-xl border border-white/10 bg-background/60 px-4 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground/60 focus:border-accent/50"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="h-11 rounded-xl border border-white/10 bg-background/60 px-4 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground/60 focus:border-accent/50"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Mensagem
              </span>
              <textarea
                name="message"
                placeholder="Escreva sua mensagem"
                rows={6}
                className="resize-none rounded-xl border border-white/10 bg-background/60 px-4 py-3 text-sm leading-relaxed text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground/60 focus:border-accent/50"
              />
            </label>

            <motion.button
              type="submit"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 24 }}
              className={`${buttonVariants({ variant: "primary", size: "lg" })} w-full`}
            >
              Enviar Mensagem
              <Send className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.form>
      </Container>
    </Section>
  );
}
