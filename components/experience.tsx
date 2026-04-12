"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const jobs = [
  {
    company: "Zeal",
    url: "https://zeal.com",
    title: "Head of Marketing",
    dates: "2024–Present",
    bullets: [
      "Building GTM from scratch for embedded payroll infrastructure.",
      "Driving product-market-channel-model fit across all marketing functions.",
    ],
  },
  {
    company: "Unit",
    url: "https://unit.co",
    title: "Director of Product Marketing",
    dates: "2021–2024",
    bullets: [
      "First PMM hire; built the function and team from 0→1.",
      "Marketed embedded banking platform to developers and enterprise buyers.",
    ],
  },
  {
    company: "Aptible",
    url: "https://aptible.com",
    title: "Product Marketing Lead",
    dates: "2020–2021",
    bullets: [
      "Led full marketing strategy across multiple products with a 2-person team.",
      "Implemented jobs-to-be-done framework across all personas and messaging.",
    ],
  },
  {
    company: "RADAR",
    url: "https://radar.com",
    title: "Director of Marketing",
    dates: "2019–2020",
    bullets: [
      "Ran all marketing across 2 product categories, 5 products, B2B + B2C.",
      "Led 3-person team: PMM, brand, demand gen, comms, events, analytics.",
    ],
  },
  {
    company: "Align",
    url: "https://aligninvesting.com",
    title: "CEO & Co-Founder",
    dates: "2018–2019",
    bullets: [
      "Co-founded values-aligned investing fintech (SEC registered RIA).",
      "Owned ops, product, marketing, design, investment strategy, and compliance.",
    ],
  },
  {
    company: "Twitter",
    url: "https://twitter.com",
    title: "Senior Product Marketing Manager",
    dates: "2014–2018",
    bullets: [
      "GTM strategy for developer and brand products.",
      "Built partner marketing program; created internal startup org for new customer segments.",
    ],
  },
  {
    company: "Gnip",
    url: "https://gnip.com",
    title: "Marketing Manager",
    dates: "2012–2014",
    bullets: [
      "Owned full growth stack: paid, SEO, email, automation, social, content.",
      "Rebuilt website and positioning to drive new customer acquisition.",
    ],
  },
  {
    company: "Giantnerd",
    url: "https://giantnerd.com",
    title: "Head of Marketing",
    dates: "2008–2011, 2012",
    bullets: [
      "Drove double-digit revenue growth while reducing marketing costs through channel optimization.",
    ],
  },
];

function ExperienceItem({
  job,
  index,
  isInView,
}: {
  job: (typeof jobs)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.1 + index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative pl-6 md:pl-8"
    >
      {/* Timeline line */}
      <div
        className="absolute left-0 top-0 h-full w-px"
        style={{ background: "rgba(255,255,255,0.06)" }}
        aria-hidden="true"
      />
      {/* Timeline dot */}
      <div
        className="absolute left-[-3px] top-[9px] h-[7px] w-[7px] rounded-full transition-colors duration-200 group-hover:bg-blue-500"
        style={{ background: "#2a2a3a" }}
        aria-hidden="true"
      />

      <article className="pb-10">
        <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <a
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-lg font-semibold transition-colors duration-150"
            style={{ color: "#e8e8e8" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#3b82f6")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#e8e8e8")
            }
          >
            {job.company}
          </a>
          <span className="font-sans text-base" style={{ color: "#888899" }}>
            {job.title}
          </span>
          <span
            className="font-mono ml-auto text-xs"
            style={{ color: "#555566" }}
          >
            {job.dates}
          </span>
        </div>

        <ul className="space-y-1.5">
          {job.bullets.map((bullet, bi) => (
            <li
              key={bi}
              className="font-sans flex items-start gap-3 text-sm"
              style={{ color: "#888899", lineHeight: "1.6" }}
            >
              <span
                style={{ color: "#3b82f6", marginTop: "0.3em", flexShrink: 0 }}
                aria-hidden="true"
              >
                —
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </article>
    </motion.div>
  );
}

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      aria-label="Work Experience"
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
        className="mb-12"
      >
        <span
          className="font-mono mb-4 block text-xs tracking-widest uppercase"
          style={{ color: "#3b82f6", letterSpacing: "0.2em" }}
        >
          Experience
        </span>
        <h2
          className="font-sans text-2xl font-semibold md:text-3xl"
          style={{ color: "#e8e8e8" }}
        >
          Where I&apos;ve Built
        </h2>
      </motion.div>

      <div>
        {jobs.map((job, i) => (
          <ExperienceItem
            key={job.company + job.dates}
            job={job}
            index={i}
            isInView={isInView}
          />
        ))}
      </div>
    </section>
  );
}
