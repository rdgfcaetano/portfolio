import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/5 bg-card p-6 transition-colors duration-200 hover:border-white/10 sm:p-8",
        className,
      )}
      {...props}
    />
  );
}