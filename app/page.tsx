import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { HowIWork } from "@/components/how-i-work";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    /* Outer shell: plain dark bg, no texture — texture lives inside the container only */
    <main style={{ background: "#0d0d10" }}>
      {/*
        Centered column — this is the single width authority for the whole page.
        Border-x creates the vertical "rails" that contain the dot grid.
        Outside this div: solid dark background, no texture.
        Inside: subtle dot grid pattern.
      */}
      <div
        className="relative mx-auto"
        style={{
          maxWidth: "960px",
          borderLeft: "1px solid rgba(255,255,255,0.09)",
          borderRight: "1px solid rgba(255,255,255,0.09)",
          /* Dot grid — contained to this column */
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <Hero />
        <About />
        <HowIWork />
        <Experience />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
