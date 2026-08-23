// components/layout/Footer.tsx
import { GYM } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const socials = [
  { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
  { href: "https://facebook.com", icon: FaFacebookF, label: "Facebook" },
  { href: "https://youtube.com", icon: FaYoutube, label: "YouTube" },
];

const explore = [
  { href: "/services", label: "Services" },
  { href: "/classes", label: "Class schedule" },
  { href: "/trainers", label: "Trainers" },
  { href: "/gallery", label: "Gallery" },
];

const branches = [
  { href: "/branches", label: "Jhamsikhel Flagship" },
  { href: "/branches", label: "Baluwatar" },
  { href: "/branches", label: "Pokhara Lakeside" },
];


export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-background">
      {/* faint grid texture in the background */}
      <div className="rule-grid pointer-events-none absolute inset-0 opacity-[0.03]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        {/* Top CTA strip */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-border pb-12 sm:flex-row sm:items-end">
          <div>
            <span className="text-eyebrow">Ready when you are</span>
            <h3 className="mt-3 max-w-md text-4xl sm:text-5xl">
              Start <span className="heat-text">training</span> today.
            </h3>
          </div>
          <Link
            href="/contact"
            className="font-sans group inline-flex items-center gap-2 border border-border px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Claim free trial
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-4">
          {/* Logo + tagline + socials */}
          <div>
            <Link href="/" className="font-display text-3xl tracking-tight text-foreground">
              {GYM.name}
            </Link>
            <p className="font-sans mt-4 max-w-[24ch] text-sm leading-relaxed text-muted-foreground">
              {GYM.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-9 items-center justify-center border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[0_0_16px_oklch(0.72_0.19_45/0.35)]"
                >
                  <Icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-sm tracking-[0.16em] text-primary">EXPLORE</h4>
            <ul className="mt-5 space-y-3">
              {explore.map((l) => (
                <li key={l.label} className="font-sans">
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="h-px w-0 bg-primary transition-all group-hover:w-3" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="font-display text-sm tracking-[0.16em] text-primary">BRANCHES</h4>
            <ul className="mt-5 space-y-3">
              {branches.map((l, i) => (
                <li key={i} className="font-sans">
                  <Link
                    href={l.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="h-px w-0 bg-primary transition-all group-hover:w-3" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm tracking-[0.16em] text-primary">CONTACT</h4>
            <ul className="font-sans mt-5 space-y-3 text-sm text-muted-foreground">
              <li>{GYM.address}</li>
              <li>
                <Link href={`tel:${GYM.phone}`} className="transition-colors hover:text-foreground">
                  {GYM.phone}
                </Link>
              </li>
              <li>
                <Link href={`mailto:${GYM.email}`} className="transition-colors hover:text-foreground">
                  {GYM.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="font-sans flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs uppercase tracking-[0.16em] text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} {GYM.name}. All rights reserved.</span>
          <span>Est. {GYM.established} — {GYM.location}</span>
        </div>
      </div>
    </footer>
  );
}