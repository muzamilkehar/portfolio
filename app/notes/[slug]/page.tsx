import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notes } from "@/lib/notes";
import { siteConfig } from "@/lib/data";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const note = notes.find((n) => n.slug === params.slug);
  if (!note) return {};

  return {
    title: note.title,
    description: note.excerpt,
    alternates: { canonical: `/notes/${note.slug}` },
    openGraph: {
      title: `${note.title} — ${siteConfig.name}`,
      description: note.excerpt,
      type: "article",
      publishedTime: note.date,
    },
  };
}

export default function NotePage({ params }: { params: { slug: string } }) {
  const note = notes.find((n) => n.slug === params.slug);
  if (!note) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-content px-6 py-16">
        <Link
          href="/notes"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-signal"
        >
          <ArrowLeft size={14} />
          All notes
        </Link>

        <article className="mt-6 max-w-[68ch]">
          <time className="text-sm text-muted" dateTime={note.date}>
            {new Date(note.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mt-2 font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
            {note.title}
          </h1>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
            {note.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}   