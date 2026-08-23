import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="What we do"
        title="Six ways to train"
        description="Every service is coach-led. Nothing here is a machine circuit you figure out alone."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Card key={s.id}>
            <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 text-2xl">{s.title}</h3>
            <p className="font-sans mt-3 text-sm text-muted-foreground">{s.blurb}</p>
          </Card>
        ))}
      </div>
      <Link
        href="/services"
        className="font-mono mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-primary"
      >
        All services <ArrowRight className="size-4" />
      </Link>
    </section>
  );
}