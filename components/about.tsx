"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const interests = [
  { emoji: "🎣", label: "fly fishing" },
  { emoji: "🏂", label: "snowboarding" },
  { emoji: "🚴", label: "bikes" },
  { emoji: "🍜", label: "food" },
  { emoji: "🍻", label: "beer" },
  { emoji: "🥃", label: "amaro" },
  { emoji: "🎧", label: "music" },
  { emoji: "📚", label: "reading" },
  { emoji: "📈", label: "investing" },
  { emoji: "🖋", label: "tattoos" },
  { emoji: "💻", label: "technology" },
];

const photos = [
  { src: "/IMG_1302.png", alt: "Jeff waving" },
  { src: "/IMG_1303.png", alt: "Jeff on laptop" },
  { src: "/IMG_1304.png", alt: "Jeff peace sign" },
  { src: "/IMG_1305.png", alt: "Jeff smiling" },
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      aria-label="About Jeff Lesser"
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
      >
        <span
          className="font-mono mb-8 block text-xs tracking-widest uppercase"
          style={{ color: "#3b82f6", letterSpacing: "0.2em" }}
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
          I bring 15+ years building and running marketing at B2B tech startups. My
          expertise is in sales-led, B2B, technical products with a developer audience.
          I&apos;ve done this at every stage: from pre-PMF to public companies.
        </p>

        <p
          className="font-sans text-lg leading-relaxed md:text-xl"
          style={{ color: "#c8c8d8", fontWeight: 400, lineHeight: "1.75" }}
        >
          I use AI and lean teams to build full-stack marketing functions including
          PMM, brand, demand gen, content, comms, analytics, and more. I believe in
          delivering results by providing context and expecting accountability.
        </p>

        <p
          className="font-sans text-lg leading-relaxed md:text-xl"
          style={{ color: "#c8c8d8", fontWeight: 400, lineHeight: "1.75" }}
        >
          My approach is to build tech-driven GTM systems that let small teams punch 
          well above their weight. Automation, intelligence, and operational rigor that
          allows humans to focus on the work that actually matters.
        </p>
      </motion.div>

      {/* Memoji strip — floats on dark bg, transparent PNGs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 flex items-end justify-between"
        aria-hidden="true"
      >
        {photos.map(({ src, alt }, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: 0.22 + i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ scale: 1.08, y: -4 }}
            style={{ width: "23%" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.5))",
              }}
              onError={(e) => {
                (e.currentTarget.parentElement as HTMLElement).style.display = "none";
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
    </section>
  );
}
