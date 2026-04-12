"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      aria-label="Contact"
      className="relative px-8 py-24 md:px-12 md:py-40"
    >
      {/* Divider */}
      <div
        className="mb-16 h-px w-full"
        style={{ background: "rgba(255,255,255,0.06)" }}
        aria-hidden="true"
      />

      {/* Subtle blue glow at the bottom of the page */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            className="font-mono mb-6 block text-xs tracking-widest uppercase"
            style={{ color: "#3b82f6", letterSpacing: "0.2em" }}
          >
            Contact
          </span>

          <h2
            className="font-display mb-3 text-3xl font-black md:text-4xl"
            style={{ color: "#3b82f6" }}
          >
            LFGTM.
          </h2>
          <p
            className="font-sans mb-8 text-xl font-semibold"
            style={{ color: "#e8e8e8" }}
          >
            Let&apos;s build something.
          </p>

          {/* Peace-sign Memoji */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 flex justify-center"
            aria-hidden="true"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/IMG_1304.png"
              alt=""
              style={{
                width: "160px",
                height: "auto",
                filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.5))",
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <a
            href="mailto:jefflesser@gmail.com"
            className="font-mono group inline-flex items-center gap-2 border px-6 py-3 text-sm tracking-wide transition-all duration-200"
            style={{
              borderColor: "rgba(59,130,246,0.4)",
              color: "#3b82f6",
              borderRadius: "3px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#3b82f6";
              (e.currentTarget as HTMLElement).style.background =
                "rgba(59,130,246,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(59,130,246,0.4)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            jefflesser@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/jefflesser/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono group inline-flex items-center gap-2 border px-6 py-3 text-sm tracking-wide transition-all duration-200"
            style={{
              borderColor: "rgba(255,255,255,0.1)",
              color: "#888899",
              borderRadius: "3px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(59,130,246,0.4)";
              (e.currentTarget as HTMLElement).style.color = "#3b82f6";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLElement).style.color = "#888899";
            }}
          >
            LinkedIn →
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mt-20 text-center"
      >
        <p className="font-mono text-xs" style={{ color: "#333344" }}>
          © {new Date().getFullYear()} Jeff Lesser
        </p>
      </motion.div>
    </section>
  );
}
