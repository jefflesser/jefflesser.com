"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    label: "01",
    title: "AI-Powered GTM Systems",
    description:
      "Build automated, AI-driven marketing infrastructure that scales output without scaling headcount.",
  },
  {
    label: "02",
    title: "Full-Stack Marketing",
    description:
      "PMM, brand, demand gen, content, comms, analytics — own the whole function, not just a lane.",
  },
  {
    label: "03",
    title: "Technical Fluency",
    description:
      "Comfortable with APIs, data stacks, SQL, and developer audiences; can talk to engineers and translate for the business.",
  },
  {
    label: "04",
    title: "GTM Strategy",
    description:
      "ICP, positioning, narrative, launch, sales enablement — from 0→1 and beyond.",
  },
  {
    label: "05",
    title: "Lean Team Leadership",
    description:
      "Hire, develop, and run high-output teams; do more with less by design.",
  },
  {
    label: "06",
    title: "Economics-Trained Thinking",
    description:
      "BA in Economics (CU Boulder); brings analytical rigor and systems thinking to every marketing problem.",
  },
];

export function HowIWork() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-i-work"
      ref={ref}
      aria-label="How I Work"
      className="relative px-6 py-24 md:py-32"
    >
      {/* Divider */}
      <div
        className="mb-16 h-px w-full"
        style={{ background: "rgba(255,255,255,0.06)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span
            className="font-mono mb-4 block text-xs tracking-widest uppercase"
            style={{ color: "#6366f1", letterSpacing: "0.2em" }}
          >
            How I Work
          </span>
          <h2
            className="font-sans text-2xl font-semibold md:text-3xl"
            style={{ color: "#e8e8e8" }}
          >
            Approach & Skills
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <article
                className="group h-full rounded-sm p-6 transition-all duration-200"
                style={{
                  background: "#13131a",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(99,102,241,0.3)";
                  (e.currentTarget as HTMLElement).style.background = "#15151f";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.background = "#13131a";
                }}
              >
                <span
                  className="font-mono mb-4 block text-xs"
                  style={{ color: "#6366f1" }}
                >
                  {card.label}
                </span>
                <h3
                  className="font-sans mb-3 text-base font-semibold"
                  style={{ color: "#e8e8e8" }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "#888899", lineHeight: "1.65" }}
                >
                  {card.description}
                </p>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
