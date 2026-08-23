// components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { GYM } from "@/lib/data";
import { ButtonLink } from "../ui/Button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/classes", label: "Classes" },
  { to: "/trainers", label: "Trainers" },
  { to: "/branches", label: "Branches" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-display text-3xl tracking-tight text-foreground"
        >
          {GYM.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => {
            const isActive = pathname === l.to;
            return (
              <Link
                key={l.to}
                href={l.to}
                className={`font-oswald text-[13px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <ButtonLink href="/contact" size="md" className="hidden md:inline-flex font-oswald">
            Join Now
          </ButtonLink>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="text-foreground lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-surface lg:hidden">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 py-4">
            {links.map((l) => {
              const isActive = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className={`font-oswald py-3 text-[13px] font-semibold uppercase tracking-[0.16em] ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}