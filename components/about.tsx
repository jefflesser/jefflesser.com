"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const interests = [
  { emoji: "🎣", label: "fly fishing" },
  { emoji: "🏂", label: "snowboarding" },
  { emoji: "🚴", label: "bikes" },
  { emoji: "🍜", label: "food" },
  { emoji: "🍻", label: "beer" },
  { emoji: "🥃", label: "whiskey" },
  { emoji: "🎧", label: "music" },
  { emoji: "📚", label: "reading" },
  { emoji: "📈", label: "investing" },
  { emoji: "🖋", label: "tattoos" },
  { emoji: "💻", label: "technology" },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      aria-label="About Jeff Lesser"
      className="relative px-6 py-24 md:py-32"
    >
      {/* Divider */}
      <div
        className="mb-16 h-px w-full"
        style={{ background: "rgba(255,255,255,0.06)" }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="font-mono mb-8 block text-xs tracking-widest uppercase"
            style={{ color: "#6366f1", letterSpacing: "0.2em" }}
          >
            About
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5"
        >
          <p
            className="font-sans text-lg leading-relaxed md:text-xl"
            style={{ color: "#e8e8e8", fontWeight: 400, lineHeight: "1.75" }}
          >
            15+ years building and running marketing at B2B tech startups —
            fintech, infrastructure, developer tools. I&apos;ve done this at
            every stage: pre-product, pre-revenue, pre-PMF, and scaling through
            Series B and beyond.
          </p>

          <p
            className="font-sans text-lg leading-relaxed md:text-xl"
            style={{ color: "#c8c8d8", fontWeight: 400, lineHeight: "1.75" }}
          >
            I build full-stack marketing functions — PMM, brand, demand gen,
            content, comms, analytics — as a lean team. No siloed lanes. No
            bloated org charts. Just sharp people doing high-leverage work.
          </p>

          <p
            className="font-sans text-lg leading-relaxed md:text-xl"
            style={{ color: "#c8c8d8", fontWeight: 400, lineHeight: "1.75" }}
          >
            I use AI to build GTM systems that let small teams punch well above
            their weight. Automation, intelligence, and operational rigor — so
            the humans can focus on the work that actually matters.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <p
            className="font-mono mb-4 text-xs tracking-widest uppercase"
            style={{ color: "#888899", letterSpacing: "0.15em" }}
          >
            He/him &nbsp;·&nbsp; Boulder, CO
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {interests.map(({ emoji, label }) => (
              <span
                key={label}
                className="font-sans text-sm"
                style={{ color: "#888899" }}
              >
                {emoji} {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
