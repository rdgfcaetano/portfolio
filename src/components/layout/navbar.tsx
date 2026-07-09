"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/data/navigation";
import { Container } from "@/components/ui/container";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-lg transition-shadow duration-300",
        isScrolled && "shadow-[0_1px_0_0_rgba(255,255,255,0.06)]",
      )}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <a
            href="#top"
            aria-label="Início"
            className="h-8 w-8 rounded-md bg-accent transition-opacity duration-200 hover:opacity-80"
          />

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contato"
            className="hidden h-10 items-center justify-center rounded-full bg-accent px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent/90 md:inline-flex"
          >
            Contato
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors duration-200 hover:bg-white/5 md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-background/95 backdrop-blur-lg md:hidden"
          >
            <Container>
              <ul className="flex flex-col gap-1 py-6">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors duration-200 hover:bg-white/5 hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}