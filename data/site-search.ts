export type SearchEntry = {
  href: string;
  title: string;
  description: string;
  keywords: string[];
};

export const searchEntries: SearchEntry[] = [
  {
    href: "/",
    title: "Home",
    description:
      "Overview of Nan Lab research in spintronics, magnetoelectric systems, MEMS, PMUT, and beyond-CMOS technologies.",
    keywords: ["nan lab", "home", "overview", "contact", "highlights"],
  },
  {
    href: "/research",
    title: "Research",
    description:
      "Focus areas including spintronic devices, magnetoelectric transduction, MEMS and PMUT systems, and hardware-software co-design.",
    keywords: ["research", "spintronics", "mems", "pmut", "magnetoelectric"],
  },
  {
    href: "/people",
    title: "People",
    description:
      "Principal investigator, students, alumni, and collaborators in the Nan Lab research group.",
    keywords: ["people", "team", "students", "alumni", "tianxiang nan"],
  },
  {
    href: "/publications",
    title: "Publications",
    description:
      "Selected papers, conference proceedings, and preprints from the Nan Lab research program.",
    keywords: ["publications", "papers", "journal", "conference", "preprint"],
  },
  {
    href: "/news",
    title: "News",
    description:
      "Recent updates on publications, awards, talks, and milestones from the Nan Lab community.",
    keywords: ["news", "updates", "awards", "talks", "milestones"],
  },
  {
    href: "/gallery",
    title: "Gallery",
    description:
      "Lab life, prototypes, conferences, outreach activities, and visual snapshots of ongoing work.",
    keywords: ["gallery", "photos", "lab life", "prototypes", "conference"],
  },
  {
    href: "/join",
    title: "Join Us",
    description:
      "Open opportunities for PhD, master's, undergraduate internships, and collaborations.",
    keywords: ["join", "apply", "phd", "master", "internship", "collaboration"],
  },
];
