import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Short technical write-ups on things I've built — auth, infrastructure, and the small decisions that don't fit in a project card.",
  alternates: { canonical: "/notes" },
};

export default function NotesIndex() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-content px-6 py-16">
        <h1 className="font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
          Notes
        </h1>
        <p className="mt-3 max-w-[60ch] text-muted">
          Short write-ups on the things I build — the decisions and
          trade-offs that don&apos;t fit on a project card.
        </p>

        <div className="mt-10 border-t border-border">
          {notes.map((note) => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="block border-b border-border py-8 transition-colors hover:bg-panel/40"
            >
              <time className="text-sm text-muted" dateTime={note.date}>
                {new Date(note.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="mt-2 font-display text-xl text-paper">
                {note.title}
              </h2>
              <p className="mt-2 max-w-[62ch] text-muted">{note.excerpt}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}