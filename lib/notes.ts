// ---------------------------------------------------------------------------
// Notes / blog content. Plain data + paragraphs — no MDX setup required.
// Add a new object to `notes` and a page is generated automatically at
// /notes/<slug>.
// ---------------------------------------------------------------------------

export type Note = {
  slug: string;
  title: string;
  date: string; // ISO format, e.g. "2026-09-15"
  excerpt: string;
  // Each string in `body` renders as its own paragraph.
  body: string[];
};

export const notes: Note[] = [
  {
    slug: "role-based-access-control-without-a-real-backend-yet",
    title: "Setting up role-based access control before the backend exists",
    date: "2026-08-20",
    excerpt:
      "How I structured auth for a multi-role dashboard on the Smart Agriculture Platform before the real backend was ready.",
    body: [
      "// TODO: this is a starter draft — rewrite it in your own words and add real code snippets from your AuthContext once you're happy with it.",
      "On the Smart Agriculture Platform, admins and farmers needed genuinely different dashboards — different navigation, different theming (purple for admin, green for farmer), different pages they were even allowed to reach. Building that against a real backend from day one would have blocked the whole team on the auth API being finished first.",
      "Instead, I built a custom AuthContext and AuthProvider with dummy credentials standing in for the real login endpoint. Every component that needed to know 'who is this and what can they see' read from the same context, so swapping the dummy logic for a real JWT-based API later meant changing one file, not every page that checked a role.",
      "The role check itself lived in one place: a small wrapper around routes that redirects anyone without the right role, rather than scattering `if (user.role === 'admin')` checks through individual pages. That's the part I'd keep even after the real backend lands — centralizing the check is what makes RBAC maintainable instead of a landmine.",
    ],
  },
  {
    slug: "wiring-cloudinary-into-a-mern-admin-panel",
    title: "Wiring Cloudinary into a MERN admin panel",
    date: "2026-09-01",
    excerpt:
      "Notes on the image upload pipeline behind the World Computers & Printers admin panel — Multer, Cloudinary, and where each piece does its job.",
    body: [
      "// TODO: this is a starter draft — swap in your own specifics (env var names, folder structure, any gotchas you hit) once you're ready to publish it.",
      "The World Computers & Printers admin panel needed product images uploaded, stored, and served without me hand-rolling a file storage system. Multer handles the upload on the Express side — it's the thing that actually receives the file from the admin's browser — and then hands the file off to Cloudinary rather than saving it to local disk.",
      "That split matters for deployment: the backend runs on Render, and Render's filesystem isn't persistent across deploys. Saving images locally would mean losing every product photo the next time the service redeploys. Cloudinary being the actual source of truth for images means the backend can be redeployed freely without touching a single photo.",
      "One thing worth calling out for anyone doing the same: standardize your image format early. Mixing JPG, PNG, and WebP uploads makes the frontend's `<Image>` handling and load times inconsistent. Converting everything to `.webp` on the way in kept file sizes predictable across the whole catalog.",
    ],
  },
];