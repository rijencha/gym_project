import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { GYM } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <Image
        src="/images/hero-lift.jpg"
        alt="Athlete lifting a heavy barbell at IRONHAUS"
        fill
        priority
        className="object-cover opacity-45 scale-110"
        style={{ objectPosition: "65% 15%" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />

      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-40">
        <p className="text-eyebrow mb-6">{GYM.address}</p>
        <h1 className="max-w-3xl text-[clamp(3rem,11vw,7.5rem)]">
          Lift heavy.
          <br />
          <span className="heat-text">Recover smart.</span>
          <br />
          Repeat.
        </h1>
        <p className="font-sans mt-8 max-w-lg text-muted-foreground">
          {GYM.name} is a coached strength and conditioning gym. Real platforms, real programming
          and a floor that never gets crowded out of usefulness.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/contact" size="xl" className="font-sans font-medium tracking-[0.25em]">
            Claim free trial week
          </ButtonLink>
          <ButtonLink href="/classes" variant="outline" size="lg" className="font-sans font-medium uppercase tracking-[0.25em]">
            See the schedule
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}