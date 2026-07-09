import { Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";
import { NAV_ITEMS } from "@/data/navigation";

const SOCIAL_ICONS = [
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    href: "https://github.com/rdgfcaetano",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rodrigo-caetano-ba64b6367/",
  },
  {
    id: "email",
    icon: Mail,
    label: "E-mail",
    href: "mailto:rodrigofcaetano14@gmail.com",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-accent" />
          <Skeleton className="h-4 w-24" />
        </div>

        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {SOCIAL_ICONS.map(({ id, icon: Icon, label, href }) => (
            <a
              key={id}
              href={href}
              target={id === "email" ? undefined : "_blank"}
              rel={id === "email" ? undefined : "noreferrer"}
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors duration-200 hover:border-white/20 hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </Container>

      <Container className="pb-8">
        <p className="text-xs text-muted-foreground">
          © {year} — Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
