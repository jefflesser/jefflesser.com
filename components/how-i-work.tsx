"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    title: "AI-Powered GTM Systems",
    description:
      "I build automated, AI-driven marketing infrastructure that scales output without scaling headcount.",
  },
  {
    title: "Full-Stack Marketing",
    description:
      "Product marketing, brand, demand gen, content, and more. I own the whole function, not just a lane.",
  },
  {
    title: "Technical Fluency",
    description:
      "Confident with APIs, SDKs, MCPs, and developer audiences. More than a marketer, not quite an engineer.",
  },
  {
    title: "GTM Strategy",
    description:
      "ICP, positioning, narrative, launch, sales enablement and more from 0 → 1 and beyond.",
  },
  {
    title: "Lean Team Leadership",
    description:
      "I like to hire, develop, and run lean, high-output teams; do more with less by design.",
  },
  {
    title: "Economics-Trained Thinking",
    description:
      "I bring analytical rigor and systems thinking to every marketing problem.",
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
      className="relative px-8 py-24 md:px-12 md:py-32"
    >
      {/* Divider */}
      <div
        className="mb-16 h-px w-full"
        style={{ background: "rgba(255,255,255,0.06)" }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12 flex items-end justify-between gap-6"
      >
        <div>
          <span
            className="font-mono mb-4 block text-xs tracking-widest uppercase"
            style={{ color: "#3b82f6", letterSpacing: "0.2em" }}
          >
            How I Work
          </span>
          <h2
            className="font-sans text-2xl font-semibold md:text-3xl"
            style={{ color: "#e8e8e8" }}
          >
            Approach &amp; Skills
          </h2>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/IMG_1305.png"
          alt=""
          aria-hidden="true"
          style={{
            width: "130px",
            height: "auto",
            flexShrink: 0,
            filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.5))",
          }}
        />
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
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
                  "rgba(59,130,246,0.3)";
                (e.currentTarget as HTMLElement).style.background = "#12131d";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.background = "#13131a";
              }}
            >
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
    </section>
  );
}
