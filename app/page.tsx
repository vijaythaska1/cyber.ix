import { Hero } from "@/components/sections/hero";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Services } from "@/components/sections/services";
import { TechStack } from "@/components/sections/tech-stack";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Cyber } from "@/components/sections/cyber";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <FeaturedWork />
      <Services />
      <TechStack />
      <About />
      <Testimonials />
      <Cyber />
    </main>
  );
}