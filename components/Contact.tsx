"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { track } from "@vercel/analytics";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-6 py-20">
      <div className="rounded border border-border bg-panel px-8 py-14 text-center sm:px-16">
        <h2 className="font-display text-2xl font-medium tracking-tight text-paper sm:text-3xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-3 max-w-[50ch] text-muted">
          I read every message myself. Tell me what you&apos;re building and
          I&apos;ll reply from {siteConfig.location}.
        </p>

        <a
          href={`mailto:${siteConfig.email}`}
          onClick={() => track("email_click", { location: "contact" })}
          className="mt-8 inline-block font-display text-xl text-signal underline decoration-signal/40 underline-offset-4 hover:decoration-signal sm:text-2xl"
        >
          {siteConfig.email}
        </a>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            onClick={() => track("email_click", { location: "contact_icon" })}
            className="rounded border border-border p-3 text-paper transition-colors hover:border-signal/50 hover:text-signal"
          >
            <Mail size={18} />
          </a>
          
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            onClick={() => track("linkedin_click", { location: "contact" })}
            className="rounded border border-border p-3 text-paper transition-colors hover:border-signal/50 hover:text-signal"
          >
            <Linkedin size={18} />
          </a>
          
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            onClick={() => track("github_click", { location: "contact" })}
            className="rounded border border-border p-3 text-paper transition-colors hover:border-signal/50 hover:text-signal"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}