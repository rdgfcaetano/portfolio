"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles } from "lucide-react";

/**
 * Ilustração 100% construída com formas geométricas, gradientes e blur —
 * sem nenhuma imagem externa. As camadas flutuam suavemente em loop
 * para transmitir uma sensação "viva" típica de heroes de startup.
 */
export function HeroIllustration() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="absolute -left-6 -top-10 h-56 w-56 rounded-full bg-accent/30 blur-3xl" />
      <div className="absolute -bottom-10 -right-4 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

      <div
        aria-hidden="true"
        className="absolute inset-8 rounded-3xl opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:18px_18px]"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute h-72 w-72 rounded-full border border-dashed border-white/10"
      />

      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-4 top-6 h-24 w-24 rotate-12 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm sm:right-8 sm:top-10"
      />

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-6 left-0 h-20 w-20 -rotate-6 rounded-2xl bg-gradient-to-br from-accent to-indigo-500 opacity-80 sm:left-4"
      />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex h-40 w-40 flex-col items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-md sm:h-48 sm:w-48"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20">
          <Code2 className="h-6 w-6 text-accent" />
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <div className="h-2 w-20 rounded-full bg-white/10" />
          <div className="h-2 w-14 rounded-full bg-white/10" />
        </div>
        <Sparkles className="absolute -right-3 -top-3 h-5 w-5 text-accent" />
      </motion.div>
    </div>
  );
}