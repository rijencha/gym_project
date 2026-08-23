import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { trainers } from "@/lib/data";

const images = ["/images/trainer-1.jpg", "/images/trainer-2.jpg"];

export function Coaches() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading eyebrow="Coaches" title="Who you'll train with" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {trainers.map((t, i) => (
            <div key={t.name} className="border border-border bg-card">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={images[i]}
                  alt={`${t.name}, ${t.role} at IRONHAUS`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-eyebrow">{t.role}</p>
                <h3 className="mt-2 text-2xl">{t.name}</h3>
                <p className="font-sans mt-3 text-sm text-muted-foreground">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <ButtonLink href="/trainers" variant="outline" className="mt-10">
          Meet the team
        </ButtonLink>
      </div>
    </section>
  );
}