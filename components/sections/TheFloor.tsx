import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  "6 lifting platforms with competition bars",
  "Dedicated boxing ring and bag zone",
  "Sauna, cold plunge and compression recovery",
  "Open 05:00 – 22:00, every single day",
];

export function TheFloor() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[7/5] w-full border border-border">
          <Image
            src="/images/gym-floor.jpg"
            alt="IRONHAUS training floor with racks and dumbbells"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="The floor"
            title="Equipment that holds up"
            description="Competition bars, calibrated plates, six platforms, sled turf and a recovery room that actually gets used."
          />
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {features.map((f) => (
              <li key={f} className="font-sans py-4 text-sm text-muted-foreground">
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}