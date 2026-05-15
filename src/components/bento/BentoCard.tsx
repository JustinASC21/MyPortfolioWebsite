import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function BentoCard({
  className,
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[2.5rem] border border-border bg-card",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}