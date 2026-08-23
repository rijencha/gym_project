import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { plans } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Membership" title="Simple pricing" />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={cn("border bg-card p-8", p.featured ? "border-primary" : "border-border")}
          >
            {p.featured ? <p className="text-eyebrow mb-3">Most popular</p> : null}
            <h3 className="text-2xl">{p.name}</h3>
            <div className="mt-5 flex items-baseline gap-2">
              <span className="font-display text-4xl">{p.price}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {p.per}
              </span>
            </div>
            <ul className="font-sans mt-6 space-y-2 text-sm text-muted-foreground">
              {p.perks.map((perk) => (
                <li key={perk}>— {perk}</li>
              ))}
            </ul>
            <ButtonLink
              href="/contact"
              variant={p.featured ? "primary" : "outline"}
              className="mt-8 w-full"
            >
              Get started
            </ButtonLink>
          </div>
        ))}
      </div>
    </section>
  );
}