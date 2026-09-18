"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";
import { siteConfig } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-content px-6 pb-20 pt-16 md:pt-24">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16"
      >
        <div>
          <motion.p variants={item} className="text-sm text-signal">
            {siteConfig.availability}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-medium leading-[1.1] tracking-tight text-paper sm:text-5xl"
          >
            I build software for farms, shops, and everything in between.
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-[62ch] text-base leading-relaxed text-muted sm:text-lg">
            {siteConfig.summary}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded bg-signal px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-signal/90"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-border px-5 py-3 text-sm text-paper transition-colors hover:border-signal/50 hover:text-signal"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex items-center gap-2 rounded border border-border p-3 text-paper transition-colors hover:border-signal/50 hover:text-signal"
            >
              <Github size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="relative mx-auto w-full max-w-[320px]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded border border-border bg-panel">
            <Image
              src="https://res.cloudinary.com/ttzxb2pd/image/upload/v1789546185/Profile_picture_1.jpg"
              alt={`${siteConfig.name}, ${siteConfig.role}`}
              fill
              priority
              sizes="(min-width: 768px) 320px, 80vw"
              className="object-cover grayscale-[15%]"
            />
          </div>
          <div className="absolute -bottom-4 left-4 rounded border border-border bg-ink px-3 py-1.5 text-xs text-muted">
            {siteConfig.location}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
