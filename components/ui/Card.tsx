import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, children, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("border border-border bg-card p-6 transition-colors hover:border-primary/50", className)}
      {...props}
    >
      {children}
    </div>
  );
}