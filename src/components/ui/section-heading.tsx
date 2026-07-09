import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface SectionHeadingProps {
  eyebrow: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <span className="text-sm font-medium tracking-wide text-accent">
        {eyebrow}
      </span>
      <Skeleton
        className={cn("h-9 w-64 sm:h-10 sm:w-80", align === "center" && "mx-auto")}
      />
      <Skeleton
        className={cn("h-4 w-full max-w-md", align === "center" && "mx-auto")}
      />
    </div>
  );
}