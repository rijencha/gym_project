import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { classes } from "@/lib/data";

export function ClassLineup() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="This week" title="Class lineup" />
      <div className="mt-12 divide-y divide-border border-y border-border">
        {classes.map((c) => (
          <div key={c.name} className="flex flex-wrap items-baseline justify-between gap-4 py-6">
            <div>
              <span className="font-mono text-xs text-primary">{c.time}</span>
              <h3 className="mt-1 text-2xl">{c.name}</h3>
            </div>
            <div className="font-mono text-right text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <div>{c.day}</div>
              <div className="mt-1">{c.coach}</div>
            </div>
          </div>
        ))}
      </div>
      <ButtonLink href="/classes" variant="outline" className="mt-10">
        Full schedule
      </ButtonLink>
    </section>
  );
}