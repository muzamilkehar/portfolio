"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { track } from "@vercel/analytics";
import { siteConfig } from "@/lib/data";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#skills", label: "Skills" },
  { href: "/#projects", label: "Projects" },
  { href: "/notes", label: "Notes" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a
          href="/#top"
          className="font-display text-lg font-medium tracking-tight text-paper"
        >
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.resumeUrl}
            download
            onClick={() => track("resume_download", { location: "navbar" })}
            className="rounded border border-signal/40 px-4 py-2 text-sm text-signal transition-colors hover:bg-signal/10"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-paper md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-ink px-6 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-muted hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={siteConfig.resumeUrl}
                download
                onClick={() => track("resume_download", { location: "navbar_mobile" })}
                className="inline-block rounded border border-signal/40 px-4 py-2 text-sm text-signal"
              >
                Download résumé
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}