"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    videoRef.current?.play().catch(() => {
      /* Autoplay can be blocked before the file exists locally — ignore. */
    });
    setPlaying(true);
  };

  const pause = () => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
    setPlaying(false);
  };

  const toggle = () => (playing ? pause() : play());

  return (
    <article className="border border-border">
      <button
        type="button"
        onMouseEnter={play}
        onMouseLeave={pause}
        onClick={toggle}
        className="group relative block aspect-video w-full overflow-hidden bg-panel2 text-left"
        aria-label={`Play preview of ${project.title}`}
      >
        {/*
          Landscape (16:9) media. Point these at your Cloudinary URLs in
          lib/data.ts, or drop local files matching the paths already there.
        */}
        <video
          ref={videoRef}
          className="h-full w-full object-fit"
          src={project.video}
          poster={project.poster}
          muted
          loop
          playsInline
          preload="none"
        />
        {!playing && (
          <span className="absolute inset-0 flex items-center justify-center bg-ink/20 opacity-0 transition-opacity group-hover:opacity-100">
            <Play size={28} className="text-paper" fill="currentColor" />
          </span>
        )}
      </button>

      <div className="p-6">
        <h3 className="font-display text-xl text-paper">{project.title}</h3>
        <p className="mt-2 text-muted">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded border border-border px-2.5 py-1 text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm text-signal underline decoration-signal/40 underline-offset-4 hover:decoration-signal"
        >
          View case study
          <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}