import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-6 py-12 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="py-4">
            <div className="font-display text-4xl text-primary sm:text-5xl">{s.value}</div>
            <div className="font-mono mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}