import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, siteConfig } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${siteConfig.name}`,
      description: project.description,
      images: [{ url: project.poster }],
    },
  };
}

export default function ProjectCaseStudy({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-content px-6 py-16">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-signal"
        >
          <ArrowLeft size={14} />
          All projects
        </Link>

        <h1 className="mt-6 font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 max-w-[62ch] text-lg text-muted">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-signal underline decoration-signal/40 underline-offset-4 hover:decoration-signal"
            >
              <ExternalLink size={14} />
              Visit project
            </a>
          )}
        </div>

        <div className="relative mt-10 aspect-video w-full overflow-hidden rounded border border-border bg-panel2">
          <video
            className="h-full w-full object-cover"
            src={project.video}
            poster={project.poster}
            muted
            loop
            playsInline
            controls
          />
        </div>

        <div className="mt-12 grid gap-10 border-t border-border pt-10 sm:grid-cols-3">
          <div>
            <h2 className="text-sm text-signal">The problem</h2>
            <p className="mt-3 text-muted">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-sm text-signal">The approach</h2>
            <p className="mt-3 text-muted">{project.approach}</p>
          </div>
          <div>
            <h2 className="text-sm text-signal">The outcome</h2>
            <p className="mt-3 text-muted">{project.outcome}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <h2 className="text-sm text-signal">Built with</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded border border-border px-2.5 py-1 text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}