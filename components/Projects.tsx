import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-content px-6 py-20">
      <div className="mb-10 max-w-[60ch]">
        <h2 className="font-display text-2xl font-medium tracking-tight text-paper sm:text-3xl">
          Things I&apos;ve shipped
        </h2>
        <p className="mt-3 text-muted">
          Hover a preview to see it in motion — or tap it on a phone. Open a
          case study for the full write-up.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}