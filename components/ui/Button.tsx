// components/ui/Button.tsx
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-none font-bold uppercase tracking-[0.15em] transition-all duration-150 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-light",
        outline: "border-1 border-white/30 text-foreground hover:border-primary hover:text-primary",
        ghost: "text-muted-foreground hover:text-primary",
      },
      size: {
        sm: "px-5 py-2.5 text-[11px]",
        md: "px-6 py-3 text-xs",
        lg: "px-8 py-3.5 text-sm",
        xl: "px-10 py-4.5 text-base"
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type Variants = VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> & Variants) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ComponentProps<typeof Link> & Variants) {
  return <Link className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}