import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { HowIWork } from "@/components/how-i-work";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <HowIWork />
      <Experience />
      <Education />
      <Contact />
    </main>
  );
}
