"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Education() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="education"
      ref={ref}
      aria-label="Education"
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
          className="mb-10"
        >
          <span
            className="font-mono mb-4 block text-xs tracking-widest uppercase"
            style={{ color: "#6366f1", letterSpacing: "0.2em" }}
          >
            Education
          </span>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-sm p-6"
          style={{
            background: "#13131a",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h2
              className="font-sans text-lg font-semibold"
              style={{ color: "#e8e8e8" }}
            >
              University of Colorado, Boulder
            </h2>
            <span
              className="font-sans text-base"
              style={{ color: "#888899" }}
            >
              BA in Economics
            </span>
            <span
              className="font-mono ml-auto text-xs"
              style={{ color: "#555566" }}
            >
              2008
            </span>
          </div>
          <p
            className="font-sans text-sm leading-relaxed"
            style={{ color: "#888899", lineHeight: "1.65" }}
          >
            Focused on microeconomics. Brings an analytical, systems-level lens
            to marketing strategy and competitive thinking.
          </p>
        </motion.article>
      </div>
    </section>
  );
}
