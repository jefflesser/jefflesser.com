"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    let visible = true;
    const interval = setInterval(() => {
      visible = !visible;
      cursor.style.opacity = visible ? "1" : "0";
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Subtle radial gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(99,102,241,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* LFGTM — the statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="font-mono font-black leading-none tracking-tight"
            style={{
              fontSize: "clamp(80px, 14vw, 160px)",
              color: "#6366f1",
              letterSpacing: "-0.02em",
              textShadow: "0 0 80px rgba(99,102,241,0.3)",
            }}
          >
            LFGTM
            <span
              ref={cursorRef}
              style={{
                display: "inline-block",
                width: "0.08em",
                height: "0.85em",
                background: "#6366f1",
                marginLeft: "0.06em",
                verticalAlign: "middle",
                borderRadius: "1px",
                transition: "opacity 0.1s",
              }}
              aria-hidden="true"
            />
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono mt-4 text-sm tracking-widest uppercase"
          style={{ color: "#888899", letterSpacing: "0.25em" }}
        >
          Let&apos;s F***ing Go To Market
        </motion.p>

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 font-sans font-semibold"
          style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "#e8e8e8" }}
        >
          Jeff Lesser
        </motion.h2>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-2 font-sans"
          style={{
            fontSize: "clamp(14px, 1.8vw, 18px)",
            color: "#888899",
            fontWeight: 400,
          }}
        >
          Technical Marketing Leader
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="group font-mono inline-flex items-center gap-2 border px-5 py-2.5 text-sm tracking-wide transition-all duration-200"
            style={{
              borderColor: "rgba(99,102,241,0.4)",
              color: "#6366f1",
              borderRadius: "3px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#6366f1";
              (e.currentTarget as HTMLElement).style.background =
                "rgba(99,102,241,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(99,102,241,0.4)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            View Work{" "}
            <span
              className="transition-transform duration-200 group-hover:translate-y-0.5"
              aria-hidden="true"
            >
              ↓
            </span>
          </a>
          <a
            href="#contact"
            className="group font-mono inline-flex items-center gap-2 px-5 py-2.5 text-sm tracking-wide transition-all duration-200"
            style={{
              background: "#6366f1",
              color: "#ffffff",
              borderRadius: "3px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#4f46e5";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#6366f1";
            }}
          >
            Get in Touch{" "}
            <span
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div
          className="h-10 w-px"
          style={{
            background:
              "linear-gradient(to bottom, rgba(99,102,241,0.6), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
