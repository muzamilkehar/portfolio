export const siteConfig = {
  name: "Muzamil Kehar",
  role: "Full-Stack Developer",
  location: "Shikarpur, Sindh, Pakistan",
  availability: "Open to freelance work & internships",
  summary:
    "I build full-stack web and mobile products — from AI-powered platforms to client business sites — for teams in Pakistan and beyond. Final-year Computer Science student, currently shipping a smart agriculture platform as my degree project.",
  email: "muzamilalikehar2004@gmail.com",
  linkedin: "https://www.linkedin.com/in/muzamil-kehar2004",
  github: "https://github.com/muzamilkehar",
  resumeUrl: "/resume/Muzamil_Kehar_FullStack_Developer_Resume.docx",
  siteUrl: "https://muzamilkehar.dev", // TODO: replace with your real domain once you have one
  keywords: [
    "Muzamil Kehar",
    "Full-Stack Developer Pakistan",
    "React Developer Sindh",
    "Next.js Developer Pakistan",
    "MERN Stack Developer",
    "Freelance Web Developer Shikarpur",
    "AI-powered web applications",
    "Flutter Developer Pakistan",
  ],
};

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Full-stack web applications",
    description:
      "React and Next.js frontends wired to Node/Express or FastAPI backends — planned, built, and deployed end to end.",
  },
  {
    title: "Business & marketing sites",
    description:
      "MERN-stack sites with an admin panel, image pipeline, and technical SEO handled from the first commit, not bolted on later.",
  },
  {
    title: "AI/ML-powered features",
    description:
      "Turning a trained model into something a client can actually use — an API around the model plus an interface in front of it.",
  },
  {
    title: "Mobile apps",
    description:
      "Flutter apps that share data and logic with a companion web dashboard, instead of two disconnected codebases.",
  },
  {
    title: "Security-conscious builds",
    description:
      "Authentication, role-based access control, and a working knowledge of where web apps typically get attacked.",
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "FastAPI", "REST APIs"],
  },
  {
    category: "Mobile",
    items: ["Flutter", "Dart","Firebase", "REST APIs"],
  },
  {
    category: "AI / ML",
    items: ["Python", "scikit-learn", "Pandas", "NumPy", "OpenCV", "TensorFlow", "PyTorch"],
  },
  {
    category: "Data & auth",
    items: ["MongoDB", "Mongoose", "JWT", "bcrypt", "PostgreSQL", "MySQL"],
  },
  {
    category: "Cloud & tooling",
    items: ["Vercel", "Render", "Cloudinary", "Git & GitHub"],
  },

];

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  codeUrl?: string;
  poster: string;
  video: string;
  problem: string;
  approach: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "smart-agriculture-platform",
    title: "Smart Agriculture Platform",
    description:
      "An AI-powered platform for plant disease detection, crop yield prediction, soil monitoring, and weather forecasting — built with a four-person team as my final year project. Role-based dashboards for admins and farmers, each with its own theme.",
    tech: ["React", "Vite", "Tailwind CSS", "React Router", "OpenWeatherMap API"],
    liveUrl: undefined,
    codeUrl: undefined,
    poster: "https://res.cloudinary.com/ttzxb2pd/image/upload/v1786874493/project1-img.png",
    video: "https://res.cloudinary.com/ttzxb2pd/video/upload/v1786874546/project1.mp4",
    problem:
      "Farmers and agronomy students had no single dashboard combining disease detection, yield prediction, soil monitoring, and weather forecasting — each tool lived separately, if it existed at all.",
    approach:
      "Built as a four-person final year project with role-based dashboards for admins and farmers, each with distinct theming (purple for admin, green for farmer). I handled the full-stack build: a sticky navbar, the full home page, authentication pages, the multi-page dashboard, and a role-based access control system on top of a custom AuthContext. Muhammad Kaif built the backend, Bakhtawar Mughal the IoT side, and Maria Sony the AI/ML models. OpenWeatherMap powers the live forecasts.",
    outcome:
      "Reached an advanced stage with authentication, the dashboard, and RBAC all working. The Plant.id disease-detection API hit CORS restrictions from the browser, so the demo uses realistic dummy results for that one module while the rest of the platform runs on real data. // TODO: update this once the CORS workaround or a backend proxy is in place.",
  },
  {
    slug: "sentryscan",
    title: "SentryScan",
    description:
      "A website security scanner — hand it a URL and it surfaces vulnerabilities, risks, and likely attack surfaces. Built as my information security course project.",
    // TODO: confirm the exact stack you used and swap these tags out.
    tech: ["React", "Node.js", "Express"],
    liveUrl: undefined,
    codeUrl: undefined,
    poster: "https://res.cloudinary.com/ttzxb2pd/image/upload/v1789738048/Screenshot_2026-09-18_182643.png",
    video: "https://res.cloudinary.com/ttzxb2pd/video/upload/v1789739945/Sentry-video.mp4",
    problem:
      "Manually auditing a website for security issues is slow and easy to get wrong. The course brief called for a tool that takes a URL and immediately flags what actually needs attention.",
    // TODO: this is a placeholder — replace with the real checks/approach you built (e.g. which vulnerability classes you scan for, how results are scored).
    approach:
      "[Add the specific checks and scanning approach you implemented here — e.g. which vulnerability classes SentryScan looks for and how it scores results.]",
    outcome:
      "Delivered as a complete, full-page site for the information security course, producing accurate results for a given URL.",
  },
 
  {
    slug: "world-computers-printers",
    title: "World Computers & Printers",
    description:
      "A full-stack MERN site and admin panel for a computer and printer shop in Shikarpur — product catalog, category management, image uploads, and full technical SEO. A paid client build, live in production.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Cloudinary"],
    liveUrl: undefined,
    codeUrl: "https://github.com/worldcomputerprinters/frontend",
    poster: "https://res.cloudinary.com/ttzxb2pd/image/upload/v1789738150/Screenshot_2026-09-18_182835.png",
    video: "https://res.cloudinary.com/ttzxb2pd/video/upload/v1786876022/project-3.mp4",
    problem:
      "A real computer and printer shop in Shikarpur needed an online presence that could showcase products and categories, without the overhead of a full checkout the owner didn't want yet.",
    approach:
      "Built full-stack MERN — React + Vite on the frontend, Node/Express/MongoDB Atlas on the backend — with a JWT-protected admin panel for product and category CRUD, Cloudinary + Multer for image uploads, and WhatsApp inquiry buttons in place of a cart. Full technical SEO from day one: meta tags, Open Graph, Twitter Cards, JSON-LD local business schema, sitemap.xml, and robots.txt.",
    outcome:
      "Live and in production for a paying client. Currently building an image carousel for product detail pages so each product can show multiple angles.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    // TODO: replace with a real quote once you have one — don't publish a
    // placeholder testimonial as if it's real feedback.
    quote:
      "[Add a short quote here once the client has given you one — even a sentence from a WhatsApp message works.]",
    name: "[Client name]",
    role: "Owner, World Computers & Printers",
  },
];