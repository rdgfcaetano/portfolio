import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

/**
 * Representa visualmente um espaço reservado para conteúdo futuro,
 * preservando as proporções e o ritmo do layout final.
 */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("animate-pulse rounded-md bg-white/[0.06]", className)}
    />
  );
}