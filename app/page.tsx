import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { TheFloor } from "@/components/sections/TheFloor";
import { Coaches } from "@/components/sections/Coaches";
import { Pricing } from "@/components/sections/Pricing";
import { ClassLineup } from "@/components/sections/Classlinup";

export default function Page() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <TheFloor />
      <ClassLineup />
      <Coaches />
      <Pricing />
    </>
  );
}