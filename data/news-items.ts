export type NewsItem = {
  title: string;
  date: string;
  category: "Publication" | "Event" | "Group";
  summary: string;
  image?: string;
  href?: string;
};

export const newsItems: NewsItem[] = [
  {
    title: "New work on acoustically mediated piezoelectric antennas",
    date: "February 2026",
    category: "Publication",
    summary:
      "Our recent work introduces an acoustic and electromagnetic co-simulation framework for asymmetrically excited piezoelectric antennas.",
    image: "/recent-publications/liu-feature.png",
    href: "https://doi.org/10.1109/tap.2025.3639509",
  },
  {
    title: "Tuning anisotropic magnon transport in multiferroic oxides",
    date: "October 2025",
    category: "Publication",
    summary:
      "This study explores how crystal symmetry can be used to tune magnon transport in multiferroic oxide systems.",
    image: "/recent-publications/qiu-feature.png",
    href: "https://doi.org/10.1002/adfm.202518681",
  },
  {
    title: "Group meeting and Fragrant Hills Park outing",
    date: "September 2025",
    category: "Event",
    summary:
      "The group held a fall meeting followed by a shared outing to Fragrant Hills Park.",
    href: "/gallery/2025-09",
  },
  {
    title: "Controlling antiferromagnetic magnon transport by interfacial coupling",
    date: "July 2025",
    category: "Publication",
    summary:
      "Our work shows how interfacial coupling can regulate antiferromagnetic magnon transport across distinct transport regimes.",
    image: "/recent-publications/chen-feature.png",
    href: "https://doi.org/10.1002/adfm.202507757",
  },
  {
    title: "Teacher's Day celebration",
    date: "September 2024",
    category: "Group",
    summary:
      "A group gathering for research discussion and Teacher's Day celebration.",
    href: "/gallery/2024-09",
  },
  {
    title: "Spring group meeting and team building exercise",
    date: "March 2024",
    category: "Event",
    summary:
      "The lab came together for group meeting sessions and collaborative team-building activities.",
    href: "/gallery/2024-03",
  },
];
